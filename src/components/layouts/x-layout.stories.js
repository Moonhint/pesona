import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-vue-router';

import layoutMarkdown from './markdowns/layouts.md';

import xLayout from './xLayout';
import xLoCenter from './xLoCenter';
import xLoDashboard from './xLoDashboard';
import xNavbar from './xNavbar';
import xSidenav from './xSidenav';
import xSidenavItem from './xSidenavItem';
import xSidenavList from './xSidenavList';
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
  .add('layout', () => ({
    components: { xLayout, xNavbar },
    template: `
      <es-layout>
        <template v-slot:header>
          <x-navbar></x-navbar>        
        </template>
        <template v-slot:main>
          <div>this is body</div>    
        </template>
        <template v-slot:footer>
          <div>this is footer</div>
        </template>
      </es-layout>
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
      markdown: layoutMarkdown
    }
  })
  .add('layout dashboard', () => ({
    components: { 
      xLoDashboard, xSidenav, 
      xSidenavItem, xSidenavList, 
      xToolbar, xColorPanel,
      xIcon },
    data: () => {
      return {
        logoImg: 'https://place-hold.it/200x50.png'
      }
    },
    template: `
      <x-lo-dashboard>

        <x-sidenav slot="sidenav">

          <img slot="logo" :src="logoImg"></img>

          <div>Main Navigation</div>
          <x-sidenav-item icon='menu'> 
            <router-link to="/page3">
              To Page 3
            </router-link>
          </x-sidenav-item>
          <x-sidenav-list icon='menu' text='List Me'>
            <x-sidenav-item> 
              <router-link to="/">
                To Page 1
              </router-link>
            </x-sidenav-item>
            <x-sidenav-item> 
              <router-link to="/page2">
                To Page 2
              </router-link>
            </x-sidenav-item>
          </x-sidenav-list>

          <div>Secondary Navigation</div>
          <x-sidenav-item icon='menu'> home 2 </x-sidenav-item>
          <x-sidenav-list icon='menu' text='List Me'>
            <x-sidenav-item> 
              <router-link to="/">
                To Page 1
              </router-link>
            </x-sidenav-item>
            <x-sidenav-item> 
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
      markdown: layoutMarkdown
    }
  })

