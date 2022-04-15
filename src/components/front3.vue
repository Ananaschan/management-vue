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
      <h3>公司部门展示</h3>
      <div class="info">
        <div v-for="item in tableData" :key="item.name" class="text item">
          <div class="card">
            <el-card class="box-card">
              <div slot="header">
                <el-image
                  :src="pic3"
                  style="width: 100%; height: 447px"
                  fit="cover"></el-image>
              </div>
              <div class="text item">
                <div class="dep" style="font-size: 25px"></div>
                {{item.name}}
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
      name: "front3",
      data() {
        return {
          imgArray: [
            require('../assets/img/fromt3/img1.jpg'),
            require('../assets/img/fromt3/img2.jpg'),
            require('../assets/img/fromt3/img3.jpg'),
          ],
          pic1:require('../assets/img/fromt2/info1.jpg'),
          pic2:require('../assets/img/fromt2/info2.jpg'),
          pic3:require('../assets/img/fromt2/info3.jpg'),
          pic4:require('../assets/img/fromt2/info4.jpg'),
          pic5:require('../assets/img/fromt2/info5.jpg'),
          pic6:require('../assets/img/fromt2/info6.jpg'),
          pic7:require('../assets/img/fromt2/info1.jpg'),
          tableData: [],
        }

      },
      mounted(){
        this.getList()
      },
      methods: {
        getList(){
          this.$axios
            .post('/dep/list')
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
  .main{
    width: 70%;
    margin: auto;
  }

  .main > h3{
    text-align: center;
    font-size: 35px;
  }

  .card{
    float: left;
    width: 33.3%;
    margin-bottom: 20px;
  }
  .text {
    font-size: 26px;
    text-align: center;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
  }
</style>
