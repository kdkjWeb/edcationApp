/**
 * Created by kdkjPC on 2018/1/23.
 */
export default {
  data(){
    return {
      logReg:false,
      validateLabel:"获取验证码",
      disabled:false,
      lgPhone:"",
      lgPwd:"",
      regPwd:'',
      regCode:''
    }
  },
  methods:{
    change(){
      this.logReg = !this.logReg;
    },
    /**
     * 获取验证码
     */
    validateCode() {
      let time = 59;
      let that = this;
      this.validateLabel = "再次获取("+time+")";
      this.disabled = true;
      let setInt = setInterval(function(){
        if(time == 0) {
          that.disabled = false;
          that.validateLabel = "获取验证码";
          clearInterval(setInt);
          return false;
        }
        time--;
        that.validateLabel = "再次获取("+time+")";
        that.disabled = true;
      },1000)
    },
    /**
     * 登录
     * @returns {boolean}
     */
    login(){
      var phone = this.lgPhone;
      var pwd = this.lgPwd;
      // var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      // var reg = /^\w{6,12}$/;
      var regPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/
      if(phone=="") {
        this.$mint.Toast({
          message: '请输入名称',
          position: 'bottom',
          duration: 1500
        });
        return false;
      }
      if(!regPwd.test(pwd)) {
        this.$mint.Toast({
          message: '请输入6-12位数字和字母组成的密码',
          position: 'bottom',
          duration: 1500
        });
        return false;
      }
      this.$p({
        url:"login",
        params:{
          username:phone,
          password:pwd
        },
        callback:(res)=>{
          this.$common.setStorage("token",res.data);
          this.$mint.Toast({
            message: '登录成功',
            position: 'bottom',
            duration: 500
          });
          setTimeout(()=>{
            this.$router.push({
              path: '/home',
            });
          },500);
        }
      });


    },
    /**
     * 注册
     * @returns {boolean}
     */
    register(){
      var phone = this.lgPhone;
      // var code = this.regCode;
      var pwd = this.regPwd;
      // var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      // var reg = /^\w{6,12}$/;
      var regPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/
      if(phone=="") {
        this.$mint.Toast({
          message: '请输入名称',
          position: 'bottom',
          duration: 1500
        });
        return false;
      }
      // if(code == "") {
      //   this.$mint.Toast({
      //     message: '请输入验证码',
      //     position: 'bottom',
      //     duration: 1500
      //   });
      //   return false;
      // }
      if(!regPwd.test(pwd)) {
        this.$mint.Toast({
          message: '请输入6-12位数字和字母组成的密码',
          position: 'bottom',
          duration: 1500
        });
        return false;
      }
      this.$p({
        url:"User/addUser",
        params:{
          username:phone,
          password:pwd
        },
        callback:(res)=>{
            this.$mint.Toast({
              message: '注册成功',
              position: 'bottom',
              duration: 1500
            });
            setTimeout(()=>{
              this.logReg = !this.logReg;
            },1500);
        }
      });

    }
  },
  created(){

  }
}
