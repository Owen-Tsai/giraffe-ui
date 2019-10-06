<template>
  <div
    :class="c"
    @select:item="handleItemClick"
    v-click-outside="handleClickOutside"
  >
    <!-- Activator -->
    <c-input
      class="c-select-input"
      ref="reference"
      v-model="selectedLabel"
      :size="size"
      :color="color"
      :placeholder="placeholder"
      :prefix-icon="prefixIcon"
      :round="round"
      readonly
      @click.native="handleClick"
    >
      <i :class="['material-icons', cls]" slot="suffix" :color="color">arrow_drop_down</i>
    </c-input>
    <!-- Dropdown menu and items -->
    <transition name="c-zoom-in-top">
      <c-popper
        ref="popper"
        class="c-options-list"
        placement="bottom"
        v-show="menuVisible"
        trigger="click"
      >
        <ul :class="['c-options-menu', { 'constrain-height' : maxHeight }]" ref="selectMenu">
          <slot></slot>
        </ul>
      </c-popper>
    </transition>
  </div>
</template>

<script>
  import CPopper from '../CPopper/CPopper';
  import { appendColorClass } from '../../utilities/utilities';

  export default {
    name: 'CSelect',
    componentName: 'CSelect',
    components: {
      CPopper,
    },
    data: () => ({
      menuVisible: false,
      popper: null,
      popperStatus: false,
      selected: [],
      models: []
    }),
    props: {
      color: String,
      maxSelection: {
        type: Number,
        default: 1
      },
      size: String,
      value: {},
      width: [String, Number],
      round: Boolean,
      prefixIcon: String,
      placeholder: String,
      maxHeight: [String, Number]
    },
    computed: {
      c() {
        let classList = Array.of('c-select');
        appendColorClass(this.color, classList);
        return classList;
      },
      selectedLabel() {
        if(this.selected.length === 0) return '';

        if(this.maxSelection > 1) {
          let str = this.selected.toString();
          return str;
        } else {
          return this.selected;
        }
      },
      cls() {
        return this.menuVisible ? 'up' : 'down'
      }
    },
    watch: {
      menuVisible (val) {
        this.$refs.popper.update();
        this.$emit('change:visible', val);
      },
      value(val) {
        
      }
    },
    methods: {
      handleClick() {
        this.menuVisible = !this.menuVisible;
      },
      handleClickOutside(e) {
        if (this.menuVisible) this.$emit('click:outside', e);
        this.menuVisible = false;
      },
      handleItemClick(obj) {
        let item = obj;
        if(item.value === undefined) {
          item.value = item.label;
        }
        if(this.maxSelection === 1) {
          this.selected = item.label;
          this.models = item.value;
          this.menuVisible = false;
        } else {
          if(this.selected && this.selected.includes(item.label)) {
            this.selected.splice(this.selected.indexOf(item.label), 1);
            this.models.splice(this.models.indexOf(item.value), 1);
          } else {
            if(this.selected.length >= this.maxSelection) return;
            this.selected.push(item.label);
            this.models.push(item.value);
          }
        }

        this.$emit('input', this.models);
        this.$emit('change:select', this.models);
      }
    },
    mounted() {
      if(typeof(this.width) === 'string') {
        this.$el.style.width = this.width;
        this.$refs.popper.$el.style.minWidth = this.width;
      } else if(typeof(this.width) === 'number') {
        this.$el.style.width = `${this.width}px`;
        this.$refs.popper.$el.style.minWidth = `${this.width}px`;
      }

      if(typeof(this.maxHeight) === 'string') {
        this.$refs.selectMenu.style.maxHeight = this.maxHeight;
      } else if(typeof(this.maxHeight) === 'number') {
        this.$refs.selectMenu.style.maxHeight = `${this.maxHeight}px`;
      }
    },
    created() {
      this.$on('select:item', this.handleItemClick);
    }
  }
</script>