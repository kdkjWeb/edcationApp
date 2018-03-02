/**
 * Created by kdkjPC on 2018/3/2.
 */
export default {
    data(){
        return {
            active:1
        }
    },
    methods:{
        toRouter(index){
            switch(index){
                case 1:
                    this.active = index;
                    this.$router.push({
                        path:'/tabBar'
                    });
                    break;
                case 2:
                    this.active = index;
                    this.$router.push({
                        path:'/wishing'
                    });
                    break;
                default:
                    this.active = index;
                    this.$mint.Toast({
                        message: '功能正在开发，敬请期待！',
                        position: 'center',
                        duration: 500
                    });
                    break;
            }
        }
    }
}