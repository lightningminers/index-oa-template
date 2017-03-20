<template>
    <div class="index-item" v-if="itemMetas.isHomeHeaderModel">
        <div class="index-item-center">
            <div class="index-item-con" v-if="itemMetas.isAdminOrBoos">
                <div class="item" v-on:click="appLink(itemMetas.myTasksUrl,$event)">
                    <div class="item-right-line">
                        <div class="item-number">{{ itemMetas.homeHeaderModel.myTasks }}</div>
                        <div class="item-text">待我审批</div>
                    </div>
                </div>
                <div class="item" v-on:click="appLink(itemMetas.myTasksUrl,$event)">
                    <div class="item-right-line">
                        <div class="item-number">{{ itemMetas.homeHeaderModel.attendance }}</div>
                        <div class="item-text">{{ itemMetas.act }}</div>
                    </div>
                </div>
                <div class="item" v-on:click="appLink(itemMetas.myTasksUrl,$event)">
                    <div class="item-right-line">
                        <div class="item-number">{{ itemMetas.homeHeaderModel.checkins }}</div>
                        <div class="item-text">签到人数</div>
                    </div>
                </div>
                <div class="item" v-on:click="appLink(itemMetas.myTasksUrl,$event)">
                    <div class="item-right-line">
                        <div class="item-number">{{ itemMetas.homeHeaderModel.notReadReport }}</div>
                        <div class="item-text">未读日志</div>
                    </div>
                </div>
            </div>
            <div v-else class="index-item-con">
                <div class="item" v-on:click="appLink(itemMetas.myTasksUrl,$event)">
                    <div class="item-right-line">
                        <text class="item-number">{{ itemMetas.homeHeaderModel.myTasks }}</text>
                        <text class="item-text">待我审批</text>
                    </div>
                </div>
                <div class="item" v-on:click="appLink(itemMetas.attendanceUrl,$event)">
                    <div class="item-right-line">
                        <text class="item-number">{{ itemMetas.homeHeaderModel.attendance }}</text>
                        <text class="item-text">{{ itemMetas.act }}</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { openLink } from '../../../lib/util.js';
    var lock = true;
    export default{
        name: 'item',
        props: ['corpId','itemMetas'],
        data: function () {
            return {

            };
        },
        methods: {
            appLink: function (url) {
                // alert(url);
                if (lock){
                    lock = false;
                    openLink(url, function(){
                        lock = true;
                    });
                }
            }
        }
    }
</script>

<style>
    .index-item{
        position: relative;
        width: 100%;
        height: 80px;
        margin-bottom: 17px;
    }
    .index-item-center{
        position: relative;
        height: 80px;
        background-color: #fff;
        overflow: hidden;
    }

    .index-item-con{
        width: 100%;
        height: 80px;
        display: flex;
        padding-top: 11px;
        padding-bottom: 18px;
        flex-direction: row;
        justify-content: space-between;
        border-bottom-color: #eee;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }

    .item{
        flex: 1;
        margin-right: 1px;
    }

    .item-right-line{
        border-right-color: #eee;
        border-right-style: solid;
        border-right-width: 1px;
    }

    .item-number{
        font-size:24px;
        font-weight: 500;
        text-align: center;
    }
    .item-text{
        font-size: 13px;
        color: #999;
        margin-top: 4px;
        padding-bottom: 4px;
        text-align: center;
    }
</style>
