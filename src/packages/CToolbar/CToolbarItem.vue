<template>
  <a
    v-if="to"
    :class="[...c, ...[
      {
        'active': active
      }
    ]]"
  >
</template>

<script>
  export default {
    name: 'CToolbarItem',
    data:() => ({
      active: false
    }),
    props: {
      to: String,
    }
  }
</script>