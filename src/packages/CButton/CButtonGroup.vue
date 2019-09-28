<template>
  <div class="c-btn-group">
    <slot></slot>
  </div>
</template>

<script>
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