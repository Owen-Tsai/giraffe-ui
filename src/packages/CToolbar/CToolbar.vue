<template>
  <div :class="[...c, ...[
    {
      'dense': dense,
      'flat': flat,
      'fixed': fixed,
    }
  ]]">
    <div class="c-toolbar-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { appendColorClass } from '../../utilities/utilities';

  export default {
    name: 'CToolbar',
    props: {
      color: String,
      dense: Boolean,
      flat: Boolean,
      fixed: Boolean
    },
    computed: {
      c() {
        let classList = Array.of('c-toolbar');
        appendColorClass(this.color, classList);
        return classList;
      }
    }
  }
</script>