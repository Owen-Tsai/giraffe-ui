<template>
  <div class="c-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'CCheckboxGroup',
    componentName: 'CCheckboxGroup',
    props: {
      value: {},
      btnColor: String,
      size: String
    },
  }
</script>