<template>
    <div>
        <mt-header :title='title' fixed>
            <mt-button icon="back" slot="left" @click.native="$router.go(-1)"></mt-button>
        </mt-header>
        <div class="content">
            <iframe :src="url" width="100%" height="100%" scrolling="false" frameborder="0" marginwidth="0" marginheight="0"></iframe>
        </div>
    </div>
</template>

<script>
    import { Header } from 'mint-ui';
    export default {
        name: 'bus',
        created() {

        },
        data() {
            return {
                title: "实时公交",
                url: "http://web.chelaile.net.cn/wwd/index?src=webapp_huizhoutraffic"
            }
        }
    }

</script>

<style lang="scss">

</style>