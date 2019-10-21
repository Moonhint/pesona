import xTheme from './components/themes/xTheme.vue';
import xButton from './components/buttons/xButton.vue';
import xChildNavigator from './components/buttons/xChildNavigator.vue';
import xIcon from './components/icons/xIcon.vue';
import xColorPanel from './components/panels/xColorPanel.vue';
import xSlidingWindow from './components/sliders/xSlidingWindow.vue';
import xSlidingWindowItem from './components/sliders/xSlidingWindowItem.vue';
import xLayoutTopDown from './components/layouts/xLayoutTopDown.vue';
import xLoCenter from './components/layouts/xLoCenter.vue';
import xLoDashboard from './components/layouts/xLoDashboard.vue';
import xNavbar from './components/navbars/xNavbar.vue';
import xSidenav from './components/sidenavs/xSidenav.vue';
import xSidenavItem from './components/sidenavs/xSidenavItem.vue';
import xSidenavList from './components/sidenavs/xSidenavList.vue';
import xSidenavTitle from './components/sidenavs/xSidenavTitle.vue';
import xDialog from './components/dialogs/xDialog.vue';
import xCard from './components/cards/xCard.vue';
import xTextField from './components/inputs/xTextField.vue';
import xCheckbox from './components/inputs/xCheckbox.vue';

const componentCatalog = [
  xTheme,
  xButton,
  xChildNavigator,
  xIcon,
  xColorPanel,
  xSlidingWindow,
  xSlidingWindowItem,
  xLayoutTopDown,
  xLoCenter,
  xLoDashboard,
  xNavbar,
  xSidenav,
  xSidenavItem,
  xSidenavList,
  xSidenavTitle,
  xDialog,
  xCard,
  xTextField,
  xCheckbox
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
  xSlidingWindowItem,
  xLoCenter,
  xLoDashboard,
  xNavbar,
  xSidenav,
  xSidenavItem,
  xSidenavList,
  xSidenavTitle
}

export default install