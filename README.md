# vue-not-visible

Vue directive for removing from dom (like v-if) element on screen smaller then breakpoints;

[![NPM](https://nodei.co/npm/vue-not-visible.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-not-visible/)

# Install

## Install

```bash
$ npm install --save vue-not-visible
```

```bash
$ yarn add vue-not-visible
```


## Use default

```js
import Vue from 'vue'
import vueNotVisible from 'vue-not-visible'

/* const BREAKPOINTS = {
    mobile: 425,
    tablet: 768,
    tablet_landscape: 1024,
    desktop: 1200,
    desktop_large: 1440,
    hd: 1920,
}
*/
Vue.use(vueNotVisible) // this is default

```

```html
<template>
  <div id="test">
        {{ message }} {{ count }}
        <div v-not-visible="'tablet'"> 
            <div v-on:click="count = count + 1">Not visible on table(screen < 768)</div>
        </div>
        <div v-not-visible="'mobile'">
            <div v-on:click="count = count + 1">Not visible on mobile(screen < 425)</div>
        </div>
    </div>
</template>
```

## Use custom breakpoints

```js
import Vue from 'vue'
import vueNotVisible from 'vue-not-visible'

Vue.use(vueNotVisible, {ipad: 1280}) // this is custom

```

```html
<template>
  <div id="test">
        {{ message }} {{ count }}
        <div v-not-visible="'ipad'"> 
            <div v-on:click="count = count + 1">Not visible on ipad(screen < 1280)</div>
        </div>
    </div>
</template>
```

## License
[MIT License](https://github.com/PxyUp/vue-not-visible/blob/master/LICENSE)