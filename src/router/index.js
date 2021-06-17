import Vue from 'vue'
import VueRouter from "vue-router";
import adminIndex from "../views/adminIndex";
import employeeList from "../components/employeeList";
import adminLogin from "../views/adminLogin";
import departmentList from "../components/departmentList";
import addEmployee from "../components/addEmployee";
import aliPay from "../views/aliPay";
import paymentInform from "../views/paymentInform";
import adminList from "../components/adminList";

Vue.use(VueRouter);

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path: '/',
      redirect:'/mainIndex'
    },
    {
      path: '/mainIndex',
      name: 'mainIndex',
      component: adminIndex,
      meta: {
        //未登录拦截
        requireAuth: true
      },
      children: [
        {//员工模块
          path: '/employeeList',
          name: 'employeeList',
          component: employeeList,
          meta: {
            //未登录拦截
            requireAuth: true
          }
        },
        {//添加员工
          path: '/addEmployee',
          name: 'addEmployee',
          component: addEmployee,
          meta: {
            //未登录拦截
            requireAuth: true
          }
        },
        {//部门模块
          path: '/departmentList',
          name: 'departmentList',
          component: departmentList,
          meta: {
            //未登录拦截
            requireAuth: true
          }
        },
        {
          path: '/paymentInform',
          name: 'paymentInform',
          component: paymentInform,
          meta: {
            //未登录拦截
            requireAuth: true
          }
        },
        {
          path: '/aliPay',
          name: 'aliPay',
          component: aliPay,
          meta: {
            //未登录拦截
            requireAuth: true
          }
        },
        {
          path: '/adminList',
          name: 'adminList',
          component: adminList,
          meta: {
            //未登录拦截
            requireAuth: true
          }
        },
      ]
    },
    {
      path: '/adminLogin',
      name: 'adminLogin',
      component: adminLogin,
    }
    ]
})