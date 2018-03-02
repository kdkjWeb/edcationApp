/**
 * Created by kdkjPC on 2018/3/2.
 */
export default {
    data(){
        return {}
    },
    methods:{
        toWait(){
            this.$mint.Toast({
                message: '功能正在开发，敬请期待！',
                position: 'center',
                duration: 1500
            });
        }
    }
}