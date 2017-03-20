<template>
  <div class="wrapper">
    <text class="title">Hello icepy</text>
    <text class="subtitle">{{ link }}</text>
  </div>
</template>
<script>
    var stream = weex.requireModule('stream');
    export default {
        name: 'hello',
        data: function(){
            return {
                link: 'DingTalk'
            }
        },
        mounted: function(){
            console.log('icepy');
        }
    }
</script>
<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 750px;
    height: 1000px;
    background-color: #333377;
  }
  .title {
    font-size: 60px;
    color: #505050;
    text-align: center;
  }
  .subtitle {
    display: block;
    font-size: 30px;
    color: #AAAAAA;
    xxxx: static;
    text-align: center;
    margin-top: 20px;
  }
</style>
