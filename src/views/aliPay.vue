<template>
<div>
  <h1>生成业务订单，请添加相关内容及描述</h1>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="订单编号">
      <el-input v-model="form.outTradeNo"></el-input>
    </el-form-item>
    <el-form-item label="订单名称">
      <el-input v-model="form.subject"></el-input>
    </el-form-item>
    <el-form-item label="付款金额">
      <el-input v-model="form.totalAmount"></el-input>
    </el-form-item>
    <el-form-item label="商品描述">
      <el-input type="textarea" v-model="form.body"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="pay">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
    export default {
        name: "aliPay",
      data() {
        return {
          form: {
            outTradeNo: '',
            subject: '',
            totalAmount: '',
            body: ''
          }
        }
      },
      methods: {
        pay:function(){
          this.$axios.post('alipay',
            {out_trade_no:this.form.outTradeNo,
              subject:this.form.subject,
              total_amount:this.form.totalAmount,
              body:this.form.body
            }).then(successResponse=>{
            document.querySelector('body').innerHTML = successResponse.data;//查找到当前页面的body，将后台返回的form替换掉他的内容
            document.forms[0].submit();  //执行submit表单提交，让页面重定向，跳转到支付宝页面
          }).
          catch();
        }
      }
    }
</script>

<style scoped>

</style>
