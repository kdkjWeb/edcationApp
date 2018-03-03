/**
 * Created by kdkjPC on 2018/1/23.
 */
export default {
  data(){
    return {
      wishing:{
        wishingTxt: '',
        wishingCon: ''
      },
     arrWishing: [], 
     arrPositon: [],
     ret: [],
     audio: '../../../static/a.mp3',
     current: 1
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
        if(this.arrWishing.length>=30){
            this.$mint.Toast({
              message: '此树许愿已满，请点击下一棵！',
              position: 'center',
              duration: 500
          });
          return;
        }
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
        if(this.arrWishing.length>=30){
          this.current++;
          console.log(this.current)
          this.getArrWishing(this.current)
        }else{
          this.$mint.Toast({
            message: '这颗许愿树还可以许愿哦！',
            position: 'center',
            duration: 500
        });
        }
      },
      //点击每一个愿望查看
      seeWish(item){
          console.log(item)
      },
      //自动播放音乐
      autoPlay(){
          let audio = document.getElementsByClassName('audio')[0];
          audio.play();
      },
      //随机生成位置
      random(){
        //let leaf = document.getElementsByClassName('leaf');
        let leaf = this.$refs.wish.getElementsByClassName('leaf');
        console.log(leaf.length)
        let Width = document.body.clientWidth-30;
        let Height = Width;
        for(let i=0; i<leaf.length; i++){
             let left = Math.random()*Width;
             let top = this.getRandom(65,Height) + 60;
             this.arrPositon.push({
               left: left,
               top: top
             });
             
              this.getPosition();
                 for(let i=0; i<this.ret.length; i++){
                   leaf[i].style.top = this.ret[i].top + 'px'
                   leaf[i].style.left = this.ret[i].left + 'px'
                 }
        }
      },
      //生成指定范围内的不重复随机数
      
      //生成指定范围内的随机数
      getRandom(start, end) {
          let length = end - start;
          let num = Math.random() * (length) + start;
          return num;
        },
      //遍历随机位置数组，防止位置重叠
       getPosition(){
        // var ret = [];
        for (var i = 0, j = this.arrPositon.length; i < j; i++) {
            if (this.ret.indexOf(this.arrPositon[i]) === -1) {
                this.ret.push(this.arrPositon[i]);
            }else{
              this.getRandom()
            }
        }
         return this.ret;
        },
        //请求后台返回的数据
        getArrWishing(current){
          this.$p({
            url:'/wishingTree/getLeaves',
            params:{
              pageSize: 50,
              current: current,
              orderby:"createtime",
            },
            callback:(res)=>{
              console.log(res.data.list)
               if(res.code == 0){
                  this.arrWishing = res.data.list;
                  this.$nextTick(()=>{
                    this.random()
                  })  
                             
               }else{
                this.$mint.Toast({
                  message: '网络异常，请稍后再试！',
                  position: 'center',
                  duration: 500
              });
               }
            }
          })
        }
    },
    created(){
      
    },
    mounted(){
      this.getArrWishing(this.current)
      this.autoPlay()
    }
}
