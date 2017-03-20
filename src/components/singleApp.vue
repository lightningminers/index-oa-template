<template>
    <div class="cell-box" v-on:click="microAppsOpenLink(item,$event)">
        <div class="cell-image-container">
            <img class="cell-image" v-bind:src="item.icon" />
        </div>
        <div class="cell-text">{{ item.name }}</div>
    </div>
</template>

<script>

    import { openLink, parseCorpId } from '../lib/util.js';
    var lock = true;
    export default{
        name: 'singleApp',
        props: ['item'],
        data: function () {
            return {

            };
        },
        mounted: function () {

        },
        methods: {
            microAppsOpenLink: function (item,e) {
                if (lock){
                    lock = false;
                    const appId = item.appId;
                    const url = item.url;
                    const corpId = parseCorpId(location.href, 'corpId');
                    if (appId === 0){
                        // 企业自己的微应用
                        openLink(url, function(){
                            lock = true;
                        });
                    } else {
                        lock = true;
                        // isv
                        window.location.href = 'dingtalk://dingtalkclient/action/switchtab?index=2&name=work&scene=1&corpid='+corpId+'&appid='+ appId
                    }
                }
            }
        }
    }
</script>

<style>
    .cell-image-container{
        width: 50px;
        height: 49px;
        position: relative;
        border-radius: 10px;
        background-color: #f8f8f8;
        overflow: hidden;
        margin: 0 auto;
    }
    .cell-image{
        width: 50px;
        height: 49px;
        border-radius: 10px;
    }
    .cell-text{
        text-align: center;
        color: #323334;
        font-size: 13px;
        margin-top: 12px;
    }
</style>
