import xTheme from './components/colors/xTheme.vue';
import xButton from './components/buttons/xButton.vue';
import xChildNavigator from './components/buttons/xChildNavigator.vue';
import xIcon from './components/icons/xIcon.vue';
import xColorPanel from './components/panels/xColorPanel.vue';
import xSlidingWindow from './components/sliders/xSlidingWindow.vue';
import xSlidingWindowItem from './components/sliders/xSlidingWindowItem.vue';

const componentCatalog = [
  xTheme,
  xButton,
  xChildNavigator,
  xIcon,
  xColorPanel,
  xSlidingWindow,
  xSlidingWindowItem
]

const install = function (Vue) {
  for( let i = 0; i < componentCatalog.length; i++){
    Vue.component(componentCatalog[i].name, componentCatalog[i]);
  }
}

export {
  xTheme,
  xButton,
  xChildNavigator,
  xIcon,
  xColorPanel,
  xSlidingWindow,
  xSlidingWindowItem
}

export default install