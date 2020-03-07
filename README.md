# vue-blick

Super Simple State Management

## Installation

> `npm install vue-blick`

## Usage

1. Create your store

```javascript
// store/user-store.js

import { create } from 'vue-blick'

export default create({
  user: { // state
    id: 1,
    plan: 'yearly'
  },

  isPro() { // computed fields/getters
    return Boolean(this.user.plan)
  },

  async changePlan(plan) { // methods/actions
    // await fetch(...)
    this.user.plan = plan
  }
})
```

2. Inside any component

```vue
<template>
 user {{ user.id }} is {{ isPro ? 'a pro user' : 'not a pro user' }}.
 <button @click="changePlan('monthly')">Change to monthly plan</button>
</template>

<script>
import userStore from './store/user-store

export default {
  computed: userStore.pick(['user', 'isPro'])
  methods: {
    ...userStore.pick(['changePlan']),
    someLocalMethod() {},
  }
}
</script>
```

### That's it!