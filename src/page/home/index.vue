import highway from './highway/highway.vue'
<template>
    <div class="out">
        <!--<img src="../../assets/img/main_bg.png" />-->

        <div class="container">
            <div>
                <dl @click="gaosu">
                    <dt><img src="../../assets/img/home/main_menu_speed_way.png" /></dt>
                    <dd>高速公路</dd>
                </dl>
                <dl v-on:click="traffic">
                    <dt><img src="../../assets/img/home/main_menu_city_traffic.png" /></dt>
                    <dd>市区路况</dd>
                </dl>
                <dl v-on:click="notice">
                    <dt><img src="../../assets/img/home/main_menu_projects.png" /></dt>
                    <dd>交通公告</dd>
                </dl>
            </div>
            <div>
                <dl @click="bus">
                    <dt><img src="../../assets/img/home/main_menu_bus.png" /></dt>
                    <dd>实时公交</dd>
                </dl>
                <dl v-on:click="tong">
                    <dt><img src="../../assets/img/home/main_menu_hmt.png" /></dt>
                    <dd>惠州通</dd>
                </dl>
                <dl>
                    <dt><img src="../../assets/img/home/main_menu_aviation_railway.png" /></dt>
                    <dd>航空铁路</dd>
                </dl>
            </div>
            <div>
                <dl @click="transport">
                    <dt><img src="../../assets/img/home/main_menu_long_distance_coach.png" /></dt>
                    <dd>长途客运</dd>
                </dl>
                <dl v-on:click="bicycle">
                    <dt><img src="../../assets/img/home/main_menu_bicycle.png" /></dt>
                    <dd>自行车</dd>
                </dl>
                <dl @click="aboutus">
                    <dt><img src="../../assets/img/home/main_menu_aviation_railway.png" /></dt>
                    <dd>关于我们</dd>
                </dl>
            </div>
        </div>

    </div>

</template>
<style>
    .out {
        background: url(../../assets/img/main_bg.png);
        width: 375px;
        height: 667px;
        background-size: 100% 100%;
    }
    
    dd {
        text-align: center;
        margin: 0;
        color: white;
    }
    
    dt img {
        height: 60%;
        width: 60%;
    }
    
    dl {
        text-align: center;
        margin: 13px 0 0 0;
    }
    
    .container {
        padding: 44% 0;
        height: 40%;
        width: 100%;
    }
    
    img {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    
    dl {
        width: 33%;
        float: left;
    }
</style>
<script>
    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        },
        components: {

        },
        methods: {
            gaosu() {
                this.$router.push({ path: '/highway' })
            },
            tong() {
                this.$router.push({ path: '/tong' })
            },
            bus() {
                this.$router.push({ path: '/bus' })
            },
            transport() {
                this.$router.push({ path: '/transport' })
            },
            aboutus() {
                this.$router.push({ path: '/aboutus' })
            },
            notice() {
                this.$router.push({ path: '/notice' })
            },
            bicycle() {
                this.$router.push({ path: '/bicycle' })
            },
            traffic() {
                this.$router.push({ path: '/traffic' })
            }

        }

    }

</script>