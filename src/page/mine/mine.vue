<template>
  <div id="mine">
    <div class="header">中奖记录</div>
    <!-- <p class="winning">{{text}}</p> -->
    <div class="winning" v-if="flag">
      <p>恭喜</p>
      <p>{{winning.name}}</p>
      <p>获得<span>{{winning.winer}}</span></p>
    </div>
    <p v-else class="regret">{{text}}</p>
  </div>
</template>
<script>
    export default require('./mineCtr.js');
</script>
<style scoped>
  .header{
    text-align: center;
    font-size: 20px;
    color: red;
    padding-top: 50px;
  }
  .winning{
    padding: 20px;
    text-align: center;
  }
  .winning p{
    padding-top: 20px;
  }
  .winning p:last-child span{
    color: red;
    font-size: 30px;
  }
  .regret{
    text-align: center;
    padding-top: 30px;
  }
</style>

