<template>
    <div class="cell-box" v-on:click="homeGroupsOpenLink(item, $event)">
        <div v-if="item.appType === 3">
            <div class="cell-image-container">
                <div class="cell-mount">{{ item.formatNumber.val }}</div>
                <div class="cell-unit">{{ item.formatNumber.unit }}</div>
                <div class="cell-app-type-container">
                    <div class="cell-app-type">智能报表</div>
                </div>
            </div>
            <div class="cell-text">{{ item.title }}</div>
            <div class="cell-tag">{{ item.tableName }}</div>
        </div>
        <div v-else>
            <div class="cell-image-container">
                <img class="cell-image" v-bind:src="item.imgPath"/>
                <div class="cell-app-type-container" v-if="item.appType === 1">
                    <div class="cell-app-type">日志</div>
                </div>
                <div class="cell-app-type-container" v-if="item.appType === 2">
                    <div class="cell-app-type">审批</div>
                </div>
            </div>
            <div class="cell-text">{{ item.title }}</div>
        </div>
    </div>
</template>

<script>

    import { openLink } from '../lib/util.js';
    var lock = true;

    export default{
        name: 'complexApp',
        props: ['item'],
        data: function () {
            return {

            };
        },
        methods: {
            homeGroupsOpenLink: function (item) {
                if (lock){
                    lock = false;
                    var url = item.url;
                    const redirect = item.redirect;
                    const tableName = item.tableName;
                    const title = item.title;
                    if(redirect){
                        url = 'https://h5.dingtalk.com//industry_versatility/notData.html?u=' + encodeURIComponent(url) + '&tablename=' + encodeURIComponent(tableName) + '&title=' + encodeURIComponent(title);
                    }
                    openLink(url, function(){
                        lock = true;
                    });
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
    .cell-text{
        text-align: center;
        color: #323334;
        font-size: 13px;
        margin-top: 12px;
    }
    .cell-mount{
        color: #323334;
        font-size: 20px;
        text-align: center;
    }
    .cell-unit{
        color: #999;
        font-size: 10px;
    }
    .cell-tag{
        text-align: center;
        color: #999;
        font-size: 10px;
        margin-top: 4.5px;
    }
    .cell-app-type-container{
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, .2);
        margin: 0;
        padding: 0;
        height: 13px;
    }
    .cell-app-type{
        font-size:8px;
        color: #fff;
        text-align: center;
        line-height: 13px;
    }
    .cell-image{
        width: 50px;
        height: 49px;
        border-radius: 10px;
    }
</style>
