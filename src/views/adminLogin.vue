<template>
  <el-container class="container">
    <el-main class="el-main">

      <div>
        <el-card class="box-card">
          <h2>员工管理系统后台登录</h2>
          <div class="text item">
            <el-input
              placeholder="请输入账号"
              v-model="loginForm.userName"
              clearable>
            </el-input>
            <el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
          </div>
          <el-button class="button" type="primary" round v-on:click="login">登入</el-button>
          <el-button class="button" type="info" round @click="reset">清空</el-button>
        </el-card>
      </div>

    </el-main>

  </el-container>
</template>

<script>
    export default {
        name: "login",
        data() {
          return {
            loginForm:{
              userName:'',
              password:''
            }
          }
        },
      methods:{
        login () {
          var _this = this
          console.log(this.$store.state)
          this.$axios
            .post('/admin/login', {
              name: this.loginForm.userName,
              password: this.loginForm.password
            })
            .then(successResponse => {
              if (successResponse.data === true) {
                //用户名密码匹配正确
                //调用store中adminLogin方法保存用户登录状态
                _this.$store.commit('adminLogin',_this.loginForm)
                var path = this.$route.query.redirect
                this.$router.replace({path: path==='/' || path === undefined ? 'mainIndex' : path})
              }else {
                this.$message.error('登录失败');
              }
            })
            .catch(failResponse => {
            })
        },
        reset(){
          this.loginForm.userName = ""
          this.loginForm.password = ""
        }
      }
    }

</script>

<style scoped>

  .container {
    background-image: url(../assets/img/in_top_bj.png);
    width:100%;
    height:900px;
    z-index:10;
    filter:alpha(opacity=40);
    -moz-opacity:0.4;
    -khtml-opacity: 0.4;

  }
  .el-main {
    color: #333;
    text-align: center;
    line-height: 60px;
    width:100%;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .button {
    margin: 60px;
    margin-top: 10px;
    margin-bottom: 10px;

  }

  .box-card {
    width: 480px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
