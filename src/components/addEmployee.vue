<template>
  <el-form :model="editForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

    <el-form-item label="员工姓名" prop="name">
      <el-input v-model.number="editForm.name" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="部门" prop="department">
      <el-select v-model=editForm.department.id>
        <el-option
          v-for="item in departmentList"
          :key="item.departmentList"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="性别" prop="gander">
      <el-select v-model=editForm.gander>
        <el-option
          v-for="item in ganderList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="工资" prop="salary">
      <el-input v-model.number="editForm.salary"></el-input>
    </el-form-item>

    <el-form-item label="生日" prop="birthday">
      <div class="block">
        <el-date-picker
          v-model="editForm.birthday"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
    </el-form-item>

    <el-form-item label="邮箱" prop="email">
      <el-input v-model="editForm.email"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
    export default {
        name: "addFood",
      data() {
        var checkEmployeeName = (rule, value, callback) => {
          if (value === '') {
            return callback(new Error('员工姓名不能为空'));
          } else {
            this.$axios
              .post('/emp/repeat/'+this.editForm.name,
              )
              .then(successResponse => {
                console.log(successResponse.data)
                if (!successResponse.data) {
                  //重名
                  return callback(new Error('员工姓名重复'));
                }else {
                  callback();
                }
              })
              .catch(failResponse => {
                console.log(failResponse.data)
              })
          }
        };
        var checkDepartment = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请选择员工所属部门'));
          } else {
            callback();
          }
        };
        var checkGander = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请选择员工性别'));
          }  else {
            callback();
          }
        };
        var checkEmail = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入员工邮箱'));
          }else if (value.length < 6){
            callback(new Error('邮箱不得低于6个字符'));
          } else {
            callback();
          }
        };
        var checkBirthday = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('输入员工生日'));
          }  else {
            callback();
          }
        };
        var checkSalary = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('输入员工生日'));
          }  else {
            callback();
          }
        };
        return {
          editForm: {
            name: '',
            department: {
              name :''
            },
            salary:'',
            birthday: '',
            gander:'',
            email:''
          },
          departmentList: {
          },
          ganderList:[
            {
              value:0,
              label:'女'
            },
            {
              value:1,
              label:'男'
            }
            ],
          rules: {
            name: [
              { validator: checkEmployeeName, trigger: 'blur' }
            ],
            department: [
              { validator: checkDepartment, trigger: 'blur' }
            ],
            gander: [
              { validator: checkGander, trigger: 'blur' }
            ],
            email: [
              { validator: checkEmail, trigger: 'blur' }
            ],
            birthday: [
              { validator: checkBirthday, trigger: 'blur' }
            ],
            salary: [
              { validator: checkSalary, trigger: 'blur' }
            ]
          }
        }
      },
      mounted(){
        this.getDepartmentList()
      },
      methods: {
        getDepartmentList(){
          this.$axios
            .post('/dep/list')
            .then(successResponse => {
              this.departmentList = successResponse.data
            })
            .catch(failResponse => {
            })
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log('submit!')
              //向后端提交数据
              this.addEmployee()
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
        addEmployee(){
          //console.log("editForm:",this.editForm)
          this.$axios
            .post('/emp/add',{
              id: this.editForm.id,
              name: this.editForm.name,
              department: this.editForm.department,
              gander: this.editForm.gander,
              email: this.editForm.email,
              birthday: this.editForm.birthday,
              salary: this.editForm.salary,
            })
            .then(successResponse => {
              console.log(successResponse.data)
              if (successResponse.data.code === 100) {
                //添加成功！
                this.$alert('添加成功！');
                this.$router.replace({path: '/employeeList'})
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
