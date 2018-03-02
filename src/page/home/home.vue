<template>
    <div class="Box">
        <header>LOGO</header>
        <img @click="toWait()" class="preImg" src="../../assets/preImg.png" alt="">
        <img @click="toWait()" class="preImg" src="../../assets/preImg2.png" alt="">
    </div>
</template>
<script>
    export default require('./homeCtr.js');
</script>
<style scoped>
    .Box {
        width:100%;
    }
    header {
        width:100%;
        height:60px;
        background-color: #323232;
        color:white;
        display: flex;
        align-items:flex-end;
        box-sizing: border-box;
        padding-left:20px;
        padding-bottom:10px;
        font-weight: bold;
        font-size: 26px;
    }
    .preImg {
        width:100%;
    }

</style>