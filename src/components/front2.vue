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
      <h3>成为合作伙伴</h3>
      <div class="info">

        <div class="card1">
          <el-card class="box-card">
            <div slot="header">
              <el-image
                :src="pic1"
                style="width: 100%; height: 447px"
                fit="cover"></el-image>
            </div>
            <div class="text item">
              HW云伙伴是在行业或区域内从事华为云咨询和技术合作，HW云安全可信、能力开放、全球服务，与合作伙伴一起，共同实现客户价值。
            </div>
          </el-card>
        </div>
        <div class="card2">
          <el-card class="box-card">
            <div slot="header">
              <el-image
                :src="pic2"
                style="width: 100%; height: 447px"
                fit="cover"></el-image>
            </div>
            <div class="text item">
              解决方案伙伴是专门从事软件的开发、生产、销售和服务，具有自主软件产品，能够在HWeSDK或产品基础上进行二次开发或对接HW软硬件平台的行业应用伙伴。
            </div>
          </el-card>
        </div>
        <div class="card3">
          <el-card class="box-card">
            <div slot="header">
              <el-image
                :src="pic3"
                style="width: 100%; height: 447px"
                fit="cover"></el-image>
            </div>
            <div class="text item">
              销售伙伴是在行业或区域内从事华为产品和解决方案销售的合作伙伴。秉承“合作共赢、耕耘收获”的渠道理念，以与合作伙伴实现双赢为宗旨，
              积极贯彻合作、共赢的渠道策略。
            </div>
          </el-card>
        </div>

        <div class="card1">
          <el-card class="box-card">
            <div slot="header">
              <el-image
                :src="pic4"
                style="width: 100%; height: 447px"
                fit="cover"></el-image>
            </div>
            <div class="text item">
              服务伙伴是在行业或区域内从事HW产品和解决方案的工程交付和售后维护的合作伙伴。
            </div>
          </el-card>
        </div>
        <div class="card2">
          <el-card class="box-card">
            <div slot="header">
              <el-image
                :src="pic5"
                style="width: 100%; height: 447px"
                fit="cover"></el-image>
            </div>
            <div class="text item">
              人才联盟-ICT学院是经HW公司授权，面向社会、院校等实施HW认证培训项目，培养ICT人才的合作伙伴。
            </div>
          </el-card>
        </div>
        <div class="card3">
          <el-card class="box-card">
            <div slot="header">
              <el-image
                :src="pic6"
                style="width: 100%; height: 447px"
                fit="cover"></el-image>
            </div>
            <div class="text item">
              人才联盟-HALP是经HW公司授权，为拓展HW认证而发展的培训合作伙伴，其被授权实施HW认证课程。
            </div>
          </el-card>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
    export default {
      name: "front2",
      data() {
        return {
          imgArray: [
            require('../assets/img/fromt2/img1.png'),
            require('../assets/img/fromt2/img3.jpg'),
            require('../assets/img/fromt2/img2.png'),
          ],
          pic1:require('../assets/img/fromt2/info1.jpg'),
          pic2:require('../assets/img/fromt2/info2.jpg'),
          pic3:require('../assets/img/fromt2/info3.jpg'),
          pic4:require('../assets/img/fromt2/info4.jpg'),
          pic5:require('../assets/img/fromt2/info5.jpg'),
          pic6:require('../assets/img/fromt2/info6.jpg'),
          pic7:require('../assets/img/fromt2/info1.jpg'),
        }

      }
    }
</script>

<style scoped>
  .main{
    width: 70%;
    margin: auto;
  }

  .main > h3{
    text-align: center;
    font-size: 35px;
  }


  .card1{
    float: left;
    width: 33.3%;
    margin-bottom: 20px;
  }
  .card2{
    float: left;
    width: 33%;
    margin-bottom: 20px;
  }
  .card3{
    margin-bottom: 20px;
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
