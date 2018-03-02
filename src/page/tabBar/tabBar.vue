<template>
    <div class="homeBox">
        <router-view></router-view>
        <footer class="tabBar">
            <div class="active"><i class="iconfont icon-msnui-home-inverse"></i>首页</div>
            <div><i class="iconfont icon-xingxing"></i>许愿</div>
            <div><i class="iconfont icon-shuaxin"></i>刷新</div>
            <div><i class="iconfont icon-liwu1"></i>活动</div>
            <div><i class="iconfont icon-gaiicon-"></i>我的</div>
        </footer>
    </div>
</template>
<script>
    export default require('./tabBarCtr.js');
</script>
<style scoped>
    .homeBox {
        width:100%;
        padding-bottom:50px;
    }
    .tabBar {
        width:100%;
        height:50px;
        background-color: white;
        border-top:1px solid #efefef;
        position:fixed;
        bottom:0;
        left:0;
        z-index:10;
        display: flex;
    }
    .tabBar div {
        flex: 1;
        text-align: center;
        font-size:12px;
        color:#575757;
    }
    .tabBar div i {
        display: block;
        margin-top:5px;
        font-size:22px;
    }
    .tabBar div.active {
        color:#ffd24a;
    }

</style>