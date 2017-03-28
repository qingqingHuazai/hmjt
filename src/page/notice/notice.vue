<template>
    <div>
        <mt-header :title='title' fixed>
            <mt-button icon="back" slot="left" @click.native="$router.go(-1)"></mt-button>
        </mt-header>
        <div class="content">
            <ul id="example-1">

                <li v-for="item in list" v-on:click="godetail(item.docid)" >
                    <img class="gonggao" src="../../assets/img/notice/notice_type_gonggao.png" />
                    <label class="title">{{ item.doctitle }}</label>
                    <label class="time">{{ item.pubtime }}</label>
                    <img class="jiantoou" src="../../assets/img/notice/arrows_right.png" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { Header } from 'mint-ui';
    export default {
        data() {
            return {
                title: '交通公告',
                list: [],
            }
        },
        methods: {
            godetail(e) {
                this.$router.push({ name:"detail",params:{id :e}});
            }
        },
        components: {

        },
        beforeMount() {
            this.$http.get('/api/v1/news/fetchNotice?pageIndex=1&pageSize=10').then(response => {
            // success callback
            var list = response.data.data;
            for (let i in list) {
              list[i].pubtime = list[i].pubtime
            }
           // this.$data.list = list;
              this.list = list;
          }, response => {
            // error callback
            console.log(response);
          })
        }
    }

</script>

<style lang="scss">
    li .gonggao {
        height: 50px;
        margin-top: 15px;
        margin-left: 5px;
        width: 55px;
        /*position: absolute;*/
    }

    li {
        border-bottom: solid 1px #f1f1f1;
        height: 80px;
    }

    li .title {
        margin-top: 10px;
        float: left;
        font-size: 17px;
        position: absolute;
        margin-left: 10px;
        margin-right: 40px;
    }

    li .time {
        margin-top: 53px;
        float: right;
        right: 0;
        font-size: 12px;
        position: absolute;
        margin-right: 40px;
    }

    li .jiantoou {
        height: 20px;
        width: 10px;
        margin-right: 5px;
        /*position: absolute;*/
        margin-top: 30px;
        float: right;
        right: 0;

    }
</style>
