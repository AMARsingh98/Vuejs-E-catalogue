import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import OrderPanel from './components/OrderPanel.vue'
import cards from './components/cards.vue'
import home from './components/home.vue'
import about from './components/about.vue'
import FoodItems from './components/FoodItems.vue'



Vue.use(Router)

Vue.config.productionTip = false
Vue.component('OrderPanel',OrderPanel);
Vue.component('cards',cards);
Vue.component('home',home);
Vue.component('about',about);
Vue.component('fooditems',FoodItems);




new Vue({
  render: h => h(App),
}).$mount('#app')
export default new Router({
  routes: [
      {
          path: "/invoice",
          redirect: {
              name: "home"
          }
      },
      {
          path: '/invoice.vue',
          name: 'about us',
          component: invoice
      },
      {
          path: '/src/components/OrderPanel.vue',
          name: 'OrderPanel',
          component: OrderPanel
      }
  ]
})

