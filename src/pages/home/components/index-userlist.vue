<template>
    <div class="index-userlist" v-if="userlistMetas.isHomeGroups">
        <div class="index-userlist-item" v-for="(appGroupList, index) in userlistMetas.homeGroups">
            <div class="index-title">
                <div class="index-text">{{ appGroupList.groupName }}</div>
            </div>
            <grid
                v-bind:meta="appGroupList.homeGroupDetail"
                v-bind:home-groups="true"
                v-bind:corp-id="corpId">
            </grid>
            <div class="index-userlist-line" v-if="(index + 1) !== userlistMetas.renderLine"></div>
        </div>
    </div>
</template>

<script>
    import grid from '../../../components/grid.vue';

    export default{
        name: 'userlist',
        components: {
            grid: grid
        },
        props: ['userlistMetas','corpId'],
        data: function () {
            return {
                
            };
        },
        mounted: function () {

        }
    }   
</script>

<style>
    .index-userlist{
        background-color: #fff;
    }
    .index-userlist-item{
        position: relative;
    }
    .index-title{
        position: relative;
        height: 49px;
    }
    .index-text{
        position: absolute;
        font-size: 15px;
        color: #323334;
        left: 12px;
        top: 16.5px;
    }
    .index-userlist-line{
        background-color: rgba(228, 228, 228, 1);
        height: 1px;
        width: calc(100% - 11.5px);
        position: absolute;
        left: 11.5px;
        bottom: 0px;
    }
</style>
