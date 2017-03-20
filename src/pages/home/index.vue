<template>
    <div class="app-container">
        <banner v-bind:banner-metas="meta.bannerMetas" v-bind:corp-id="corpId"></banner>
        <!-- <item v-bind:item-metas="meta.itemMetas" v-bind:corp-id="corpId"></item>
        <admin v-bind:admin="meta.admin" v-bind:user-info="meta.userInfo" v-bind:corp-id="corpId"></admin>
        <userlist v-bind:userlist-metas="meta.userlistMetas" v-bind:corp-id="corpId"></userlist>
        <applist v-bind:allapplist-metas="meta.allapplistMetas" v-bind:corp-id="corpId"></applist>
        <appmanager v-if="openAppManager" v-bind:admin="meta.admin" v-bind:corp-id="corpId"></appmanager> -->
    </div>
</template>

<script>

    import metaData from '../../mock/meta';
    import {
        parseCorpId,
        parseMetaData,
        parseMicroApps
    } from '../../lib/util';

    import {
        getMicroAppsRequest,
        getUserId,
        getUserInfoRequest,
        jsApiOAuthRequest
    } from '../../request';

    import { APIHOST } from '../../lib/env.js';
    import banner from './components/index-banner.vue';
    // import applist from './components/index-applist.vue';
    // import item from './components/index-item.vue';
    // import admin from './components/index-admin.vue';
    // import userlist from './components/index-userlist.vue';
    // import appmanager from './components/index-appManager.vue';
    export default {
        name: 'home',
        components: {
            banner: banner,
            // applist: applist,
            // item: item,
            // admin: admin,
            // userlist: userlist,
            // appmanager: appmanager
        },
        data: function () {
            return {
                openAppManager: false,
                corpId: '',
                userId: '',
                meta: {
                    admin: false,
                    bannerMetas: {
                        homeBannerModels: [],
                        isHomeBannerModels: false
                    },
                    itemMetas: {
                        homeHeaderModel: {},
                        act: '',
                        isAdminOrBoos: false,
                        attendanceUrl: '',
                        myTasksUrl: '',
                        checkinsUrl: '',
                        notReadReportUrl: '',
                        isHomeHeaderModel: false
                    },
                    userlistMetas: {
                        homeGroups: [],
                        renderLine: 0,
                        isHomeGroups: false
                    },
                    allapplistMetas: {
                        microApps: [],
                        isMicroApps: false,
                        corpId: ''
                    },
                    h5Config: {},
                    userInfo: {
                        name: ''
                    }
                }
            }
        },
        mounted:  function(){
            const self = this;
            console.log('icepy',weex.config);
            const originalUrl = weex.config.bundleUrl || weex.config.originalUrl;
            console.log('icepy',originalUrl);
            this.corpId = parseCorpId(originalUrl, 'corpId');
            //监听userId的变化，如果有变化，立即获取用户信息
            this.$watch('userId',function(){
                this.getUserInfo();
            });
            metaData.microApps.length = 0;
            // js-api 权限校验
            jsApiOAuthRequest().then(function(response){
                self.getMicroApps();
                const meta = parseMetaData(metaData);
                self.meta = meta;
                self.openAppManager = true;
                // 走免登的流程
                self.getUserId();
            }).catch(function(error){
                alert('js api OAuth request bad：' + JSON.stringify(error));
            });
        },
        beforeDestroy: function () {

        },
        destroyed: function () {

        },
        methods: {
            getUserId: function(){
                // 获取userid
                const self = this;
                getUserId().then(function(response){
                    self.userId = response.userid;
                }).catch(function(error){
                    alert('获取userid error ：' + JSON.stringify(error));
                });
            },
            getUserInfo: function(){
                // 根据userId获取用户详细信息
                const self = this;
                getUserInfoRequest(this.userId).then(function(response){
                    self.meta.userInfo = response;
                }).catch(function(error){
                    alert('获取用户信息 error：' + JSON.stringify(error));
                });
            },
            getMicroApps: function(){
                // 获取Apps数据
                const self = this;
                getMicroAppsRequest().then(function(response){
                    const data = response.data;
                    if(data.errcode === 0 ){
                        self.meta.allapplistMetas = parseMicroApps(data.microAppList);
                    }
                }).catch(function(error){
                    //alert('获取microApps error：' + JSON.stringify(error));
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .app-container{
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
    }
</style>
