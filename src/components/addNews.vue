<template>
  <el-form :model="editForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

    <el-form-item label="新闻标题" prop="title">
      <el-input v-model.number="editForm.title" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="内容" prop="context">
      <el-input v-model.number="editForm.context" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
    export default {
        name: "addNews",
      data() {
        var checkNewsName = (rule, value, callback) => {
          if (value === '') {
            return callback(new Error('新闻标题不能为空'));
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
              { validator: checkNewsName, trigger: 'blur' }
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
              this.addNews()
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
        addNews(){
          //console.log("editForm:",this.editForm)
          this.$axios
            .post('/news/add',{
              title: this.editForm.title,
              context:this.editForm.context
            })
            .then(successResponse => {
              console.log(successResponse.data)
              if (successResponse.data.code === 100) {
                //添加成功！
                this.$alert('添加成功！');
                this.$router.replace({path: '/newsList'})
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
