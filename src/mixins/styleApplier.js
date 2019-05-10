export default {
  methods: {
    _setCssVariables(variables){
      let self = this;
      let keys = Object.keys(variables);

      for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        self.$el.style.setProperty(key, variables[key]);
      }
    }
  },
}