<template>
  <div class="c-rate" :readonly="readonly">
    <span
      class="c-rate-item"
      v-for="(item, key) in max"
      :key="key"
      @mousemove="changeValue(item, $event)"
      @mouseleave="resetValue"
      @click="setValue(item)"
    >
      <i v-if="icon" class="material-icons rate-icon" :color="colors[item - 1]">
        {{ typeof(customIcon) === 'string' ? customIcon : customIcon[item - 1] }}
      </i>
      <i v-else class="material-icons rate-icon" :color="colors[item - 1]">
        {{ defaultIcon[item - 1] }}
      </i>
    </span>
    <span v-if="showText || showScore" class="c-rate-text">{{ display }}</span>
  </div>
</template>

<script>
  export default {
    name: 'CRate',
    props: {
      icon: String,
      inactiveIcon: String,
      max: {
        type: Number,
        default: 5
      },
      value: {
        type: Number,
        default: 0
      },
      showText: Boolean,
      showScore: Boolean,
      color: {
        type: String,
        default: 'warning'
      },
      text: {
        type: Array,
        default: () => Array.of('不满', '失望', '中等', '良好', '满意')
      },
      readonly: Boolean
    },
    data: () => ({
      currentValue: 0,
      temp: null
    }),
    computed: {
      defaultIcon() {
        let arr = new Array();
        for(let i = 0; i < this.max; i++) {
          arr[i] = i <= this.currentValue - 1 ? 'star' : 'star_border';
        }

        return arr;
      },
      customIcon() {
        let arr = new Array();
        if(this.icon && this.inactiveIcon) {
          for(let i = 0; i < this.max; i++) {
            arr[i] = i <= this.currentValue - 1 ? this.icon : this.inactiveIcon;
          }
          return arr;
        } else {
          return this.icon;
        }
      },
      colors() {
        let arr = new Array();
        for(let i = 0; i < this.max; i++) {
          arr[i] = i <= this.currentValue - 1 ? this.color : 'grey-300';
        }

        return arr;
      },
      display() {
        if(this.showText) {
          return this.text[this.currentValue - 1];
        }
        if(this.showScore) {
          return this.currentValue;
        }
      }
    },
    watch: {
      value(val) {
        this.currentValue = val;
      }
    },
    methods: {
      changeValue(item, $event) {
        if(this.readonly) return;
        this.currentValue = item;
      },
      resetValue() {
        if(this.readonly) return;
        this.currentValue = this.value;
      },
      setValue(val) {
        if(this.readonly) return;
        this.$emit('change', val);
        this.$emit('input', val);
      }
    },
    mounted() {
      this.currentValue = this.value;
    }
  }
</script>