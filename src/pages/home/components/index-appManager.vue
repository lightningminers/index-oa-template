<template>
    <div class="add-manager">
        <div class="add-manager-container" v-on:click="addManager">
            <img class="add-manager-add-icon" src="https://gw.alicdn.com/tps/TB1O.peOFXXXXbvXpXXXXXXXXXX-42-42.png"/>
            <div v-if="admin" class="add-manager-text">添加/管理</div>
            <div v-else class="add-manager-text">查看更多</div>
            <img class="add-manager-more-icon" src="https://gw.alicdn.com/tps/TB12pIZOpXXXXaxXVXXXXXXXXXX-16-28.jpg"/>
        </div>
    </div>
</template>

<script>
    import { openLink } from '../../../lib/util.js';
    var lock = true;
    export default{
        name: 'appmanager',
        props: ['admin','corpId'],
        data: function () {
            return {

            };
        },
        mounted: function () {

        },
        methods:{
            addManager: function () {
                if (lock){
                    lock = false;
                    const url = 'https://h5.dingtalk.com/appcenter/index.html?showmenu=false&dd_share=false&dd_progress=false&corpId=' + this.corpId;
                    openLink(url,function(){
                        lock = true;
                    });
                }
            }
        }
    }
</script>

<style>
    .add-manager{
        width: 100%;
        height: 44px;
        background-color: #fff;
        border-bottom-color:  rgba(228, 228, 228, 1);
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-top-color: rgba(228, 228, 228, 1);
        border-top-style: solid;
        border-top-width: 1px;
        margin-bottom: 10px
    }
    .add-manager-container{
        position: relative;
        width: 100%;
        height: 44px;
    }

    .add-manager-text{
        color: #323334;
        padding-left: 42px;
        padding-top: 12px;
        font-size: 17px;
    }
    .add-manager-add-icon{
        width: 14px;
        height: 14px;
        position: absolute;
        top:15px;
        left: 12px;
    }
    .add-manager-more-icon{
        width: 14px;
        height: 14px;
        position: absolute;
        top: 15px;
        right: 12px;
    }

</style>
