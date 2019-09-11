<template>
  <ul :class="['c-dropdown-menu', ...[
    {
      'constrain-length': maxWidth && maxWidth > 0
    }
  ]]">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'CDropdownMenu',
    props: {
      maxWidth: Number
    },
    mounted() {
      if(this.maxWidth && this.maxWidth > 0) {
        this.$children.forEach(child => {
          if(child.$options.componentName === 'CDropdownItem') {
            child.$el.style.maxWidth = `${this.maxWidth}px`;
          }
        });
      }
    }
  }
</script>