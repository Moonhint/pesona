# Sidenav

Sidenav Component can be paired with layout component

## Usage

##### [Basic Sidenav](/?path=/story/ondevelopment-sidenav--basic-sidenav)
```html
  <x-sidenav>
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
  </x-sidenav>
```

##### [Basic Sidenav](/?path=/story/ondevelopment-sidenav--basic-sidenav-with-dashboard-layout)
```html
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
    </x-sidenav>

    <div slot="content">
      <router-view/>
    </div>

  </x-lo-dashboard>
```

##### [Basic Sidenav](/?path=/story/ondevelopment-sidenav--sidenav-with-list)
```html
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
            To Page 1
          </router-link>
        </x-sidenav-item>
        <x-sidenav-item icon='menu'> 
          <router-link to="/page3">
            To Page 2
          </router-link>
        </x-sidenav-item>
      </x-sidenav-list>
    </x-sidenav>

    <div slot="content">
      <router-view/>
    </div>

  </x-lo-dashboard>
```


##### [Basic Sidenav](/?path=/story/ondevelopment-sidenav--sidenav-with-search)
```html
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
```