import ChildNavigator from './componentsd/sliders/fitting/ChildNavigator.vue';
import FittingSlider from './componentsd/sliders/fitting/FittingSlider.vue';

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

const componentCatalog = [
  ChildNavigator,
  FittingSlider,
]


Pesona.install = function (Vue, options) {

  for( let i = 0; i < componentCatalog.length; i++){
    Vue.component(componentCatalog.name, componentCatalog);
  }

  // // 1. add global method or property
  // Vue.myGlobalMethod = function () {
  //   // some logic ...
  // }

  // // 2. add a global asset
  // Vue.directive('my-directive', {
  //   bind (el, binding, vnode, oldVnode) {
  //     // some logic ...
  //   }
  // })

  // // 3. inject some component options
  // Vue.mixin({
  //   created: function () {
  //     // some logic ...
  //   }
  // })

  // // 4. add an instance method
  // Vue.prototype.$myMethod = function (methodOptions) {
  //   // some logic ...
  // }
}