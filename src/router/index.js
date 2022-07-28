import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/', 
    redirect: '/layout'
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/"),
  },
  {
    redirect : '/layout/home', 
    path: "/layout",
    component: () => import("../views/Layout/"),
    children: [
      {
        path: 'home', 
        component: () => import("../views/home/")
      },
      {
        path: 'qa', 
        component: () => import("../views/qa/")
      },
      {
        path: 'video', 
        component: () => import("../views/video/")
      },
      {
        path: 'my', 
        component: () => import("../views/my/")
      }
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
