<template>
    <div class="banner-slider">
        <div class="banner" v-if="bannerMetas.isHomeBannerModels" v-for="item in bannerMetas.homeBannerModels">
            <img v-on:click="bannerLink(item,$event)" class="banner-image" v-bind:src="item.imgUrl" />
        </div>
    </div>
</template>

<script>

    export default {
        name: 'banner',
        props: ['corpId','bannerMetas'],
        data: function () {
            return {

            }
        },
        mounted: function () {

        },
        beforeDestroy: function () {

        },
        destroyed: function () {

        },
        methods: {
            bannerLink: function (item) {
                const url = item.linkUrl;
            }
        }
    }
</script>

<style>
    .banner-slider{
        width: 100%;
        height: 150px;
        flex-direction: row;
        background-color: white;
        border-width: 1px;
        border-color: #dadada;
    }
    .banner{
        width: 100%;
        height: 150px;
    }
    .indicator {
        width: 748px;
        height:280px;
        position:absolute;
        top:120px;
        item-color: gray;
        item-selectedColor: black;
        item-size: 10px;
    }
    .banner-image {
        width: 100%;
        height: 150px;
    }
</style>
