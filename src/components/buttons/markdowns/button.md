# Button

The x-button component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.


## Usage

##### [Simple Button](/?path=/story/ondevelopment-button--button)
```html
<x-button> button </x-button>
```

##### [Button with Router](/?path=/story/ondevelopment-button--button-with-router)
```html
<div>
  <router-view/>
  <x-button :schema="'info'">
    <router-link to="/">
      to page 1
    </router-link>
  </x-button>
  <x-button :schema="'info'">
    <router-link to="/page2">
      to page 2
    </router-link>
  </x-button>
</div>
```

## Props

| Name              | Default       | Type    | Desc      |
| :---------------- | -------------:| -------:| :-------- |
| background-color  |               | string  | background color of the button in hex |
| block             | false         | boolean | (is or not) button take maximum space available |
| color             |               | string  | text color of the button in hex |
| size              | base          | string  | size of the button, in px if custom |

