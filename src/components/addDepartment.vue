<template>
  <el-form :model="editForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

    <el-form-item label="部门名称" prop="name">
      <el-input v-model.number="editForm.name" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
    export default {
        name: "addDepartment",
      data() {
        var checkDepartmentName = (rule, value, callback) => {
          if (value === '') {
            return callback(new Error('部门名称不能为空'));
          } else {
            callback();
          }
        };
        return {
          editForm: {
            name: '',
          },
          rules: {
            name: [
              { validator: checkDepartmentName, trigger: 'blur' }
            ]
          }
        }
      },
      mounted(){
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log('submit!')
              //向后端提交数据
              this.addDepartment()
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
        },
        addDepartment(){
          //console.log("editForm:",this.editForm)
          this.$axios
            .post('/dep/add',{
              name: this.editForm.name,
            })
            .then(successResponse => {
              console.log(successResponse.data)
              if (successResponse.data.code === 100) {
                //添加成功！
                this.$alert('添加成功！');
                this.$router.replace({path: '/departmentList'})
              }else {
                this.$message.error(successResponse.data.message);
              }
            })
            .catch(failResponse => {
              console.log(failResponse.data)
            })
        },
      }
    }
</script>

<style scoped>
  .el-input{
    width: 80%;
  }
  .el-date-picker{
    width: 80%;
  }
  .el-select{
    width: 80%;
  }
</style>
