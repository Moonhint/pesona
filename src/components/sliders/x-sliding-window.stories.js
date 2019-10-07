import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import xSlidingWindow from './xSlidingWindow';
import xSlidingWindowItem from './xSlidingWindowItem';

storiesOf('OnDevelopment|SlidingWindow', module)
  .add('sliding-window', () => ({
    components: { xSlidingWindow },
    template: `<x-sliding-window :window-items="[
      { name: 'Mountain Landscape', item_image_url: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg'},
      { name: 'Image from Wikipedia', item_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Balaton_Hungary_Landscape.jpg/1024px-Balaton_Hungary_Landscape.jpg'},
      { name: 'Image from pixabay', item_image_url: 'https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_960_720.jpg'},
      { name: 'Wasteland', item_image_url: 'https://cdn.pixabay.com/photo/2017/03/26/12/13/countryside-2175353_960_720.jpg'},
      { name: 'Flower Again?', item_image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4D-PdFuo4_qIHQWg4502kOy-z6ApXH8B0IpGx3LxI_s0jduT'},
      { name: 'This is a very very nice landscape, is it?', item_image_url: 'http://res.publicdomainfiles.com/pdf_view/17/13504599616594.png'},
      { name: 'I know, some place', item_image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvK7mVjIkSFk-4Tu96xUrPQJKFlMt_loVFoItYy6uCRMZmamDT'},
    ]" @item-click="itemClick" :items-per-slide="2" :top-bottom-gap="'5px'" />`,
    methods: { 
      itemClick: action('itemClick') 
    },
  }))
  .add('sliding-window with slots', () => ({
    components: { xSlidingWindow, xSlidingWindowItem },
    data: () => {
      return {
        images: [
          {
            image: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg',
            name: 'some item 1'
          },
          {
            image: 'https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_960_720.jpg',
            name: 'some item 2'
          }
        ]
      }
    },
    template: `<x-sliding-window slot-mode
                  @item-click="itemClick"
                  :slot-width="'200px'"
                  :slot-height="'200px'"
                  :items-per-slide="1">
                  
                  <x-sliding-window-item v-for="(img, index) in images" :key="index" :background-image="img.image">
                    {{img.name}}
                  </x-sliding-window-item>

               </x-sliding-window>`,
    methods: {
      itemClick(){
        console.info("click")
      }
    },
  }))
  .add('auto sliding-window', () => ({
    components: { xSlidingWindow },
    template: `<x-sliding-window :window-items="[
      { name: 'Mountain Landscape', item_image_url: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg'},
      { name: 'Image from Wikipedia', item_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Balaton_Hungary_Landscape.jpg/1024px-Balaton_Hungary_Landscape.jpg'},
      { name: 'Image from pixabay', item_image_url: 'https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_960_720.jpg'},
      { name: 'Wasteland', item_image_url: 'https://cdn.pixabay.com/photo/2017/03/26/12/13/countryside-2175353_960_720.jpg'},
      { name: 'Flower Again?', item_image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4D-PdFuo4_qIHQWg4502kOy-z6ApXH8B0IpGx3LxI_s0jduT'},
      { name: 'This is a very very nice landscape, is it?', item_image_url: 'http://res.publicdomainfiles.com/pdf_view/17/13504599616594.png'},
      { name: 'I know, some place', item_image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvK7mVjIkSFk-4Tu96xUrPQJKFlMt_loVFoItYy6uCRMZmamDT'},
    ]" @item-click="itemClick" :items-per-slide="1" auto-slide :auto-slide-interval="1000" />`,
    methods: { 
      itemClick: action('itemClick') 
    },
  }))
  .add('auto sliding-window whole screen', () => ({
    components: { xSlidingWindow },
    template: `
      <div>
        <x-sliding-window
          slot-width="100vw"
          slot-height="100vh" 
          :window-items="[
            { item_image_url: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg'},
            { item_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Balaton_Hungary_Landscape.jpg/1024px-Balaton_Hungary_Landscape.jpg'},
            { item_image_url: 'https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_960_720.jpg'},
            { item_image_url: 'https://cdn.pixabay.com/photo/2017/03/26/12/13/countryside-2175353_960_720.jpg'},
            { item_image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4D-PdFuo4_qIHQWg4502kOy-z6ApXH8B0IpGx3LxI_s0jduT'},
            { item_image_url: 'http://res.publicdomainfiles.com/pdf_view/17/13504599616594.png'},
            { item_image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvK7mVjIkSFk-4Tu96xUrPQJKFlMt_loVFoItYy6uCRMZmamDT'},
          ]" 
          @item-click="itemClick" 
          :items-per-slide="1" 
          auto-slide 
          slot-gap="0"
          :auto-slide-interval="3000"
          hide-side-navigation
          embed-bottom-navigation
          global-title="Sliding window title:"
          global-subtitle="Subtitle on the next line"
        />
      </div>
    `,
    methods: { 
      itemClick: action('itemClick') 
    },
  }))

