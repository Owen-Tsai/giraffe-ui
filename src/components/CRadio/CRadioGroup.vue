<template>
  <div
    class="c-radio-group"
    @keydown="handleKeydown"
  >
    <slot></slot>
  </div>
</template>

<script>
  import { appendColorClass } from "@/utilities/utilities";

  export default {
    name: 'CRadioGroup',
    componentName: 'CRadioGroup',
    props: {
      value: {},
      btnColor: String
    },
    methods: {
      handleKeydown(ev) {
        console.log(ev)
      }
    },
    created() {
      this.$on('handleChange', value => {
        this.$emit('change', value);
      });
    },
  }
</script>