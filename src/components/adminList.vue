<template>
  <div>
    <h1 style="">管理员列表</h1>
    <el-table
      class="el-table"
      :data="tableData"
      style="width: 90%"
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        class="el-table-column"
        prop="id"
        label="管理员id"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="name"
        label="管理员名称"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="password"
        label="密码"
        sortable
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "adminList",
    data() {
      return {
        tableData: [],
        editDialogVisible: false,
        editForm: {},
      }
    },
    mounted(){
      this.getList()
    },
    methods: {
      getList(){
        this.$axios
          .post('/admin/list')
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
  .el-table{
    margin:0 auto;
    text-align:center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 500px;
  }
</style>
