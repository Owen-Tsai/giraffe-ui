<template>
  <span :class="c">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'CTag',
    props: {
      color: String
    }
  }
</script>