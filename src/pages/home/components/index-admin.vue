<template>
    <div class="index-admin">
        <div class="admin">
            <img class="admin-image" v-bind:src="whImage"/>
            <div class="admin-hello">
                {{ wh }}
            </div>
            <div class="admin-edit" v-on:click="openAdmin">编辑分组</div>
        </div>
    </div>
</template>

<script>
    import { openLink } from '../../../lib/util.js';
    var lock = true;
    export default{
        name: 'admin',
        props: ['admin','corpId','userInfo'],
        data: function () {
            return {
                wh: '',
                whImage: ''
            };
        },
        mounted: function () {
            console.log('wh',this.wh);
            this.$watch('userInfo',function(){
                this.updateName();
            });
        },
        methods: {
            openAdmin: function () {
                if (lock){
                    lock = false;
                    const adminUrl = "https://h5.dingtalk.com/industry_versatility/get.html?dd_progress=false&corpId=" + this.corpId;
                    openLink(adminUrl, function(){
                        lock = true;
                    });
                }
            },
            updateName: function(){
                const dateTime = new Date().getHours();
                const isAdmin = this.userInfo.isAdmin;
                const name = this.userInfo.name;
                if(name){
                    if (dateTime >= 5 && dateTime <= 12) {
                        this.wh = isAdmin ? '早上好，管理员，' + name : '早上好，' + name;
                        this.whImage = 'https://gw.alicdn.com/tps/TB1ubtjOFXXXXbzXpXXXXXXXXXX-36-36.jpg';
                    } else if (dateTime > 12 && dateTime <= 18) {
                        this.wh = isAdmin ? '下午好，管理员，' + name : '下午好，' + name;
                        this.whImage = 'https://gw.alicdn.com/tps/TB1ubtjOFXXXXbzXpXXXXXXXXXX-36-36.jpg';
                    } else {
                        this.wh = isAdmin ? '晚上好，管理员，' + name : '晚上好，' + name;
                        this.whImage = 'https://gw.alicdn.com/tps/TB15FNwOFXXXXbqXXXXXXXXXXXX-36-36.jpg';
                    }
                }
            }
        }
    }
</script>

<style>
    .index-admin{
        width: 100%;
        height: 44px;
        background-color: #fff;
        border-top-color: #e4e4e4;
        border-top-style: solid;
        border-top-width: 1px;
        border-bottom-color: #e4e4e4;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }

    .admin{
        position: relative;
        padding-left: 12.5px;
        padding-right: 12.5px;
        height: 44px;
    }
    .admin-image{
        width: 16.5px;
        height: 16.5px;
        position: absolute;
        top:12.5px;
    }
    .admin-hello{
        font-size: 17px;
        color: #999;
        float: left;
        padding-left: 26px;
        padding-top: 10.5px;
    }
    .admin-edit{
        font-size: 17px;
        color: #38ADFF;
        position: absolute;
        right: 12px;
        top: 10.5px;
    }
</style>
