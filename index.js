const Vue = require("vue");

function create(object) {
  const state = Vue.observable(object);

  return {
    state,
    map(keys) {
      const res = {};
      keys.forEach(function mapKey(key) {
        res[key] = typeof state[key] === "function" ? state[key].bind(state) : () => state[key];
      })
      return res;
    }
  };
}

module.exports = { create }
