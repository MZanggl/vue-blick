const Vue = require("vue");

function create(object) {
  const state = Vue.observable(object);

  return {
    state,
    pick(keys) {
      const mapped = {};
      for (const key of keys) {
        const isFn = typeof state[key] === "function";
        mapped[key] = isFn ? state[key].bind(state) : () => state[key];
      }
      return mapped;
    }
  };
}

module.exports = {
  create,
}
