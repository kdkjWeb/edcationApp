/**
 * Created by kdkjPC on 2018/3/2.
 */
export default {
    data(){
        return {
          circle: 3,
          circleId: null,
          rewardId: null,
          giftname: "",
          rewardList: [],
          rewardName: [],
          scroll:null,
        }
    },
    methods:{
      /**
       * 奖品按钮
       */
      rewardBtn(index){
        this.circle = 3;
        if(index !=4) {
          return false;
        }
        this.getRandomNum();
      },
      getRandomNum(){
        this.$g({
          url:"Gift/getRandomNum",
          params:{},
          callback:(res)=>{
            if(res.data.id) {
              this.rewardId = res.data.id;
              this.giftname = res.data.giftname;
            }else {
              this.rewardId = null;
              this.giftname = ''
            }

            this.circleFun(this.rewardId,this.giftname);
          }
        })
      },
      /**
       * 通过giftname 来获取index
       */
      giftName(name){
        switch (name) {
          case "靠背套装":
            return 0;
            break;
          case "集线器":
            return 1;
            break;
          case "零钱包":
            return 2;
            break;
          case "洗衣液":
            return 7;
            break;
          case "工艺香皂":
            return 3;
            break;
          case "毛巾":
            return 6;
            break;
          case "餐具套装":
            return 4;
            break;
          case "":
            return 5;
            break;
        }
      },
      circleFun(rewardId,giftname){
        var stopIndex = this.giftName(giftname)+1;
        this.circleId = 0;
        var circleInt;
        setTimeout(()=>{
          circleInt = setInterval(()=>{
            if(this.circle == 0) {
              stopIndex--;
              if(stopIndex <=0) {
                clearInterval(circleInt);
                this.remberReward(rewardId);
                return false;
              }
            }
            var d = this.circleId;
            var c = this.circle;
            if(d < 2) {
              d++;
            }else if(d ==2|| d==5){
              d+=3;
            }else if(d >6) {
              d-=1;
            }else if(d==6) {
              d-=3;
            }else if(d==3) {
              c--;
              this.circle=c;
              d=0;
            }
            this.circleId = d;
            console.log(d);
          },250)
        },250)
      },
      /**
       * 告诉后台抽中了某一个奖项
       */
      remberReward(rewardId){
        if(rewardId==null) {
          rewardId = '';
        }
        this.$p({
          url: 'Prizes/insertWinner',
          params: {
              userid:this.$common.getStorage("token"),
              prize:rewardId
          },
          callback: (res)=> {
            console.log(res)
          }
        })
      },
      toWait(){
            this.$mint.Toast({
                message: '功能正在开发，敬请期待！',
                position: 'center',
                duration: 1500
            });
        },
      toRouter(){
        this.$router.push({
          path:'/wishing'
        });
      }
    },
    mounted(){
      this.$g({
        url:"Gift/selectGift",
        params:{},
        callback:(res)=>{
          this.rewardList = JSON.parse(JSON.stringify(res.data.list));
          var btn = {msg:"我是按钮"};
          var thank = {id:null,msg:"我是谢谢参与"}
          this.rewardList.splice(4,0,btn);
          this.rewardList.splice(7,0,thank)
          console.log(this.rewardList);
        }
      });
      this.$g({
        url:"Prizes/selectPrizesUsers",
        params:{},
        callback:(res)=>{
          var array = [];
          for (var i in res.data) {
            var name = res.data[i]
            var i = i.substring(0,7);
            i+="****";
            array.push({phone:i,name:name})
          }
          this.rewardName = array;
          console.log(array);
          var arr = Object.keys(res.data);
          if(arr.length<=2) {
            this.scroll = '';
          }else if(arr.length<=4) {
            this.scroll = "a";
          }else if(arr.length<=6) {
            this.scroll = "b";
          }else {
            this.scroll = "c";
          }
        }
      })
    }
}
