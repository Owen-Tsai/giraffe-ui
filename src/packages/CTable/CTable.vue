<template>
  <div :class="c">
    <table class="c-table-inner">
      <thead v-if="newCols.length">
        <tr>
          <th
            v-for="(col, index) in visibleCols"
            :key="index"
            :class="{
              'current-sort': currentSortCol === col,
              'is-sortable': col.sortable
            }"
            :style="col.width === undefined ? null : `${col.width}px`"
            @click.stop="sort(col)"
          >
            

          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'CTable',
    data: () => ({

    }),
    props: {
      columns: Array,
      data: Array,
      customKey: Boolean
    },
    computed: {
      c() {
        let classList = Array.of('c-table');
        return classList;
      }
    }
  }
</script>