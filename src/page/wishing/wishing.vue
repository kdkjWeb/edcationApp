<template>
  <div id="wishing">
    <!-- 头部 -->
    <header>
      LOGO
      <span class="share iconfont icon-icon_share"></span>
    </header>
    
    <!-- 许愿树 -->
    <div class="wishing" ref="wish">
      <div class="music iconfont icon-bofang"></div>
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
    background: url('../../assets/wishing.png');
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
</style>

