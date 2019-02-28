<template>
    <div>
        <div class="main-container">
            <img class="bg-image0" src="../assets/background.jpg" mode="widthFix" alt="">
            <div class="main">
                <div class="panel">
                    <div class="card">
                        <div class="card-inner">
                            <div class="card-t1">{{srf_data.srfname}}</div>
                            <div class="card-t2"><span>作者：</span>{{srf_data.srfauthor}}</div>
                            <div>
                                <div class="card-p1"><div class="card-t2"><span>下载：</span>{{srf_data.srfcishu}}次</div></div>
                                <div class="card-p1"><div class="card-t2"><span>大小：</span>{{srf_data.srfsize}}</div></div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="card-image-out">
                                <swiper class="card-image" :indicator-dots="false" autoplay="true" interval="5000" duration="1000" :style="{height:image_height[index]+'px'}">
                                    <block v-for="(item, index) in movies" :index="index" :key="key">
                                        <swiper-item>
                                            <image :src="item.url" class="slide-image" mode="widthFix" @load="image_load(index,$event)"/>
                                        </swiper-item>
                                    </block>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
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
export default {
    /*
        images:scaleToFill----不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
               aspectFit------保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
               aspectFill-----保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
               widthFix-------宽度不变，高度自动变化，保持原图宽高比不变
               top------------不缩放图片，只显示图片的顶部区域
               bottom---------不缩放图片，只显示图片的底部区域
               center---------不缩放图片，只显示图片的中间区域
               left-----------不缩放图片，只显示图片的左边区域
               right----------不缩放图片，只显示图片的右边区域
               top left-------不缩放图片，只显示图片的左上边区域
               top right------不缩放图片，只显示图片的右上边区域
               bottom left----不缩放图片，只显示图片的左下边区域
               bottom right---不缩放图片，只显示图片的右下边区域
    */
    data(){
        return {
            image_height: [],
            movies: [
                {url: require('../assets/skin01.png')},
                {url: require('../assets/skin02.png')}
            ],
            cishu: 1234,
            srf_data: {
                srfname: '',
                srfauthor: '百度输入法',
                srfcishu: 11477,
                srfsize: '745.1K'
            }
        }
    },
    created(){
        
    },
    methods: {
        image_load(i,e){
            console.log(i,e.target)
            let viewheight = 750/(e.target.width/e.target.height);
            this.image_height[i] = viewheight;
            this.srfname = '萌芽熊吃果果';
            console.log(this.image_height);
        }
    }
}
</script>
<style>
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
    padding:20px 0;
    margin: 0 auto;
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
.card-p1{
    width: 50%;
    float: left;
}
.card-image-out{
   padding: 10px 0; 
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
    width: 100%
}
.swiper{
    width: 100%;
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
