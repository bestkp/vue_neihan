const routers = [
  {
    path: '/',
    name: 'Main',
    meta: {
      title: '主页'
    },
    component: (resolve) => require(['../components/neihan/Main.vue'], resolve),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页'
        },
        component: (resolve) => require(['../components/neihan/Home.vue'], resolve),
        children: []
      },
      {
        path: '/show',
        name: 'Show',
        meta: {
          title: '段友秀'
        },
        component: (resolve) => require(['../components/neihan/Show.vue'], resolve)
      },
      {
        path: '/find',
        name: 'Find',
        meta: {
          title: '发现'
        },
        component: (resolve) => require(['../components/neihan/Find.vue'], resolve)
      },
      {
        path: '/me',
        name: 'Me',
        meta: {
          title: '我的'
        },
        component: (resolve) => require(['../components/neihan/Me.vue'], resolve)
      }
    ]
  }
];
export default routers;
