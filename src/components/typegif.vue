<template>
    <div>
        <video id="video" src="http://imeres.baidu.com/imeres/ime-res/guanwang/img/1542771724000.mp4" x-webkit-airplay="true" webkit-playsinline="true"></video>
        <div class="bofang" @click="playvideo">播放</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            image_height: ''
        }
    },
    methods: {
        playvideo(){
            mpvue.videoContext = mpvue.createVideoContext('video');
            mpvue.videoContext.play();
            wx.setData({
                image_height: 111
            })
            // const url = '../logs/main';
            // mpvue.navigateTo({ url });
        }
    }
}
</script>
<style>
#video{
    width: 750px;
}
.bofang{
    position: absolute;
    top: 100px;
    left: 200px;
    color: #fff;
}
</style>
