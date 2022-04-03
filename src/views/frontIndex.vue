<template>
  <div>
    <div class="header" >
      <div class="header0">
        <div class="text0">Welcome !</div>
        <div class="tag0">
          <div>

          </div>
          <div>
            <router-link to="/front1">
              个人及家庭产品
            </router-link>
            <router-link to="/front2">
              合作伙伴与开发者
            </router-link>
            <router-link to="/front3">
              关于我们
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
        <router-view></router-view>
    </div>
    <div class="footer" >
      <el-divider></el-divider>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">
          <div class="text1">关于我们</div>
          <div>公司简介</div>
          <div>可持续发展</div>
          <div>信任中心 </div>
          <div>管理层信息 </div>
          <div>招贤纳士 </div>
          <div>供应商 </div>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <div class="text1">新闻与活动 </div>
          <div>新闻 </div>
          <div>展会活动 </div>
          <div>媒体图库  </div>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <div class="text1">发现我们 </div>
          <div>HuaweiTech </div>
          <div>出版物 </div>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <div class="text1">我们的产品 </div>
          <div>个人及家庭产品 </div>
          <div>企业业务产品 </div>
          <div>运营商网络产品  </div>
          <div>云服务  </div>
        </div></el-col>
      </el-row>

      <el-divider></el-divider>
      <div class="icon0">
        <i class="el-icon-phone-outline"></i>
        <i class="el-icon-s-goods"></i>
        <i class="el-icon-star-off"></i>
        <i class="el-icon-s-comment"></i>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index0"
    }
</script>

<style scoped>
  .el-header{
    padding: 0;
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 60px;*/
  }
  .footer {
    float: left;
    padding: 0;
    margin-top: 30px;
    width: 100%;
    background-color: RGB(242,242,242);
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 600px;
  }
  .text1{
    font-weight:bold;
    font-size: 23px;
  }
 .icon0{
   font-size: 50px;
   text-align: right;

 }
  .icon0 > i{
    margin-left: 30px;
    margin-right: 30px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .header0{

    width: 100%;

    text-align: right;

    line-height: 30px;
    color: white;
  }
  .header0 > div{
    padding-right: 20px;
  }
  .text0{
    background-color: black;
  }
  .tag0 {
    text-align: center;
    /*height: 150px;*/
    color: black;
    background-color: white;
    margin: 30px 0;
    /*line-height: 100px;*/

  }
  .tag0 > div > a{
    color: black;
    font-size: 20px;
    margin: 0 30px;
  }


  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    /*background: #99a9bf;*/
  }
  .bg-purple {
    /*background: #d3dce6;*/
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
