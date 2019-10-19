import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-vue-router';

import ReadMe from './ReadMe.md';

import xLoDashboard from './../layouts/xLoDashboard';
import xSidenav from './xSidenav';
import xSidenavItem from './xSidenavItem';
import xSidenavList from './xSidenavList';
import xSidenavTitle from './xSidenavTitle';


const Page1 = {
  template: '<h1>Page 1</h1>'
};
 
const Page2 = {
  template: '<h1>Page 2</h1>'
};

const Page3 = {
  template: '<h1>Page 3</h1>'
};

storiesOf('OnDevelopment|Sidenav', module)
  .addDecorator(StoryRouter({}, {
    routes: [
      { path: '/', component: Page1 },
      { path: '/page2', component: Page2 },
      { path: '/page3', component: Page3 }
    ]
  }))
  .add('basic sidenav', () => ({
    components: { 
      xLoDashboard, xSidenav, 
      xSidenavItem, xSidenavList,
      xSidenavTitle
    },
    template: `
      <x-sidenav>
        <x-sidenav-title>Main Navigation</x-sidenav-title>
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
      </x-sidenav>
    `,
    methods: { 
      itemClick: action('itemClick') 
    },
  }),{
    notes: {
      markdown: ReadMe
    }
  })
  .add('basic sidenav with dashboard layout', () => ({
    components: { 
      xLoDashboard, xSidenav, 
      xSidenavItem, xSidenavList,
      xSidenavTitle
    },
    template: `
      <x-lo-dashboard>

        <x-sidenav slot="sidenav">
          <x-sidenav-title>Main Navigation</x-sidenav-title>
          <x-sidenav-item icon='pets'> 
            <router-link to="/">
              To Page 1
            </router-link>
          </x-sidenav-item>
          <x-sidenav-item icon='print'> 
            <router-link to="/page2">
              To Page 2
            </router-link>
          </x-sidenav-item>
        </x-sidenav>

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
      markdown: ReadMe
    }
  })
  .add('sidenav with list', () => ({
    components: { 
      xLoDashboard, xSidenav, 
      xSidenavItem, xSidenavList,
      xSidenavTitle
    },
    template: `
      <x-lo-dashboard>

        <x-sidenav slot="sidenav">
          <x-sidenav-title>Main Navigation</x-sidenav-title>
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
          <x-sidenav-title>List Navigation</x-sidenav-title>
          <x-sidenav-list icon='menu' text='List One'>
            <x-sidenav-item icon='menu'> 
              <router-link to="/page2">
                To Page 2
              </router-link>
            </x-sidenav-item>
            <x-sidenav-item icon='menu'> 
              <router-link to="/page3">
                To Page 3
              </router-link>
            </x-sidenav-item>
          </x-sidenav-list>
        </x-sidenav>

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
      markdown: ReadMe
    }
  })
  .add('sidenav with search', () => ({
    components: { 
      xLoDashboard, xSidenav, 
      xSidenavItem, xSidenavList,
      xSidenavTitle
    },
    template: `
      <x-lo-dashboard>

        <x-sidenav slot="sidenav" with-search>
          <x-sidenav-title>Main Navigation</x-sidenav-title>
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
          <x-sidenav-list icon='menu' text='List One'>
            <x-sidenav-item icon='menu'> 
              <router-link to="/page2">
                To Page 2
              </router-link>
            </x-sidenav-item>
            <x-sidenav-item icon='menu'> 
              <router-link to="/page3">
                To Page 3
              </router-link>
            </x-sidenav-item>
          </x-sidenav-list>
        </x-sidenav>

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
      markdown: ReadMe
    }
  })

