import ChildNavigator from './components/sliders/fitting/ChildNavigator.vue';
import FittingSlider from './components/sliders/fitting/FittingSlider.vue';

const componentCatalog = [
  ChildNavigator,
  FittingSlider,
]

const install = function (Vue) {
  for( let i = 0; i < componentCatalog.length; i++){
    Vue.component(componentCatalog[i].name, componentCatalog[i]);
  }
}

export {
  ChildNavigator,
  FittingSlider
}

export default install