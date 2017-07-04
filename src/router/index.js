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
  },
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '主页'
    },
    component: (resolve) => require(['../components/practise/Home.vue'], resolve)
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {
      title: '分类'
    },
    component: (resolve) => require(['../components/practise/Categories.vue'], resolve)
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      title: '购物车'
    },
    component: (resolve) => require(['../components/practise/Cart.vue'], resolve)
  },
  {
    path: '/me',
    name: 'Me',
    meta: {
      title: '我的'
    },
    component: (resolve) => require(['../components/practise/Me.vue'], resolve)
  },
  {
    path: '/books/:id',
    name: 'BookDetails',
    meta: {
      title: '图书详情'
    },
    component: (resolve) => require(['../components/practise/BookDetails.vue'], resolve)
  }
];
export default routers;
