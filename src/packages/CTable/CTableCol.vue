<template>
  <td
    v-if="visible"
    :class="c"
    :data-label="label"
  ></td>
</template>

<script>
  export default {
    name: 'CTableCol',
    props: {
      label: String,
      customKey: [String, Number],
      field: String,
      width: [String, Number],
      numeric: Boolean,
      centered: Boolean,
      sortable: Boolean,
      visible: {
        type: Boolean,
        default: true
      },
      customSort: Function,

      // used internally by table component
      internal: Boolean
    },
    data: () => ({
      newKey: this.customKey || this.label
    }),
    computed: {
      c() {
        let classList = Array.of('c-table-col');
        if(this.numeric && !this.centered) {
          classList.push('text-right');
        }
        if(this.centered) {
          classList.push('text-center');
        }
        return classList;
      }
    },
    methods: {
      addRefToTable() {
        if(this,internal) return;
        this.$parent.newCols.push(this);
      }
    }
  }
</script>