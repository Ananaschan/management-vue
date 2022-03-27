<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="RGB(57,61,73)"
        text-color="#fff"
        active-text-color="#ffd04b"
        :gutter="20">


        <el-row :gutter="20">
          <el-col :span="6">
            <el-menu-item index="1" :span="18">{{$t('m.management')}}</el-menu-item>
          </el-col>

<!--          <el-col :span="3">-->
<!--            <el-submenu index="2">-->
<!--              <template slot="title">我的工作台</template>-->
<!--              <router-link to="/employeeList">-->
<!--                <el-menu-item index="2-1">{{$t('m.employeeList')}}</el-menu-item>-->
<!--              </router-link>-->

<!--              <router-link to="/addEmployee">-->
<!--                <el-menu-item index="2-2">{{$t('m.addEmployee')}}</el-menu-item>-->
<!--              </router-link>-->

<!--            </el-submenu>-->
<!--          </el-col>-->

          <el-col :span="6" :offset="6">
            <el-select v-model="lang" @change="changeLanguage()" placeholder="Language">
              <el-option
                label="简体中文" value="zh-CN">
              </el-option>
              <el-option
                label="English" value="en">
              </el-option>
            </el-select>
          </el-col>

          <el-col :span="2" :offset="2">
            <el-button type="danger" plain @click="quit">{{$t('m.quit')}}</el-button>
          </el-col>
        </el-row>

      </el-menu>

    </el-header>

    <el-container>
      <el-aside  style="height: 100%;width: 200px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">

              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-notebook-2"></i>
                  <span>{{$t('m.department')}}</span>
                </template>
                <el-menu-item-group>
                  <router-link to="/departmentList">
                    <el-menu-item index="1-1">
                      {{$t('m.departmentList')}}
                    </el-menu-item>
                  </router-link>
                  <router-link to="/addDepartment">
                    <el-menu-item index="1-2">
                      {{$t('m.addDepartment')}}
                    </el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-user"></i>
                  <span>{{$t('m.employee')}}</span>
                </template>
                <el-menu-item-group>
                  <router-link to="/employeeList">
                    <el-menu-item index="2-1">
                      {{$t('m.employeeList')}}
                    </el-menu-item>
                  </router-link>
                  <router-link to="/addEmployee">
                    <el-menu-item index="2-2">
                      {{$t('m.addEmployee')}}
                    </el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-user-solid"></i>
                  <span>{{$t('m.admin')}}</span>
                </template>
                <el-menu-item-group>
                  <router-link to="/adminList">
                    <el-menu-item index="3-1">
                      {{$t('m.adminList')}}
                    </el-menu-item>
                  </router-link>

                  <router-link to="/addAdmin">
                    <el-menu-item index="3-2">
                      {{$t('m.addAdmin')}}
                    </el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-goods"></i>
                  <span>{{$t('m.pay')}}</span>
                </template>
                <el-menu-item-group>
                  <router-link to="/aliPay">
                    <el-menu-item index="4-1">
                      {{$t('m.thanks')}}
                    </el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>

      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>©HealingGarden有限公司</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "index",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          lang:'Language'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        quit() {
          var _this = this
          _this.$store.commit('adminLogin',"")
          this.$router.push("/adminLogin")
        },
        changeLanguage(){
          console.log("切换到语言",this.lang)
          this.$i18n.locale = this.lang;
        }
      }
    }
</script>

<style scoped>

  * {
    text-decoration: none;
    text-decoration-color: black;
  }
  .el-menu-demo{
    width: 100%;
    margin-left: -20px;
    padding-right: 40px;
  }
  .el-menu-vertical-demo{
    /*height: 960px;*/
    height: 1480px;
  }
  .el-header, .el-footer {
    background-color: RGB(238,238,238);
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #FFF;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
