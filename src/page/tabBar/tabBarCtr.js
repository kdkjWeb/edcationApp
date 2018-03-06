/**
 * Created by kdkjPC on 2018/3/2.
 */
export default {
  data(){
    return {
      active: 1
    }
  },
  methods: {
    toRouter(index){
      this.active = index;
      switch (index) {
        case 1:
          this.$router.push({
            path: '/home'
          });
          break;
        case 2:
          this.$router.push({
            path: '/wishing'
          });
          break;
        case 3:
          window.location.reload();
          break;
        case 5:
          this.$router.push({
            path: '/mine'
          });
          break;
        default:
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
