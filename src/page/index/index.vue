<template>
  <div class="lR">
    <div class="register" v-if="logReg">
      <div class="row">
        <i class="iconfont icon-shouji"></i>
        <div class="input">
          <input type="text" maxlength="11" placeholder="请输入用户名" v-model="lgPhone">
        </div>
      </div>
      <!--<div class="row">-->
        <!--<i class="iconfont icon-yanzhengma"></i>-->
        <!--<div class="input">-->
          <!--<input class="code" type="text" maxlength="6" placeholder="验证码" v-model="regCode">-->
          <!--<button class="codeBtn"-->
                  <!--:disabled="disabled" @click="validateCode">{{validateLabel}}</button>-->
        <!--</div>-->
      <!--</div>-->
      <div class="row">
        <i class="iconfont icon-mima"></i>
        <div class="input">
          <input type="password" placeholder="请输入密码" v-model="regPwd">
        </div>
      </div>
      <div class="regBtn" @click="register()">立即注册</div>
      <div class="toLR">已有账号？<span @click="change()">立即登录</span></div>
    </div>
    <div class="login" v-if="!logReg">
      <div class="row">
        <i class="iconfont icon-shouji"></i>
        <div class="input">
          <input type="text" maxlength="11" placeholder="请输入用户名" v-model="lgPhone">
        </div>
      </div>
      <div class="row">
        <i class="iconfont icon-mima"></i>
        <div class="input">
          <input type="password" placeholder="请输入密码" v-model="lgPwd">
        </div>
      </div>
      <div class="regBtn" @click="login()">登录</div>
      <div class="toLR">暂无账号？<span @click="change()">立即注册</span></div>
    </div>
  </div>
</template>
<script>
    export default require('./indexCtr.js');
</script>
<style>
  .lR{
    width:100%;
    height:100%;
    background: url('../../assets/loginBg.png');
    background-size: 100% 100%;
    position:relative;
  }
  .register,.login {
    width:80%;
    padding-top:20px;
    margin-left:-40%;
    position:absolute;
    transform: translateY(-50%);
    top:50%;
    left:50%;
    border-radius: 30px;
    box-shadow: 0 0 20px 0 #c7c7c7;
    background-color: white;
  }
  .row {
    width:100%;
    box-sizing: border-box;
    padding:10px 20px;
    display: flex;
    flex-direction: row;
  }
  .row i {
    margin-right:10px;
    font-size:26px;
    color:#e6e6e6;
  }
  .input {
    flex: 1;
    position:relative;
  }
  .input input {
    width:100%;
    height:30px;
    padding-bottom:10px;
    border:none;
    border-bottom:1px solid #ffe38f;
    outline: none;
    color:#666;
  }
  .input .codeBtn {
    width:100px;
    height:30px;
    border-radius: 30px;
    background-color: #ffd24a;
    position:absolute;
    top:0;
    right:0;
    text-align: center;
    color: white;
    line-height: 30px;
    font-size:14px;
    border:none;
    outline: none;
  }
  .regBtn {
    width:100%;
    height:50px;
    margin-top:20px;
    background-color: #ffd24a;
    color:white;
    text-align: center;
    font-size:18px;
    letter-spacing: 2px;
    line-height:50px;
    border-radius: 0 0 30px 30px;
  }
  .toLR {
    width: 100%;
    text-align: center;
    position:absolute;
    bottom:-30px;
    color:#dcdcdc;
    font-size:16px;
    z-index:1;
  }
  .toLR span {
    color:#ffd24a;
  }
</style>

