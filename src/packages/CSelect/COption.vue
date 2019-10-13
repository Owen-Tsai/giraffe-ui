<template>
  <li :class="[...c, ...[
    {
      'is-disabled': disabled,
      'is-divided': divided
    }
  ]]" @click="handleClick">
    <span class="option-content">
      <i v-if="icon" class="material-icons option-icon">{{ itemIcon }}</i>
      <span ref="cont"><slot>{{ currentLabel }}</slot></span>
    </span>
  </li>
</template>

<script>
  import Messenger from '../../utilities/mixin.messenger';
  import { findParentComponent } from '../../utilities/utilities';

  export default {
    name: 'COption',
    componentName: 'COption',
    props: {
      value: {},
      label: [String, Number],
      disabled: Boolean,
      divided: Boolean,
    },
    data: () => ({
      isSelected: false,
      itemIcon: 'check_box_outline_blank'
    }),
    mixins: [
      Messenger
    ],
    computed: {
      c() {
        let classList = Array.of('c-option');
        return classList;
      },
      currentLabel() {
        return this.label ? this.label : this.value
      },
      optionLabel() {
        return this.label || (this.$el && this.$refs.cont.textContent);
      },
      _select() {
        return findParentComponent(this, 'CSelect');
      },
      icon() {
        return this._select && this._select._props.maxSelection > 1;
      },
    },
    methods: {
      handleClick() {
        if(this.disabled) return;

        this.dispatch('CSelect', 'select:item', {
          value: this.value,
          label: this.optionLabel
        });
        this.$emit('click', {
          value: this.value,
          label: this.optionLabel
        });

        this.updateIcon();
      },
      updateIcon() {
        if(this.icon) {
          if(this._select.selected && Array.isArray(this._select.selected)) {
            for(let i = 0; i < this._select.selected.length; i++) {
              if(this._select.selected[i].label === this.optionLabel) {
                this.itemIcon = 'check_box';
                return;
              }
            }
            this.itemIcon = 'check_box_outline_blank';
          }
        }
      }
    },
    mounted() {
      this.updateIcon();
    }
  }
</script>