<template>
    <div>
        <div class="main-container">
            <img class="bg" src="../assets/background_bxjg.jpg" mode='widthFix' alt="">
            <div class="video-wrapper">
                <img src="../assets/skin01.png" mode='widthFix' alt="">
            </div>
            <div @click="gotoguanwang">
                <button class="skin-btn" open-type="launchApp" app-parameter="wechat" @error="launchAppError">
                    <img src="../assets/download_skin.png" mode="widthFix" alt="">
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            // tmp_datalist: tmp_data
        }
    },
    props: ['tmp_data'],
    created(){
        console.log(this.tmp_data);
        // mpvue.request()
    },
    methods: {
        gotoguanwang(){
            setTimeout(function(){
                const url = '../webview/main';
                mpvue.navigateTo({ url });
            },3000)
        }
    }
}
</script>
<style scoped>
.main-container{
     position:relative;
}
.main-container .bg{
	width:750px;
}
.video-wrapper{
    position:absolute;
	width:600px;
	top: 380px;
	left:75px;
}
.video-wrapper img{
    width: 600px;
}
.skin-btn{
	position:absolute;
    width: 525px;
    left: 112.5px;
    top: 965px;
    background-color: transparent;
 }
 .skin-btn img{
     width: 100%
 }
.skin-btn::after{
    border: none;
}
</style>


