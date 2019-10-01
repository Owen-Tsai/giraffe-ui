<template>
  <div class="c-rate">
    <span
      class="c-rate-item"
      v-for="(item, key) in max"
      :key="key"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
    >
      <i v-if="icon" class="material-icons rate-icon">{{ icon }}</i>
      <i v-else class="material-icons rate-icon">star_border</i>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'CRate',
  }
</script>