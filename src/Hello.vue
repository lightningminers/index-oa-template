<template>
  <div class="wrapper">
    <text class="title">Hello icepy</text>
    <text class="subtitle" v-on:click="getClick">{{ link }}</text>
  </div>
</template>
<script>
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var dingtalk = require('./weex-dingtalk.js');

    export default {
        name: 'hello',
        data: function(){
            return {
                link: 'DingTalk'
            }
        },
        mounted: function(){
            console.log('icepy');
        },
        methods: {
            getClick: function(){
                dingtalk.ready(function(error,respon){
                    if (error){
                        modal.toast({
                          message: JSON.stringify(error),
                          duration: 0.3
                        });
                      return;
                    }
                    for (var key in dingtalk.apis){
                        console.log('icepy ---', key);
                        console.log('icepy ---', dingtalk.apis[key]);
                    }
                    var dd = dingtalk.apis;
                    dd.biz.util.openLink({
                        url: 'https://github.com/icepy'
                    })
                    console.log(dingtalk.apis);
                });

            }
        }
    }
</script>
<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
