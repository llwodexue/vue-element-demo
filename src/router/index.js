import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "@/pages/Home/index";
import Customer from "@/pages/Customer/index";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/custom",
      name: "Custom",
      component: Customer,
    },
  ],
});

export default router;
