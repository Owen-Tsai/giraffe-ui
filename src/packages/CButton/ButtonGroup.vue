<template>
  <div class="c-btn-group">
    <slot></slot>
  </div>
</template>

<script>
  import { cuiDefaultColors } from '../../utilities/utilities';

  export default {
    name: 'CButtonGroup',
    componentName: 'CButtonGroup',
    props: {
      color: String,
      round: Boolean,
      sharp: Boolean,
      size: String,
    }
  }
</script>