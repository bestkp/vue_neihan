const routers = [
  {
    path: '/login',
    meta: {
      title: '登录'
    },
    component: (resolve) => require(['../views/login.vue'], resolve)
  },
  {
    path: '/register',
    meta: {
      title: '注册'
    },
    component: (resolve) => require(['../views/register.vue'], resolve)
  },
  {
    path: '/findpwd',
    meta: {
      title: '找回密码'
    },
    component: (resolve) => require(['../views/findpwd.vue'], resolve)
  },
  {
    path: '/updatepwd',
    meta: {
      title: '修改密码'
    },
    component: (resolve) => require(['../views/updatepwd.vue'], resolve)
  },
  {
    path: '/newslist',
    meta: {
      title: '新闻管理'
    },
    component: (resolve) => require(['../views/newslist.vue'], resolve)
  },
  {
    path: '/addnews',
    meta: {
      title: '添加新闻'
    },
    component: (resolve) => require(['../views/addnews.vue'], resolve)
  }
];
export default routers;
