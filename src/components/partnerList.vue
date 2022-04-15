<template>
  <div>
    <h1 style="font-size: 26px">合作伙伴列表</h1>
    <el-table
      class="el-table"
      :data="tableData"
      style="width: 90%"
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        class="el-table-column"
        prop="id"
        label="伙伴公司id"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="name"
        label="伙伴公司名称"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="description"
        label="描述"
        sortable
      >
      </el-table-column>


      <el-table-column
        class="el-table-column"
        prop=""
        label="操作"
        sortable
      >

        <template slot-scope="scope">
          <el-button type="primary" plain @click="showEditDialog(scope.row.id)">修改</el-button>
          <el-popover
            placement="top"
            width="160"
          >
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" >取消</el-button>
              <el-button type="primary" size="mini" @click="deletePartner(scope.row.id)">确定</el-button>
            </div>
            <el-button slot="reference" type="danger" plain>删除</el-button>
          </el-popover>
        </template>

      </el-table-column>
    </el-table>


    <el-dialog
      name="修改伙伴"
      :visible.sync="editDialogVisible"
      width="50%"
    >

      <el-form :model="editForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="名称" prop="name">
          <el-input type="text" v-model="editForm.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="描述" prop="description">
          <el-input type="text" v-model="editForm.description" autocomplete="off"></el-input>
        </el-form-item>

      </el-form>

      <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editDialogVisible = false,submitForm('ruleForm')">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "partnerList",
      data() {
        var checkPartnerName = (rule, value, callback) => {
          if (value === '') {
            return callback(new Error('伙伴名称不能为空'));
          } else {
            callback();
          }
        };
        return {
          tableData: [],
          editDialogVisible: false,
          editForm: {},
          rules: {
            typeName: [
              { validator: checkPartnerName, trigger: 'blur' }
            ]
          }
        }
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
        },
        deletePartner(id){
          this.$axios({
            method: 'delete',
            url: '/partner/delete/'+id,
          }).then(successResponse => {
            console.log(successResponse.data)
            this.getList()
          })
            .catch(failResponse => {
            })
        },
        showEditDialog(id){
          this.$axios
            .post('/partner/getById',this.$qs.stringify({
              id: id
            }))
            .then(successResponse => {
              console.log(successResponse.data)
              this.editForm = successResponse.data
            })
            .catch(failResponse => {
            })
          this.editDialogVisible = true
        },
        updatePartner(){
          this.$axios
            .post('/partner/update',{
              id: this.editForm.id,
              name: this.editForm.name,
              description:this.editForm.description
            })
            .then(successResponse => {
              console.log(successResponse.data)
              this.getList()
            })
            .catch(failResponse => {
            })
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log('submit!')
              //向后端提交数据
              this.updatePartner()
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        formatter(row, column) {
          return row.address;
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
