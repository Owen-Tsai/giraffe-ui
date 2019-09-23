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
    props: {
      color: String,
      dense: Boolean,
      flat: Boolean,
      fixed: Boolean
    },
    computed: {
      c() {
        let classList = Array.of('c-navbar');
        appendColorClass(this.color, classList);
        return classList;
      }
    }
  }
</script>