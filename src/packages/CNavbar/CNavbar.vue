<template>
  <div :class="[...c, ...[
    {
      'dense': dense,
      'flat': flat,
      'fixed': fixed,
    }
  ]]">
    <div class="c-navbar-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { appendColorClass } from '../../utilities/utilities';

  export default {
    name: 'CNavbar',
    componentName: 'CNavbar',
    props: {
      color: String,
      dense: Boolean,
      flat: Boolean,
      fixed: Boolean,
      paddingX: [String, Number]
    },
    computed: {
      c() {
        let classList = Array.of('c-navbar');
        appendColorClass(this.color, classList);
        return classList;
      }
    },
  }
</script>