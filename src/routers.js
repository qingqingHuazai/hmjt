export default [
  {
    path: '',
    component: resolve => require(['./page/home/index.vue'], resolve),
  }
  ,
  {
    path: "/highway", name: "highway",
    component: resolve => require(['./page/highway/highway.vue'], resolve)
  }
  ,
  {
    path: "/bus", name: "bus",
    component: resolve => require(['./page/bus/bus.vue'], resolve)
  }
  ,
  {
    path: "/transport", name: "transport",
    component: resolve => require(['./page/transport/transport.vue'], resolve)
  }
  ,
  {
    path: "/aboutus", name: "aboutus",
    component: resolve => require(['./page/aboutus/aboutus.vue'], resolve)
  }
  ,
  {
    path: "/notice", name: "notice",
    component: resolve => require(['./page/notice/notice.vue'], resolve),
  },
  {
    path: "/notice/detail/:id", name: "detail",
    component: resolve => require(['./page/notice/child/detail.vue'], resolve),
  },
  {
    path: "/bicycle", name: "bicycle",
    component: resolve => require(['./page/bicycle/bicycle.vue'], resolve),
  },
  {
    path: "/traffic", name: "traffic",
    component: resolve => require(['./page/traffic/traffic.vue'], resolve),
  },
  {
    path: "/tong", name: "tong",
    component: resolve => require(['./page/tong/tong.vue'], resolve),
  }


]
