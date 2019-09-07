<template>
  <li :class="[...c, ...[
    {
      'is-disabled': isDisabled,
      'is-divided': isDivided
    }
  ]]" @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'CDropdownItem',
    props: {
      isDisabled: Boolean,
      isDivided: Boolean,
      to: String
    },
    computed: {
      c() {
        let classList = Array.of('c-dropdown-item');
        return classList;
      }
    },
    methods: {
      handleClick() {
        let p = this.$parent.$parent.$parent;
        if(p.$options.name === 'CDropdown') {
          p.$emit('on-click', this.name);
        }
      }
    }
  }
</script>