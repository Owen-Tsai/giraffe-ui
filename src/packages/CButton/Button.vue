<template>
  <button
    :class="[
      ...c,
      ...[
      {
        'round': round,
        'circle': circle,
        'sharp': sharp
      },
      {
        'outlined': outlined,
        'flat': flat,
        'raised': raised,
        'pure-text': pureText
      }
    ]]"
    @click="HandleClick"
  >
    <i v-if="icon" class="material-icons">{{ icon }}</i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
  import { appendColorClass, appendSizeClass, findParentComponent } from '../../utilities/utilities';

  export default {
    name: 'CButton',
    props: {
      icon: String,
      size: String,
      color: String,
      outlined: Boolean,
      raised: Boolean,
      flat: Boolean,
      pureText: Boolean,
      round: Boolean,
      circle: Boolean, 
      sharp: Boolean
    },
    methods: {
      HandleClick(evt) {
        this.$emit('click', evt);
      }
    },
    computed: {
      c() {
        let classList = Array.of('c-btn');
        
        if(this.icon) {
          classList.push('btn-icon');
        }

        appendColorClass(this.color, classList);
        appendSizeClass(this.size, classList);

        if(this._buttonGroup && !this.color) {
          appendColorClass(this._buttonGroup.color, classList);
        }

        if(this._buttonGroup) {
          if(this._buttonGroup.round) {
            classList.push('round');
          }
          if(this._buttonGroup.sharp) {
            classList.push('sharp');
          }
          if(this._buttonGroup.size) {
            appendSizeClass(this._buttonGroup.size, classList);
          }
        }

        return classList;
      },
      _buttonGroup() {
        return findParentComponent(this, 'CButtonGroup');
      }
    }
  }
</script>