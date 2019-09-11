<template>
  <div class="c-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  import { appendColorClass } from "../../utilities/utilities";

  export default {
    name: 'CRadioGroup',
    componentName: 'CRadioGroup',
    props: {
      value: {},
      btnColor: String,
      size: String
    },
    created() {
      this.$on('handleChange', value => {
        this.$emit('change', value);
      });
    },
  }
</script>