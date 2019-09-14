<template>
  <div :class="c">
    <div class="c-toolbar-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CToolbar',
    computed: {
      c() {
        return 'c-toolbar';
      }
    }
  }
</script>