<template>
    <div class="index-all-applist" v-if="allapplistMetas.isMicroApps">
        <div class="applist-title">
            <h1 class="applist-text">全部应用</h1>
        </div>
        <grid
            v-bind:meta="allapplistMetas.microApps"
            v-bind:corp-id="corpId"
            v-bind:micro-apps="true">
        </grid>
    </div>
</template>

<script>
    import grid from '../../../components/grid.vue';

    export default{
        name: 'applist',
        props: ['corpId','allapplistMetas'],
        components: {
            grid: grid
        },
        data: function () {
            return {};
        },
        beforeMount: function () {
        },
        mounted: function () {
        }
    }
</script>

<style>
    .index-all-applist{
        margin-top: 16px;
        background-color: #fff;
        border-top-color: #e4e4e4;
        border-top-width: 1px;
        border-top-style: solid;
    }

    .applist-title{
        width: 100%;
        height: 49px;
        position: relative;
    }

    .applist-text{
        color: #999;
        font-size: 17px;
        position: absolute;
        top: 16px;
        left: 12px;
    }
</style>