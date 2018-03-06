<template>
  <div class="Box">
    <header><img src="../../assets/logo.png" alt=""></header>
    <img @click="toWait()" class="preImg" src="../../assets/preImg.png" alt="">
    <div class="reward">
      <img src="../../assets/rewardBg.png" alt="">
      <div class="rewardCon">
        <img class="rewTitle" src="../../assets/rewardTitle.png" alt="">
        <div class="rewInt">
          <div class="rewIntW">
            <p>抽奖说明</p>
            <p>活动时间：2018年3月7日上午9点—下午5点。</p>
            <p>活动说明：注册登录网站即可获得抽取幸运奖资格，
              每个会员只可抽奖1次。</p>
            <p>兑奖时间：7日下午2点在“女生节”活动现场开始兑奖。</p>
            <p>注：本次活动最终解释权归唐山鸿弘人力资源有限公
              司所有。</p>
          </div>
        </div>
        <div class="rewBox">
          <div class="rewList" v-for="(item,index) in rewardList" :key="index">
            <div class="pru" :class="[index==4?'org':'',index==circleId?'yes':'']" @click="rewardBtn(index)">
              <img :src="`static/reward${index}.png`" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="rewName">
        <img src="../../assets/rewardList.png" alt="">
        <div class="rewNames">
          <div class="rewNamesSc">
            <div class="rewNameB" ref="rewNameB">
              <p v-for="(item,index) in rewardName" :key="index">
                <span>{{item.phone}}</span>
                <span>抽中</span>
                <span>{{item.name}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wish">
      <p class="litTit litC">许愿</p>
      <div class="wishBox">
        <div class="wishing" @click="toRouter()">
          <div class="wishingB">
            <img src="../../assets/wish1.png" alt="">
            <div class="wishName">
              <p>许愿树</p>
              <p>点击进入</p>
            </div>
          </div>
        </div>
        <div class="wishOth">
          <div class="wishOther" @click="toWait()">
            <div class="wishOtherB">
              <img src="../../assets/wish2.png" alt="">
              <div class="wishName">
                <p>神秘树洞</p>
                <p>点击进入</p>
              </div>
            </div>

          </div>
          <div class="wishOther"  @click="toWait()">
            <div class="wishOtherB2">
              <img src="../../assets/wish3.png" alt="">
              <div class="wishName">
                <p>解忧杂货铺</p>
                <p>点击进入</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <img @click="toWait()" class="preImg" src="../../assets/preImg2.png" alt="">
  </div>
</template>
<script>
  export default require('./homeCtr.js');
</script>
<style scoped>
  .Box {
    width: 100%;
  }

  header {
    width: 100%;
    height: 60px;
    background-color: #323232;
    color: white;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding-left: 20px;
    padding-bottom: 10px;
    font-weight: bold;
    font-size: 26px;
  }
  header img {
    height:30px;
  }
  .preImg {
    width: 100%;
  }

  .reward {
    width: 100%;
    margin-bottom:20px;
    position: relative;
  }

  .reward img {
    width: 100%;
  }

  .rewardCon {
    padding:0 6px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
  }

  .rewardCon .rewTitle {
    margin: 10px auto;
    width: 75%;
  }
  .rewardCon .rewInt {
    margin:0 auto;
    margin-top:-30px;
    padding:5px;
    border-radius: 20px;
    box-shadow: 0 0 20px 0 #d19b24;
    background-color: #ffd24a;
    box-sizing: border-box;
  }
  .rewIntW {
    width:100%;
    box-sizing: border-box;
    padding:10px;
    border:2px solid white;
    border-radius: 20px;
    color:white;
    text-align: left;
    font-size: 12px;
    letter-spacing: 1px;
  }
  .rewBox {
    width:75%;
    margin:5% auto;
    display: flex;
    flex-wrap:wrap;
  }
  .rewList {
    flex: 1;
    margin-left:5px;
    margin-bottom:5px;
    min-width: 30%;
  }
  .pru {
    width:100%;
    padding-bottom:100%;
    background-color:#782f88;
    border-radius: 20px;
    box-shadow: 0 4px 5px 0 #5b341b inset;
    position:relative;
  }
  .yes:after {
    content: "";
    display: block;
    width:100%;
    height:100%;
    border-radius: 20px;
    position:absolute;
    top:0;
    left:0;
    z-index:10;
    background-color: rgba(0,0,0,.5);
  }
  .pru img{
    position:absolute;
    width:70%;
    transform: translate(-50%,-50%);
    top:50%;
    left:50%;
  }
  .org {
    background-color: #ff7101;
    box-shadow: 0 4px 5px 0 #ba5613 inset;
  }
  .rewName {
    width:100%;
    text-align: center;
    position:absolute;
    bottom:15px;
  }
  .rewName img {
    width:30%;
  }
  .rewNames {
    width:80%;
    margin:5px auto 0;
    height:40px;
    padding:15px;
    border-radius: 20px;
    background-color: #611b70;
  }
  .rewNames .rewNamesSc {
    width:100%;
    height:40px;
    overflow: hidden;
  }

  .rewNames p {
    display: flex;
    color:#ffd24a;
    font-size:15px;
  }
  .rewNames p span:nth-of-type(1) {
    flex: 3;
    text-align: left;
  }
  .rewNames p span:nth-of-type(2) {
    flex: 1;
  }
  .rewNames p span:nth-of-type(3) {
    flex: 3;
    text-align: right;
  }
  .rewNameB {
    margin-top:0;
    transition: all 2s linear;
  }
  .wish {
    width:100%;
    margin-bottom:20px;
  }
  .litTit {
    color:black;
    font-size:17px;
    font-weight: bolder;
    position:relative;
    text-indent: 16px;
    margin-bottom:20px;
  }
  .litC:after {
    position:absolute;
    content: "";
    display: block;
    width:6px;
    height:17px;
    background-color: #fc6473;
    top:3px;
  }
  .wishBox {
    padding:0 6px;
    display: flex;
  }
  .wishing {
    flex: 9;
    margin-right:5px;
  }
  .wishingB {
    width:100%;
    padding-bottom:165%;
    border-radius: 20px;
    position:relative;
    box-shadow: 0 0 30px 0 #dad8d8;
  }
  .wishingB img {
    width:80%;
    margin-left:10%;
    position:absolute;
    top:10%;
  }
  .wishName {
    width: 100%;
    position:absolute;
    top:75%;
    text-align: center;
  }
  .wishName p:nth-of-type(1) {
    font-size: 18px;
    color:black;
  }
  .wishName p:nth-of-type(2) {
    font-size: 12px;
    color:#b4b4b4;
  }
  .wishOth {
    flex: 11;
    align-items:stretch;
    display: flex;
    flex-direction: column;
  }
  .wishOther {
    width:100%;
    flex: 1;
    border-radius: 20px;
    box-shadow: 0 0 30px 0 #dad8d8;
    overflow: hidden;
  }
  .wishOtherB,.wishOtherB2{
    width:100%;
    padding-bottom:65%;
    position:relative;
  }
  .wishOtherB img{
    position:absolute;
    right: 0;
    height:100%;
  }
  .wishOtherB .wishName {
    position:absolute;
    top:50%;
    left:-20%;
  }
  .wishOtherB2 img{
    position:absolute;
    left:0;
    border-radius: 20px;
    height:80%;
    top:10%;
  }
  .wishOtherB2 .wishName {
    position:absolute;
    top:40%;
    right:-20%;
  }
  .wishOther:nth-of-type(1) {
    margin-bottom:5px;
  }
</style>
