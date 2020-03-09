# vue-blick

Super Simple State Management

## Installation

> `npm install vue-blick`

## Usage

1. Create your store

```javascript
// store/alert-store.js

import { create } from 'vue-blick'

export default create({
  message: 'Hello', // state

  get reversedMessage() { // computed fields/getters
    return this.message.split('').reverse().join('')
  },

  async setMessage(message) { // methods/actions
    // await fetch(...)
    this.message = message
  }
})
```

2. Inside any component

```vue
<template>
  <div>alert: {{ message }}</div>
  <div>reversed alert: {{ reversedMessage }}</div>
 <button @click="setMessage('World')">alert!</button>
</template>

<script>
import alertStore from './store/alert-store'

export default {
  mixins: [ alertStore.map('message', 'reversedMessage', 'setMessage') ]
}
</script>
```

### Outside of vue templates

You can also access the raw observable state through `store.state`. Maybe you want to call a method from one store to another.

### That's it!