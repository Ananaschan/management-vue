<template>
  <div>
    <h1 style="">员工列表</h1>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="关键字搜索">
        <el-input v-model="keyword" placeholder="请输入员工姓名关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      class="el-table"
      :data="tableData"
      style="width: 90%"
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        class="el-table-column"
        type="selection"
      >
      </el-table-column>


      <el-table-column
        class="el-table-column"
        prop="id"
        label="员工id"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="name"
        label="员工名"
        sortable
      >
      </el-table-column>


      <el-table-column
        class="el-table-column"
        prop="gander"
        label="性别"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="salary"
        label="工资"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="email"
        label="邮箱"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="department.name"
        label="部门"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="birthday"
        label="生日"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="createTime"
        label="创建日期"
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
          <el-button type="primary" plain @click="showEditDialog(scope.row.id)">{{$t('m.update')}}</el-button>
          <el-popover
            placement="top"
            width="160"
            >
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" >取消</el-button>
              <el-button type="primary" size="mini" @click="deleteUser(scope.row.id)">确定</el-button>
            </div>
            <el-button slot="reference" type="danger" plain>{{$t('m.delete')}}</el-button>
          </el-popover>
        </template>

      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button type="danger"  @click="deleteMore()" :disabled="this.multipleSelection.length === 0">批量删除</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>

    <el-dialog
      title="修改员工信息"
      :visible.sync="editDialogVisible"
      width="50%"
      >
      <el-form :model="editForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="员工姓名" prop="name">
          <el-input type="text" v-model="editForm.name" autocomplete="off"></el-input>
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

        <el-form-item label="工资" prop="salary">
          <el-input v-model.number="editForm.salary"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email"></el-input>
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
      name: "userList",
      data() {
        var checkUserName = (rule, value, callback) => {
          if (value === '') {
            return callback(new Error('用户名不能为空'));
          } else {
            callback();
          }
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            callback();
          }
        };
        var telephone = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入电话'));
          } else {
            callback();
          }
        };
        var address = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入地址'));
          }  else {
            callback();
          }
        };
        return {
          tableData: [],
          editDialogVisible: false,
          editForm: {
            id:0,
            name:'',
            department:{
              id:0,
              name:''
            },
            salary:0,
            gander:0,
            email:'',

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
          departmentList: {
          },
          keyword:'',
          rules: {
            userName: [
              { validator: checkUserName, trigger: 'blur' }
            ],
            password: [
              { validator: validatePass, trigger: 'blur' }
            ],
            telephone: [
              { validator: telephone, trigger: 'blur' }
            ],
            address: [
              { validator: address, trigger: 'blur' }
            ]
          },
          multipleSelection: []
        }
      },
      mounted(){
        this.getList();
        this.getDepartmentList();
      },
      methods: {
        getList(){
          this.$axios
            .post('/emp/list')
            .then(successResponse => {
              console.log(successResponse.data)
              var data = successResponse.data
              for(var i in data){
                if (data[i].gander===0){
                  data[i].gander='女'
                }else {
                  data[i].gander='男'
                }
              }
              this.tableData = data
            })
            .catch(failResponse => {
            })
        },
        getDepartmentList(){
          this.$axios
            .post('/dep/list')
            .then(successResponse => {
              this.departmentList = successResponse.data
            })
            .catch(failResponse => {
            })
        },
        deleteUser(id){
          this.$axios
            .post('/emp/delete',this.$qs.stringify({
              id: id
            }))
            .then(successResponse => {
              console.log(successResponse.data)
              this.getList()
            })
            .catch(failResponse => {
            })
        },
        showEditDialog(id){
          this.$axios
            .post('/emp/getById',this.$qs.stringify({
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
        updateUser(){
          this.$axios
            .post('/emp/update',{
              id: this.editForm.id,
              name: this.editForm.name,
              gander: this.editForm.gander,
              department: this.editForm.department,
              salary: this.editForm.salary,
              email: this.editForm.email,
              birthday: this.editForm.birthday,
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
              this.updateUser()
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
        search(){
          this.$axios
            .post('/emp/key',{
              name:this.keyword
            })
            .then(successResponse => {
              var data = successResponse.data
              for(var i in data){
                if (data[i].gander===0){
                  data[i].gander='女'
                }else {
                  data[i].gander='男'
                }
              }
              this.tableData = data
            })
            .catch(failResponse => {
            })
        },
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        deleteMore(){
          console.log("deleteMore")
          var ids= this.multipleSelection.map(item => item.id)

          for (var i in ids) {
            console.log(ids[i])
            this.deleteUser(ids[i])
          }
         },
        handleSelectionChange(val) {
          this.multipleSelection = val;
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
