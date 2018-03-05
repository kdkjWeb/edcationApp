/**
 * Created by kdkjPC on 2018/1/23.
 */
export default {
  data(){
    return {
      text: '',
      winning:{
        name: '',
        winer: ''
      },
      flag: ''
    }
  },
  methods:{
    //查看中奖记录
    gitWine(){
      this.$g({
        url:"Prizes/selectPrizesUsers",
        params:{
          userid: this.$common.getStorage('token'),
        },
        callback:(res)=>{
          this.flag = Object.keys(res.data).length
          if(res.code == 0){
            var name,winer;
            for(var i in res.data){
              name = i;
              winer = res.data[i]
            }
            //this.text = `恭喜用户${name}中了${winer}奖品`
            this.winning.name = `${name}`;
            this.winning.winer = `${winer}`;
          }
          if(Object.keys(res.data).length == 0){
            this.text = '很遗憾，您还没有中奖记录！'
          }
        }
      })
    },
  },
  created(){},
  mounted(){
    this.gitWine();
  }
}
