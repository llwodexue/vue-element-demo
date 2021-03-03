import Vue from "vue";
import "./mock";

import App from "./App.vue";
import router from "./router";
import store from "./store";

/* 导入公共样式 */
import "normalize.css/normalize.css";
// import "./assets/reset.min.css";

/* 导入UI库中所有的组件和对应的样式 */
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.directive("power", {
  inserted: function(el, obj) {},
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
