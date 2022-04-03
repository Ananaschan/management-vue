<template>
  <div>
    <div class="block">
      <el-carousel height="640px">
        <el-carousel-item v-for="item in imgArray" :key="item">
          <el-image
            style="width: 100%; height: 640px"
            :src="item"
            fit="fit"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main">
      <h3>推荐信息</h3>
      <div class="pic">
        <div class="pic-1">
          <div class="img1">
            <el-image
            :src="pic1"
            style="width: 100%; height: 447px"
            fit="cover"></el-image></div>
          <div class="img2">
            <el-image
              :src="pic2"
              style="width: 100%; height: 447px"
              fit="cover"></el-image>
          </div>
        </div>
        <div class="pic-2">
          <div class="img3">
            <el-image
              :src="pic3"
              style="width: 100%; height: 447px"
              fit="cover"></el-image>
          </div>

          <div class="img4">
            <el-image
              :src="pic4"
              style="width: 100%; height: 447px"
              fit="cover"></el-image>
          </div>
        </div>
        <div class="pic-3">
          <div class="img5">
            <el-image
              :src="pic5"
              style="width: 100%; height: 447px"
              fit="cover"></el-image>
          </div>

          <div class="img6">
            <el-image
              :src="pic6"
              style="width: 100%; height: 447px"
              fit="cover"></el-image>
          </div>

          <div class="img7">
            <el-image
              :src="pic7"
              style="width: 100%; height: 447px"
              fit="cover"></el-image>
          </div>

        </div>
      </div>
      <h3>新闻与活动</h3>
      <div class="info">

        <div class="card1">
          <el-card class="box-card">
            <div slot="header">
              <span>2022世界移动大会</span>
            </div>
            <div class="text item">
              面向HW，HW与全球运营商、合作伙伴一起，打造极简、绿色、智能的ICT基础设施，坚持科技向善，致力于以创新的技术和产品解决方案让生活更美好、商业更智...
            </div>
          </el-card>
        </div>

        <div class="card2">
          <el-card class="box-card">
            <div slot="header">
              <span>2022运营转型峰会</span>
            </div>
            <div class="text item">
              沿着运营运维数智化转型的旅程，携手将数智技术和创新带入运营运维每一个环节，引领智能新体验、新价值，构建万物互联的智能世界。
            </div>
          </el-card>
        </div>

        <div class="card3">
          <el-card class="box-card">
            <div slot="header">
              <span>其他</span>
            </div>
            <div class="text item">

              HW与达尔文圈发起“维也纳科技向绿倡议”

            </div>
            <div class="text item">

              关于公司轮值董事长的当值公告　

            </div>
          </el-card>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "front1",
        data() {
          return {
            imgArray: [
              require('../assets/img/fromt1/1.jpg'),
              require('../assets/img/fromt1/2.jpg'),
              require('../assets/img/fromt1/3.jpg')
            ],
            pic1:require('../assets/img/fromt1/smart-home-p.jpg'),
            pic2:require('../assets/img/fromt1/p50E-p2.jpg'),
            pic3:require('../assets/img/fromt1/sound-joy-p.jpg'),
            pic4:require('../assets/img/fromt1/matepad-paper-p.jpg'),
            pic5:require('../assets/img/fromt1/recruitment3.jpg'),
            pic6:require('../assets/img/fromt1/6g.jpg'),
            pic7:require('../assets/img/fromt1/xuwenwei.jpg'),
          }

        }
    }
</script>

<style scoped>

  .el-carousel__button {
    width: 130px;
    height: 5px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .main > h3{
    text-align: center;
    font-size: 35px;
  }

  .pic{
    width: 70%;
    margin: auto;
  }

  .img1 {
    float: left;
    width: 70%;
    margin-right: 20px;
  }

  .img2{
    float: left;
    width: 25%;
  }

  .img3 {
    float: left;
    width: 25%;
    margin-right: 20px;
  }

  .img4{
    float: left;
    width: 70%;
  }

  .img5{
    float: left;
    width: 30%;
    margin-right: 3.1%;
  }

  .img6{
    float: left;
    width: 30%;
    margin-right: 3.1%;
  }

  .img7{
    float: left;
    width: 30%;
  }

  .pic-1{
    margin-bottom: 20px;
    height: 447px;
  }

  .pic-2{
    margin-bottom: 20px;
    height: 447px;
  }

  .pic-3{
    margin-bottom: 20px;
    height: 447px;
  }

  .info{
    width: 70%;
    margin: auto;
  }

  .card1{
    float: left;
    width: 33.3%;
  }
  .card2{
    float: left;
    width: 33%;
  }
  .card3{
    float: left;
    width: 33%;
  }

  .text {
    font-size: 16px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
  }
</style>
