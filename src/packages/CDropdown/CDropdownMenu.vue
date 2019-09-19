<template>
  <ul :class="['c-dropdown-menu', ...[
    {
      'constrain-length': maxWidth,
      'constrain-height': maxHeight
    }
  ]]">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'CDropdownMenu',
    props: {
      maxWidth: [Number, String],
      maxHeight: [Number, String]
    },
    mounted() {
      if(this.maxWidth) {
        this.$children.forEach(child => {
          if(child.$options.componentName === 'CDropdownItem') {
            typeof(this.maxWidth) === 'string' ?
              child.$el.style.maxWidth = this.maxWidth :
              child.$el.style.maxWidth = `${this.maxWidth}px`;
          }
        });
      }
      
      if(this.maxHeight) {
        typeof(this.maxHeight) === 'string' ?
          this.$el.style.maxHeight = this.maxHeight :
          this.$el.style.maxHeight = `${this.maxHeight}px`;
      }
    }
  }
</script>