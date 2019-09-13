export default {
  methods: {
    dispatch(parentComponentName, event, ...params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.componentName;

      while(parent && (!name || name !== parentComponentName)) {
        parent = parent.$parent;

        if(parent) {
          name = parent.$options.componentName;
        }
      }

      if(parent) {
        parent.$emit(event, ...params);
      }
    },
    broadcast(childComponentName, event, ...params) {
      this.$children.forEach(child => {
        let name = child.$options.componentName;
    
        if(name === childComponentName) {
          child.$emit(event, ...params);
        } else {
          this.broadcast(childComponentName, event, ...params);
        }
      })
    }
  }
}