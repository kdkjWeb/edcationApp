<template>
  <div id="wishing">
    <!-- 头部 -->
    <header>
      <img src="../../assets/logo.png" alt="">
      <span class="share iconfont icon-icon_share" @click="share"></span>
    </header>

    <!-- 许愿树 -->
    <div class="wishing" ref="wish">
      <div class="music iconfont" :class="[flag?'icon-zanting1':'icon-bofang']" @click="ControlMusic"></div>
      <span class="leaf" v-for="(item,index) in arrWishing" :key="index" @click="seeWish(item)"></span>
    </div>

    <!-- 许愿人及许愿内容 -->
    <div class="wishing_info">
        <p class="wishing_info_text">许愿人</p>
        <input class="wishing_info_input" type="text" v-model="wishing.wishingTxt">
        <p class="wishing_info_text">愿里心语</p>
        <!-- <input class="wishing_info_input" type="text"> -->
        <textarea class="wishing_info_textarea" name="" v-model="wishing.wishingCon"></textarea>
    </div>
    <!-- 操作按钮 -->
    <div class="btn">
        <div @click="send">
          <span class="iconfont icon-fasong"></span>发送</div>
        <div @click="next">下一棵树</div>
    </div>
    <!-- 音乐连接 -->
    <audio :src="audio" class="audio"/>

    <!-- 遮罩层 -->
    <div class="layOut" :style="{height: ClientHeight}" v-show="isShow">
        <!-- 查看每个愿望的内容 -->
        <div class="wishing_con">
          <div class="wishing_text">{{userWishing.text}}</div>
          <p class="wishing_name">--<span>{{userWishing.name}}</span></p>
        </div>
        <!-- 关闭按钮 -->
        <span class="wishing_close iconfont icon-2guanbi" @click="wishingClose"></span>
    </div>
  </div>
</template>
<script>
    export default require('./wishingCtr.js');
</script>
<style scoped>

  header {
      position: relative;
      width:100%;
      height:60px;
      background-color: #323232;
      color:white;
      display: flex;
      align-items:flex-end;
      box-sizing: border-box;
      padding-left:20px;
      padding-bottom:10px;
      font-weight: bold;
      font-size: 26px;
  }
  header img {
    height:30px;
  }
  .share{
    position: absolute;
    right: 15px;
    top: 20px;
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 20px;
    color: #000;
  }
  #wishing{
    background: #e9e9e9;
    position: relative;
  }
  .wishing{
    width: 100%;
    padding-bottom: 144%;
    height: 0;
    background-image: url('../../assets/wishing.png');
    background-size: contain;
  }
  .wishing_info{
    width: 90%;
    margin: 0 auto;
  }
  .wishing_info_text{
    color: #010101;
    font-size: 14px;
    padding: 10px 0;
  }
  .wishing_info_input{
    width: 100%;
    height: 30px;
    border-radius: 20px;
    border: none;
    outline: none;
    padding-left: 8px;
  }
  .wishing_info_textarea{
    width: calc(100% - 8px);
    height: 80px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding-left: 8px;
    padding-right: 8px;
  }
  .btn{
    width: 90%;
    height: 35px;
    line-height: 35px;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    margin-top: 15px;
    padding-bottom: 15px;
  }
  .btn div{
    width: 47%;
    height: 100%;
    background: #ffb93e;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    font-size: 14px;
  }
  .btn div span.icon-fasong{
    position: relative;
    top: -2px;
    font-size: 22px;
    vertical-align: middle;
    padding-right: 5px;
  }


  .leaf{
    position: absolute;
    width: 30px;
    height: 50px;
    display: inline-block;
    background-image: url('../../assets/wishPkg.png');
    background-size: cover;
  }

  .music{
    position: absolute;
    right: 20px;
    top: 70px;
    width: 20px;
    height: 20px;
    font-size: 20px;
  }
  .rotate{
    -webkit-animation:rotateMus 5s linear infinite;
    animation:rotateMus 5s linear infinite;
  }
  /* 音乐播放旋转动画 */
   @keyframes rotateMus {
     from{-webkit-transform:rotate(0deg);transform:rotate(0deg);}
     to{-webkit-transform:rotate(360deg);transform:rotate(360deg);}
   }

  /* 遮罩层 */
  .layOut{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: rgba(0,0,0,.5);
    z-index: 999;
  }
  .wishing_con{
    position: relative;
    width: 90%;
    height: 260px;
    margin: 120px auto 0;
    background-image: url('../../assets/bg.png');
    background-repeat: no-repeat;
    background-size: 90% 90%;
    background-position: center;
    background-color: #fff;
    border-radius: 20px;
    padding: 60px 31px 0;
    box-sizing: border-box;
  }
  .wishing_text{
   height: 110px;
   text-indent: 2em;
   overflow-y: auto;
  }
  .wishing_name{
    position: absolute;
    right: 60px;
    bottom: 60px;
  }
  .wishing_close{
    width: 30px;
    height: 30px;
    display: block;
    margin: 20px auto;
    text-align: center;
    font-size: 30px;
    color: #fff;
  }
</style>

