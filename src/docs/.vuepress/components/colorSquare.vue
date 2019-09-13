<template>
  <div class="c"></div>
</template>

<script>
  export default {
    name: 'Square',
    props: {
      color: String,
    },
    mounted() {
      if(this.color) {
        this.$el.style.backgroundColor = this.color;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .c {
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid black;
  }
</style>