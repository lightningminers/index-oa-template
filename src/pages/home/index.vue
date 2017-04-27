<template>
  <div class="wrapper">
    <div class="banner">
      <image class="banner-image" v-bind:src="imgUrl" v-on:click="onLinkImageUrl"></image>
    </div>
    <div class="apps">
      <div class="apps-title-container">
        <text class="apps-title">Paytm Apps</text>
      </div>
      <div class="apps-container">
        <div class="app-item">
          <div class="item-image-container">
            <div class="item-image-radius">
              <image class="item-image" src="https://gw.alicdn.com/tps/TB1q5U5OXXXXXXPXVXXXXXXXXXX-102-102.png"></image>
            </div>
          </div>
          <text class="item-text">Leave</text>
        </div>
        <div class="app-item">
          <div class="item-image-container">
            <div class="item-image-radius">
              <image class="item-image" src="https://gw.alicdn.com/tps/TB1q5U5OXXXXXXPXVXXXXXXXXXX-102-102.png"></image>
            </div>
          </div>
          <text class="item-text">Reimbursement</text>
        </div>
        <div class="app-item">
          <div class="item-image-container">
            <div class="item-image-radius">
              <image class="item-image" src="https://gw.alicdn.com/tps/TB1q5U5OXXXXXXPXVXXXXXXXXXX-102-102.png"></image>
            </div>
          </div>
          <text class="item-text">Daily Report</text>
        </div>
        <div class="app-item">
          <div class="item-image-container">
            <div class="item-image-radius">
              <image class="item-image" src="https://gw.alicdn.com/tps/TB1q5U5OXXXXXXPXVXXXXXXXXXX-102-102.png"></image>
            </div>
          </div>
          <text class="item-text">Weekly Report</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

    import dingtalk from 'weex-dingtalk';
    const modal = weex.requireModule('modal');
    export default {
        name: 'home',
        data: function(){
            return {
              "linkUrl": "https://alimarket.m.taobao.com/markets/dingtalk/cydd?lwfrom=20161118115327653",
              "imgUrl": "https://gw.alicdn.com/tps/TB1o8BqOpXXXXanXVXXXXXXXXXX-750-300.png"
            }
        },
        mounted: function(){
            dingtalk.ready(function(){
                const dd = dingtalk.apis;
                // 设置导航
                dd.biz.navigation.setTitle({
                    title: 'Paytm'
                });
            });
        },
        methods: {
            onLinkImageUrl: function(){
              const linkUrl = this.linkUrl;
              dingtalk.ready(function(){
                const dd = dingtalk.apis;
                dd.biz.util.openLink({
                  url: linkUrl
                });
              });
            }
        }
    }
</script>
<style>
  .wrapper {
    background-color: #eee;
    width: 750px;
  }
  .banner{
    width: 750px;
    margin-bottom: 17px;
  }
  .banner-image{
    width: 750px;
    height: 220px;
  }
  .apps-title-container{
    width: 750px;
    height: 45px;
    background-color: #fff;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: #eee;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #eee;
  }
  .apps-title{
    font-size: 18px;
    padding-left: 10px;
    line-height: 45px;
  }
  .apps-container{
    width:750px;
    background-color: #fff;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .app-item{
    width: 187.5px;
    border-right-style: solid;
    border-right-color: #eee;
    border-right-width: 1px;
    position: relative;
    border-bottom-color: #eee;
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }
  .item-image-container{
    position: relative;
    margin-left: 56.25px;
    margin-right: 56.25px;
    margin-bottom: 10px;
    margin-top: 30px;
    width: 75px;
    height: 75px;
    overflow: hidden;
    background-color: #f8f8f8;
  }
  .item-image-radius{
    width: 75px;
    height: 75px;
    border-radius: 15px;
  }
  .item-image{
    width: 75px;
    height: 75px;
    border-radius: 15px;
  }
  .item-text{
    text-align: center;
    color: #323334;
    font-size: 26px;
    margin-bottom: 32px;
  }
</style>
