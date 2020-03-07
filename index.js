const Vue = require("vue");

function create(object) {
  const state = Vue.observable(object);

  return {
    state,
    map(...keys) {
      const res = { computed: {}, methods: {} };
      keys.forEach(function mapKey(key) {
        if (typeof state[key] === "function") {
          res.methods[key] = state[key].bind(state)
        } else {
          res.computed[key] = function compute() { return state[key] }
        }
      })
      return res;
    }
  };
}

module.exports = { create }
