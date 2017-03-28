<template>
    <div>
        <mt-header :title='title' fixed>
            <mt-button icon="back" slot="left" @click.native="$router.go(-1)"></mt-button>
        </mt-header>
        <div>
            <div id="busMap"></div>
            <div class="zoom">
                <img src="../../assets/img/addbt.png" v-on:click="ZoomIn" />
                <img src="../../assets/img/cutbt.png" v-on:click="ZoomOut" />
            </div>
        </div>
    </div>
</template>

<script>
    // import { Header, Indicator } from 'mint-ui';
    import { Header, Button, Indicator, Toast } from 'mint-ui';
    import { MapUtil } from "../../assets/js/MapUtil.js";
    import { Script } from '../../assets/js/Script.js';
    var mapZoom = 15;
    var map;
    var marker;
    var _this;
    export default {

        name: 'bicycle',
        data() {
            return {
                title: 'IC卡办理点'
            }
        },
        components: {
            "mt-button": Button
        },
        methods: {
            ZoomIn() {
                if (map != null && mapZoom < 18) {
                    map.setZoom(++mapZoom);
                } else {
                    Toast({
                        message: '已经放大到最大',
                        duration: 1000
                    });
                }
            },
            ZoomOut() {
                if (map != null && mapZoom > 3) {
                    map.setZoom(--mapZoom);
                } else {
                    Toast({
                        message: '已经缩小到最小',
                        duration: 1000
                    });
                }
            },
        },
        beforeMount() {
            _this = this;
            try {
                if (AMap == undefined || AMap == null) {
                    let script = new Script();
                    script.addScritp("http://webapi.amap.com/maps?v=1.3&key=bb191f452c07a01ab096249c0b35babc", MapInit)
                } else {
                    MapInit();
                }
            } catch (e) {
                let script = new Script();
                script.addScritp("http://webapi.amap.com/maps?v=1.3&key=bb191f452c07a01ab096249c0b35babc", MapInit)
            }
        }
    }

    // 实例化点标记
    function addMarker(list) {
        var markers = [], positions = [];
        for (var i = 0; i < list.length; i++) {
            positions.push([list[i].lon, list[i].lat]);
        }
        for (var i = 0, marker; i < positions.length; i++) {
            marker = new AMap.Marker({
                map: map,
                position: positions[i]
            });
            markers.push(marker);
        }
    }

    function MapInit() {

        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });

        map = new AMap.Map('busMap', {
            zoom: mapZoom
        });

        let mapUtil = new MapUtil(map);
        mapUtil.initLocation(() => {
            mapUtil.getMyLocation(
                () => {
                    Indicator.close()
                    _this.$http.get('/api/v1/hmt/getHmt').then(response => {
                        // success callback
                        var list = response.data.data;
                        addMarker(list);
                    }, response => {
                        // error callback
                        console.log(response);
                    })
                },
                () => {
                    Toast("定位失败");
                },
            )
        });
    }

</script>

<style lang="scss">
    .mint-tab-item-label {
        font-size: 18px;
    }

    .mint-search {
        margin-top: 40px;
    }

    #busMap {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .zoom {
        position: absolute;
        zoom: 1;
        right: 0.5rem;
        bottom: 50px;
        width: 37px;
    }

    .zoom img {
        width: 37px;
    }
</style>
