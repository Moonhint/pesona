import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-vue-router';

import README from './README.md';

import xLayoutTopDown from './xLayoutTopDown';
import xLoCenter from './xLoCenter';
import xLoDashboard from './xLoDashboard';
import xNavbar from './../navbars/xNavbar';
import xSidenav from './../sidenavs/xSidenav';
import xSidenavItem from './../sidenavs/xSidenavItem';
import xSidenavList from './../sidenavs/xSidenavList';
import xSidenavTitle from './../sidenavs/xSidenavTitle';
import xToolbar from './xToolbar';
import xColorPanel from './../panels/xColorPanel';
import xIcon from './../icons/xIcon';


const Page1 = {
  template: '<h1>Page 1</h1>'
};
 
const Page2 = {
  template: '<h1>Page 2</h1>'
};

const Page3 = {
  template: '<h1>Page 3</h1>'
};

storiesOf('OnDevelopment|Layout', module)
  .addDecorator(StoryRouter({}, {
    routes: [
      { path: '/', component: Page1 },
      { path: '/page2', component: Page2 },
      { path: '/page3', component: Page3 }
    ]
  }))
  .add('layout top down', () => ({
    components: { xLayoutTopDown, xNavbar },
    template: `
      <x-layout-top-down>
        <template v-slot:header>
          <x-navbar topping></x-navbar>        
        </template>
        <template v-slot:main>
          <div>this is body</div>    
        </template>
        <template v-slot:footer>
          <div>this is footer</div>
        </template>
      </x-layout-top-down>
    `,
    methods: { 
      itemClick: action('itemClick') 
    },
  }))
  .add('layout center', () => ({
    components: { xLoCenter },
    template: `
      <x-lo-center>
        <div> Centered Content Here </div>
      </x-lo-center>
    `,
    methods: { 
      itemClick: action('itemClick') 
    },
  }),{
    notes: {
      markdown: README
    }
  })
  .add('layout dashboard', () => ({
    components: { 
      xLoDashboard, xSidenav, 
      xSidenavItem, xSidenavList,
      xSidenavTitle, 
      xToolbar, xColorPanel,
      xIcon },
    data: () => {
      return {
        logoImg: 'https://place-hold.it/50x50.png'
      }
    },
    template: `
      <x-lo-dashboard>

        <x-sidenav slot="sidenav" with-search>

          <img slot="logo" :src="logoImg"></img>

          <x-sidenav-title>Main Navigation</x-sidenav-title>
          <x-sidenav-item icon='menu'> 
            <router-link to="/page3">
              To Page 3
            </router-link>
          </x-sidenav-item>
          <x-sidenav-list icon='menu' text='List Me'>
            <x-sidenav-item icon='menu'> 
              <router-link to="/">
                To Page 1
              </router-link>
            </x-sidenav-item>
            <x-sidenav-item icon='menu'> 
              <router-link to="/page2">
                To Page 2
              </router-link>
            </x-sidenav-item>
          </x-sidenav-list>
          <x-sidenav-list icon='menu' text='List Me'>
            <x-sidenav-item icon='menu'> 
              <router-link to="/">
                To Page 1
              </router-link>
            </x-sidenav-item>
            <x-sidenav-item icon='menu'> 
              <router-link to="/page2">
                To Page 2
              </router-link>
            </x-sidenav-item>
          </x-sidenav-list>

          <x-sidenav-title>Secondary Navigation</x-sidenav-title>
          <x-sidenav-item icon='menu'>
            <router-link to="/page3">
              home 2
            </router-link>
          </x-sidenav-item>
          <x-sidenav-list icon='menu' text='List Me' v-for="n in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, 16, 17, 18]">
            <x-sidenav-item icon='menu'> 
              <router-link to="/">
                To Page 1
              </router-link>
            </x-sidenav-item>
            <x-sidenav-item icon='menu'> 
              <router-link to="/page2">
                To Page 2
              </router-link>
            </x-sidenav-item>
          </x-sidenav-list>

        </x-sidenav>

        <x-toolbar slot="toolbar"></x-toolbar>

        <div slot="content">
          <router-view/>
        </div>

      </x-lo-dashboard>
    `,
    methods: { 
      itemClick: action('itemClick') 
    },
  }),{
    notes: {
      markdown: README
    }
  })

