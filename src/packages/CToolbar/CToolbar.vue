<template>
  <div :class="[...c]">
    <ul class="c-toolbar-list">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CToolbar',

  }
</script>