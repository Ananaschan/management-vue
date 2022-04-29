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
      <h3>合作公司列表</h3>
      <div class="info">

        <div v-for="item in tableData" :key="item" class="text item">
          <div class="card1">
            <el-card class="box-card">
              <div slot="header">
                <el-image
                  :src="pic[index]"
                  style="width: 100%; height: 447px"
                  fit="cover"></el-image>
              </div>
              <h2 class="text item" >{{item.name}}</h2>

              <div class="text item">
                {{item.description}}
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
      name: "front2",
      data() {
        return {
          index:0,
          imgArray: [
            require('../assets/img/fromt2/img1.png'),
            require('../assets/img/fromt2/img3.jpg'),
            require('../assets/img/fromt2/img2.png'),
          ],
          pic:[
            require('../assets/img/fromt2/info1.jpg'),
            require('../assets/img/fromt2/info2.jpg'),
            require('../assets/img/fromt2/info3.jpg'),
            require('../assets/img/fromt2/info4.jpg'),
            require('../assets/img/fromt2/info5.jpg'),
            require('../assets/img/fromt2/info6.jpg'),
            require('../assets/img/fromt2/info1.jpg'),
          ],
          tableData: [],
        }
      },
      created() {
        this.index = Math.floor((Math.random()*this.pic.length));
      },
      mounted(){
        this.getList()
      },
      methods: {
        getList(){
          this.$axios
            .post('/partner/list')
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
