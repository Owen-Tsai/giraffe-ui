<template>
  <div class="c-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'CRadioGroup',
    componentName: 'CRadioGroup',
    props: {
      value: {},
      color: String,
      size: String
    },
    created() {
      this.$on('handleChange', value => {
        this.$emit('change', value);
      });
    },
  }
</script>