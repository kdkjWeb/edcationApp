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
      arrWishing: ['a','b','c','a','b','c','a','b','c','a','b','c','a','b','c','a','b','c','a','b','c','a','b','c','a','b','c','a','b','c'],
      arrPositon: [],
      ret: []
    }
  },
  methods:{
      //点击发送按钮
      send(){
        
        if(!this.wishing.wishingTxt||!this.wishing.wishingCon){
            console.log('信息填入不全')
            return;
        }
        console.log(this.wishing.wishingTxt,this.wishing.wishingCon)
      },
      //点击下一棵按钮
      next(){
        console.log('下一棵树')
      },
      //随机生成位置
      random(){
        let leaf = document.getElementsByClassName('leaf');
        let Width = document.body.clientWidth-30;
        let Height = Width;
        for(let i=0; i<leaf.length; i++){
             let left = Math.random()*Width;
             let top = this.getRandom(65,Height);
             this.arrPositon.push({
               left: left,
               top: top
             });
             
              this.getPosition();
              console.log(this.ret)
              for(let i=0; i<this.ret.length; i++){
                leaf[i].style.top = this.ret[i].top + 'px'
                leaf[i].style.left = this.ret[i].left + 'px'
              }
             //console.log(this.arrPositon)
             //leaf[i].style.top = top + 'px'
             //leaf[i].style.left = left + 'px'
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
        }
    },
    created(){
        
    },
    mounted(){
      this.random()
    }
}
