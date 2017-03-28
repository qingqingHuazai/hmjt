<template>
    <div>
        <mt-header :title='title' fixed>
            <mt-button icon="back" slot="left" @click.native="$router.go(-1)"></mt-button>
        </mt-header>
        
        <mt-search v-model="value" cancel-text="取消" placeholder="搜索">
        </mt-search>


        <mt-navbar >
            <mt-tab-item id="1">全省</mt-tab-item>
            <mt-tab-item id="2">珠三角</mt-tab-item>
            <mt-tab-item id="3">粤东</mt-tab-item>
            <mt-tab-item id="4">粤西</mt-tab-item>
            <mt-tab-item id="5">粤北</mt-tab-item>
            <mt-tab-item id="6">惠州</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container >
            <mt-tab-container-item id="1">
                <div>1111111</div>
                <div>1111111</div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div>1111111</div>
                <div>1111111</div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div>1111111</div>
                <div>1111111</div>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <div>1111111</div>
                <div>1111111</div>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                <div>1111111</div>
                <div>1111111</div>
            </mt-tab-container-item>
            <mt-tab-container-item id="6">
                <div>1111111</div>
                <div>1111111</div>
            </mt-tab-container-item>
        </mt-tab-container>

    </div>
</template>

<script>
    import { Header, Search, Navbar, TabItem } from 'mint-ui';
    export default {
        name: 'highway',
        data() {
            return {
                title: '高速公路'
            }
        },
        components: {
            Search, Navbar, TabItem, 
        },
        methods:{
            
        }
    }

</script>

<style lang="scss">
    .mint-tab-item-label {
        font-size: 18px;
    }
    
    .mint-search {
        margin-top: 40px;
    }
</style>