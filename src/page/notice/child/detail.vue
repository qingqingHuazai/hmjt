<template>
    <div>
        <mt-header :title='title' fixed>
            <mt-button icon="back" slot="left" @click.native="$router.go(-1)"></mt-button>
        </mt-header>
        <div class="content">
            <h3>{{subtitle}}</h3>
            <p>{{content}}</p>
            <label>{{date}}</label>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "公告详情",
                subtitle: "",
                content: "",
                date: ""
            }
        },
        methods: {

        },
        beforeMount() {

            this.$http.get('/api/v1/news/fetchNotice?pageIndex=1&pageSize=10').then(response => {
                // success callback
                var list = response.data.data;
                var id = this.$route.params.id;
                for (let i in list) {
                    if (list[i].docid == id) {
                        this.$data.subtitle = list[i].doctitle;
                        this.$data.content = list[i].doccontent;
                        this.$data.date = list[i].pubtime;
                    }
                }

            }, response => {
                // error callback
                console.log(response);
            })
        }
    }

</script>

<style lang="scss">
    h3 {
        text-align: center;
        margin: 20px
    }
    
    p {
        margin: 0 10px;
        text-indent: 2em;
        text-align: justify;
        text-justify: inter-ideograph;
        font-size: 16px
    }
    
    label {
        float: right;
        margin-top: 20px;
        margin-right: 20px;
        font-size: 16px
    }
</style>