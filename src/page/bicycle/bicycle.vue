<template>
    <div>
        <mt-header :title='title' fixed>
            <mt-button icon="back" slot="left" @click.native="$router.go(-1)"></mt-button>
        </mt-header>
        <div>
            <div id="busMap"></div>
        </div>
    </div>
</template>

<script>
    // import { Header, Indicator } from 'mint-ui';
    import { Header, Button, Indicator } from 'mint-ui';
    import { MapUtil } from "../../assets/js/MapUtil.js";
    import { Script } from '../../assets/js/Script.js'
    export default {
        name: 'bicycle',
        data() {
            return {
                title: '自行车服务网点'
            }
        },
        components: {
            "mt-button": Button
        },
        methods: {

        },
        beforeMount() {


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

    function MapInit() {

        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });

       var map = new AMap.Map('busMap', {
            zoom: 15
        });

        let mapUtil = new MapUtil(map);
        mapUtil.initLocation(() => {
            mapUtil.getMyLocation(
                () => {
                    Indicator.close()
                },
                () => {
                    Toast("定位失败");
                }
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
</style>