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
import index from "../components/adminList";
import addDepartment from "../components/addDepartment";
import addAdmin from "../components/addAdmin";
import frontIndex from "../views/frontIndex";
import front1 from "../components/front1";
import front2 from "../components/front2";
import front3 from "../components/front3";
Vue.use(VueRouter);

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path: '/',
      redirect:'/front1'
    },
    {
      path: '/frontIndex',
      name: 'frontIndex',
      component: frontIndex,
      meta: {
        //未登录拦截
        requireAuth: false
      },
      children: [
        {
          path: '/front1',
          name: 'front1',
          component: front1
        },
        {
          path: '/front2',
          name: 'front2',
          component: front2
        },
        {
          path: '/front3',
          name: 'front3',
          component: front3
        }
      ]
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
        {//添加部门
          path: '/addDepartment',
          name: 'addDepartment',
          component: addDepartment,
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
        {
          path: '/addAdmin',
          name: 'addAdmin',
          component: addAdmin,
          meta: {
            //未登录拦截
            requireAuth: true
          }
        },
        {
          path: '/index1',
          name: 'index',
          component: index,
          meta: {
            //未登录拦截
            requireAuth: false
          }
        },
      ]
    },
    {
      path: '/adminLogin',
      name: 'adminLogin',
      component: adminLogin,
    },
    {
      path: '/paymentInform',
      name: 'paymentInform',
      component: paymentInform,
    }
    ]
})
