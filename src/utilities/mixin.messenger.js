function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, event, ...params);
    } else {
      broadcast.apply(child, componentName, eventName, ...params);
    }
  });
}

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
      broadcast.call(this, childComponentName, event, ...params);
    }
  }
}