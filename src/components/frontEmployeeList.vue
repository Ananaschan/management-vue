<template>
  <div>


    <div class="top">
      <el-carousel height="640px">
        <el-carousel-item v-for="item in imgArray" :key="item">
          <el-image
            style="width: 100%; height: 640px"
            :src="item"
            fit="fit"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="main">
      <h3>在职员工</h3>
      <div class="info">
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


          <!--      <el-table-column-->
          <!--        class="el-table-column"-->
          <!--        prop="id"-->
          <!--        label="员工id"-->
          <!--        sortable-->
          <!--      >-->
          <!--      </el-table-column>-->

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

          <!--      <el-table-column-->
          <!--        class="el-table-column"-->
          <!--        prop="salary"-->
          <!--        label="工资"-->
          <!--        sortable-->
          <!--      >-->
          <!--      </el-table-column>-->

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

          <!--      <el-table-column-->
          <!--        class="el-table-column"-->
          <!--        prop="createTime"-->
          <!--        label="创建日期"-->
          <!--        sortable-->
          <!--      >-->
          <!--      </el-table-column>-->

          <!--      <el-table-column-->
          <!--        class="el-table-column"-->
          <!--        prop=""-->
          <!--        label="操作"-->
          <!--        sortable-->
          <!--      >-->

          <!--        <template slot-scope="scope">-->
          <!--          <el-button type="primary" plain @click="showEditDialog(scope.row.id)">{{$t('m.update')}}</el-button>-->
          <!--          <el-popover-->
          <!--            placement="top"-->
          <!--            width="160"-->
          <!--          >-->
          <!--            <p>确定删除吗？</p>-->
          <!--            <div style="text-align: right; margin: 0">-->
          <!--              <el-button size="mini" type="text" >取消</el-button>-->
          <!--              <el-button type="primary" size="mini" @click="deleteUser(scope.row.id)">确定</el-button>-->
          <!--            </div>-->
          <!--            <el-button slot="reference" type="danger" plain>{{$t('m.delete')}}</el-button>-->
          <!--          </el-popover>-->
          <!--        </template>-->

          <!--      </el-table-column>-->
        </el-table>

        <div class="page">

          <el-pagination
            background
            @current-change="currentChange"
            @size-change="sizeChange"
            layout="prev, pager, next"
            :total="total"
          >
          </el-pagination>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "front-employeeList",
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
          multipleSelection: [],
          total:0,
          page:1,
          size:10,

          imgArray: [
            require('../assets/img/fromt3/img1.jpg'),
            require('../assets/img/fromt3/img2.jpg'),
            require('../assets/img/fromt3/img3.jpg'),
          ],
          pic1:require('../assets/img/fromt2/info1.jpg'),
          pic2:require('../assets/img/fromt2/info2.jpg'),
          pic3:require('../assets/img/fromt2/info3.jpg'),
          pic4:require('../assets/img/fromt2/info4.jpg'),
          pic5:require('../assets/img/fromt2/info5.jpg'),
          pic6:require('../assets/img/fromt2/info6.jpg'),
          pic7:require('../assets/img/fromt2/info1.jpg'),

        }
      },
      mounted(){
        this.getList();
        this.getDepartmentList();
      },
      methods: {
        getList(){
          this.$axios
            .post('/emp/list?page='+this.page+'&size='+this.size)
            .then(successResponse => {
              console.log(successResponse.data.map.data.data)
              var data = successResponse.data.map.data.data

              this.total=successResponse.data.map.data.total;
              //console.log("total"+this.data.map.total)
              for(var i in data){
                if (data[i].gander===0){
                  data[i].gander='女'
                }else {
                  data[i].gander='男'
                }
              }
              //console.log("转换后"+data)
              this.tableData = data
            })
            .catch(failResponse => {
              this.$message.error(failResponse.data.message);
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
          this.$axios({
            method: 'delete',
            url: '/emp/delete/'+id,
          }).then(successResponse => {
            console.log(successResponse.data)
            //当前页为空时 返回上一页
            const totalPage = Math.ceil((this.total - 1) / this.size) // 总页数
            this.page = this.page > totalPage ? totalPage : this.page
            this.page = this.page < 1 ? 1 : this.page

            this.getList()
            this.$message({
              message: successResponse.data.message,
              type: 'success'
            });
          }).catch(failResponse => {
            this.$message.error(failResponse.data.message);
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
          var idList= this.multipleSelection.map(item => item.id)
          var ids = []
          for (var i = 0; i < idList.length; i++) {
            ids.push(idList[i])
          }
          console.log(ids)
          this.$axios
            .post('/emp/deleteAll?ids='+ids
            )
            .then(successResponse => {
              console.log(successResponse.data)
              //当前页为空时 返回上一页
              const totalPage = Math.ceil((this.total - 1) / this.size) // 总页数
              this.page = this.page > totalPage ? totalPage : this.page
              this.page = this.page < 1 ? 1 : this.page

              this.getList()
              this.$message({
                message: successResponse.data.message,
                type: 'success'
              });
            })
            .catch(failResponse => {
              this.$message.error(failResponse.data.message);
            })
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        sizeChange(pageSize){
          console.log('pageSize:'+pageSize)
          this.size=pageSize;
          this.getList();
        },
        currentChange(currentPage){
          console.log('currentPage:'+currentPage)
          this.page=currentPage;
          this.getList();
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

  .delAll{
    float: right;
    padding-right: 200px;
  }

  .el-pagination{
    margin-top: 20px;
  }
  .el-input{
    width: 80%;
  }
  .el-date-picker{
    width: 80%;
  }
  .el-select{
    width: 80%;
  }
  .main{
    width: 90%;
    margin: auto;
  }

  .main > h3{
    text-align: center;
    font-size: 35px;
  }

  .card{
    float: left;
    width: 33.3%;
    margin-bottom: 20px;
  }
  .text {
    font-size: 26px;
    text-align: center;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
  }

  .page{
    width: 100%;
    height: 50px;
    margin: auto;
    text-align: center;
  }
</style>
