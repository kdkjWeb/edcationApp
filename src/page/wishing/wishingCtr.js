/**
 * Created by kdkjPC on 2018/1/23.
 */
export default {
  data(){
    return {
      flag: true, //判断音乐是否播放
      wishing:{
        wishingTxt: '',
        wishingCon: ''
      },
     arrWishing: [], 
     arrPositon: [],
     ret: [],
     audio: 'static/a.mp3',
     current: 1,
     ClientHeight: 0,
     isShow: false,
     userWishing: {
       name: '',
       text: ''
     }
    }
  },
  methods:{
      //点击发送按钮
      send(){
        
        if(!this.wishing.wishingTxt||!this.wishing.wishingCon){
            this.$mint.Toast({
              message: '还没有填入愿望哦！',
              position: 'center',
              duration: 1000
          });
            return;
        }

        //判断用户是否已经登录
        if(!this.$common.getStorage('token')){
          this.$mint.Toast({
            message: '您还没有登录，请登录！',
            position: 'center',
            duration: 1500
          });
          setTimeout(()=>{
            this.$router.push({
              path:'/index',
            })
          },2000)
          return;
        }

        this.current = 1;
        this.$p({
          url:'/wishingTree/addWishes',
          params:{
            type: 1,
            userid: this.$common.getStorage('token'),
            content: this.wishing.wishingCon,
            realname: this.wishing.wishingTxt
          },
          callback: (res)=>{
            if(res.code == 0){
              this.$mint.Toast({
                message: '许愿成功',
                position: 'center',
                duration: 500
            });
            this.getArrWishing(this.current)
            this.wishing.wishingCon = '';
            this.wishing.wishingTxt = '';
           }else{
            this.$mint.Toast({
                message: '网络异常，请稍后再试！',
                position: 'center',
                duration: 500
            });
           }
          }
      })
      },
      //点击下一棵按钮
      next(){
        this.wishing.wishingCon = '';
        this.wishing.wishingTxt = '';
        this.current++;
        this.getArrWishing(this.current)
        /*if(this.arrWishing.length>=30){
          this.current++;
          console.log(this.current)
          this.getArrWishing(this.current)
        }else{
          this.$mint.Toast({
            message: '这颗许愿树还可以许愿哦！',
            position: 'center',
            duration: 500
        });
        }*/
      },
      //点击每一个愿望查看
      seeWish(item){
          console.log(item)
          Object.assign(this.userWishing,{
            name: item.realname,
            text: item.content
          })
          this.isShow = true;
          // this.stop()
      },
      //关闭查看愿望页面
      wishingClose(){
        console.log(1)
          this.isShow = false;
          //this.move();
      },
      //自动播放音乐
      autoPlay(){
          let audio = document.getElementsByClassName('audio')[0];
          audio.play();
      },
      //控制音乐播放
      ControlMusic(){
       if(this.flag){
          let audio = document.getElementsByClassName('audio')[0];
          audio.pause();
          this.flag = !this.flag
        }else{
          this.autoPlay();
          this.flag = !this.flag
        }
      },
      //随机生成位置
      random(){
        //let leaf = document.getElementsByClassName('leaf');
        let leaf = this.$refs.wish.getElementsByClassName('leaf');
        // console.log(leaf.length)
        let Width = document.body.clientWidth-30;
        let Height = Width*1.2;
        for(let i=0; i<leaf.length; i++){
             let left = Math.random()*Width;
             let top = this.getRandom(55,Height) + 60;
             leaf[i].style.top = top + 'px'
             leaf[i].style.left = left + 'px'
        }
      },
      //生成指定范围内的不重复随机数
      
      //生成指定范围内的不重复随机数
      getRandom(start, end) {
          let length = end - start;
          let num = Math.random() * (length) + start;
          return num;
        },
        //请求后台返回的数据
      getArrWishing(current){
          this.$p({
            url:'/wishingTree/getLeaves',
            params:{
              pageSize: 80,
              current: current,
              orderBy: 'createtime',
            },
            callback:(res)=>{
              console.log(res.data.list)
              if(res.msg == 502){
                this.$mint.Toast({
                    message: '没有下一棵树了！',
                    position: 'center',
                    duration: 500
                });
                return;
               }
               if(res.code == 0){
                  this.arrWishing = res.data.list;
                  this.$nextTick(()=>{
                    this.random()
                  })              
               }
               
               else{
                this.$mint.Toast({
                  message: '网络异常，请稍后再试！',
                  position: 'center',
                  duration: 500
              });
               }
            }
          })
        },
        //禁止滑动
      stop(){
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",function(e){e.preventDefault()},false);//禁止页面滑动
      },

      //取消滑动限制
      move(){
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",function(e){e.preventDefault()},false);
      },
      //分享
      share(){
        this.$mint.Toast({
          message: '功能正在开发，敬请期待！',
          position: 'center',
          duration: 1000
      });
      }

    },
    created(){
        this.ClientHeight = window.innerHeight + 'px'
        console.log(this.ClientHeight)
    },
    mounted(){
      this.getArrWishing(this.current)
      this.autoPlay()

      //当屏幕改变时的高度
      //屏幕发生改变时 
		window.addEventListener('resize',()=>{
      this.ClientHeight = window.innerHeight + 'px'
      console.log(this.ClientHeight)
		})
    }
}
