<template>
    <div>
        <div class="main-container">
            <img class="bg-image0" src="../assets/background.jpg" mode="widthFix" alt="">
            <div class="main">
                <div class="panel">
                    <div class="card">
                        <div class="card-inner">
                            <div class="card-header">
                                <div class="card-header-left">
                                    <img src="../assets/skin01.png" mode="aspectFit" @load="title_img_load($event)" :style="{width:title_img_width+'rpx'}"/>
                                </div>
                                <div class="card-header-right">
                                    <div class="card-t1">{{srf_data.srfname}}</div>
                                    <div class="card-t2"><span>作者：</span>{{srf_data.srfauthor}}</div>
                                    <div>
                                        <div class="card-p1"><div class="card-t2"><span>下载：</span>{{srf_data.srfcishu}}次</div></div>
                                        <div class="card-p1"><div class="card-t2"><span>大小：</span>{{srf_data.srfsize}}</div></div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="card-t3">{{srf_data.srfmiaoshu}}</div>
                            <div class="card-image-out">
                                <swiper class="card-image" id="swipers" :indicator-dots="false" autoplay="true" interval="5000" :current="current" duration="1000" @change="bindchange($event)" :style="{height:image_height[current]+'rpx'}">
                                    <block v-for="(item, index) in movies" :index="index" :key="key">
                                        <swiper-item>
                                            <image :src="item.url" class="slide-image" mode="widthFix" @load="image_load(index,$event)"/>
                                        </swiper-item>
                                    </block>
                                </swiper>
                                <div class="swiper-span">
                                    <span v-for="(item,index) in movies" :class="{ active: index == current }"></span>
                                </div>
                            </div>
                            <div @click="gotoguanwang">
                                <button class="skin-btn" open-type="launchApp" app-parameter="wechat" @error="launchAppError">
                                    <img src="../assets/downskin.png" mode="widthFix" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qrcode">
                <p>百度手机输入法微信公众账号</p>
                    <img mode="widthFix" src="../assets/qrcode.jpg"/>
                <p>更多精彩等你来</p>
            </div>
        </div>
        <!-- <div>
            
            <swiper class="swiper" :indicator-dots="false" autoplay="true" interval="5000" duration="1000">
                <block v-for="(item, index) in movies" :index="index" :key="key">
                    <swiper-item>
                        <image :src="item.url" class="slide-image" mode="widthFix"/>
                    </swiper-item>
                </block>
            </swiper>
            <img class="bg" src="../assets/background.jpg" mode="scaleToFill" alt="">

        </div>
        <div>
            <img src="" alt="">
        </div> -->
    </div>
</template>
<script>
import store from '../store'
export default {
    data(){
        return {
            current: 0,
            image_height: [432],
            movies: [
                {url: require('../assets/skin01.png')},
                {url: require('../assets/skin02.png')}
            ],
            cishu: 1234,
            srf_data: {
                srfname: '萌芽熊吃果果',
                srfauthor: '百度输入法',
                srfcishu: 11477,
                srfsize: '745.1K',
                srfmiaoshu: '萌萌的我要发芽'
            }
        }
    },
    created(){
        
    },
    computed: {
        image_height(){
            return store.state.image_height
        },
        title_img_width(){
            return store.state.title_img_width
        }
    },
    methods: {
        image_load(i,e){
            let that = this;
            let viewheight = e.target.width/e.target.height;
            viewheight = 540/viewheight;
            this.image_height[i] = viewheight;
            let images_height = this.image_height;
            store.commit('decrement',images_height);
        },
        title_img_load(e){
            console.log(e);
            let that = this;
            let titltwidth = e.target.width/e.target.height*150;
            store.commit('increment',titltwidth);
        },
        launchAppError(e){
            console.log(e.mp.detail.errMsg)
        },
        bindchange(e){
            let oIndex = e.mp.detail.current;
            this.current = oIndex;
        },
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
    background-color: rgba(0,0,0,0.5);
}
.main{
    background: url("http://imeres.baidu.com/imeres/ime-res/activity/img/1551335899000.png") no-repeat scroll center top;
    background-size: 640px auto;
	width:100%;
}
.bg-image0{
    position: absolute;
    display: block;
    top:0;
    height: 100%;
    width:100%;
    background-position: center center;
    background-size: auto 100%;
    background-repeat: repeat;
    background-attachment:fixed;
    z-index:-1;
}
.panel{
    padding:66px 0;
    width:87.5%;
    margin: 0 auto;
}
.card{
    width: 100%;
    border-radius: 20px;
    background-color: #ffffff;
}
.card-inner{
    width: 82.1%;
    padding:40px 0;
    margin: 0 auto;
}
.card-header-left{
	float:left;
}
.card-header-left img{
	height:150px;
    width: auto;
}
.card-header-right{
	float:left;
    margin-left:10px;
}
.card-t1{
    font-size:38px;
    line-height: 60px;
    color:#0c0c0c;
    padding-bottom: 10px;
}
.card-t2{
    font-size:24px;
    line-height: 40px;
    color:#333333; 
}
.card-t2 span{
    color:#cccccc;
}
.card-t3{
    font-size:24px;
    line-height: 40px;
    color:#474747;
    /* padding-top:20px; */
}
.card-p1{
    /* width: 50%; */
    margin-right: 10px;
    float: left;
}
.card-image-out{
   padding: 10px 0; 
   position: relative;
}
.card-image{
    width: 100%;
    height: auto;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}
.card-image image{
    width: 100%;
    border-radius: 10px;
}
.swiper-span{
    position: absolute;
    bottom: 10px;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    padding: 10px;
    border-bottom-right-radius: 10px;
    /* height: 20px; */
}
.swiper-span span{
    float: left;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 0 5px;
    background-color: #fff;
}
.swiper-span span.active{
    background-color: #f44e51;
}
.skin-btn{
    width: 87.5%;
    margin: 20px auto;
    display: block;
    background-color: transparent;
}
.skin-btn img{
    width: 100%;
    display: block;
}
.skin-btn::after{
    border: none;
}
.qrcode{
	text-align:center;
    padding-top:30px;
    padding-bottom:30px;
    width:100%;
    background-color:#eeeeee;  
}
.qrcode p{
	margin-top:16px;
    margin-bottom:16px;
    color:#3d3d3d;
}
.qrcode img{
	width:240px;
    height: auto;
}

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
/* image{
    height: auto;
}
.swiper{
    width: 600px;
    position: absolute;
    top: 385px;
    left: 75px;
    z-index: 10;
}
.swiper image{
    width: 600px;
    height: auto;
}
.bg{
    position: absolute;
    top: 0;
    width: 750px;
    height: 100vh;
    z-index: -1;
} */
</style>
