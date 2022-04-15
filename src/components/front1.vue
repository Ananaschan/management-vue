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

        <div v-for="item in tableData" :key="item" class="text item">

          <div class="card1">
            <el-card class="box-card">
              <div slot="header">
                <span>{{item.title}}</span>
              </div>
              <div class="text item">
                {{item.context}}
              </div>
            </el-card>
          </div>
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
            tableData: [],
          }

        },
      mounted(){
      this.getList()
    },
      methods: {
      getList(){
        this.$axios
          .post('/news/list')
          .then(successResponse => {
            console.log(successResponse.data)
            this.tableData = successResponse.data
          })
          .catch(failResponse => {
          })
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
    height: 250px;
    margin-bottom: 20px;
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
