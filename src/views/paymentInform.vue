<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">人力资源管理系统</el-menu-item>
      <el-menu-item index="2">
        <template slot="title">首页</template>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">员工管理</template>
        <el-menu-item index="2-1">查看员工列表</el-menu-item>
        <el-menu-item index="2-2">添加员工</el-menu-item>
      </el-submenu>
    </el-menu>

    <p style="font-size: 20px;margin-left: 220px;margin-top: 200px">请选择操作</p>
    <div>
      <el-button style="width: 1000px;margin-left: 300px;margin-bottom: 10px" type="primary"><i class="el-icon-s-grid"></i>查看员工信息</el-button>
      <br>
      <el-button style="width: 1000px;margin-left: 300px" type="primary"><i class="el-icon-download"></i>新增员工信息</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "paymentInform",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }

</script>

<style scoped>

</style>
