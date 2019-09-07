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
        'simplified': simplified,
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
  import { appendColorClass } from '@/utilities/utilities';

  export default {
    name: 'CButton',
    props: {
      icon: String,
      size: String,
      color: {
        type: String,
        default: 'default'
      },
      outlined: Boolean,
      raised: Boolean,
      simplified: Boolean,
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

        switch (this.size) {
          case 'small':
            classList.push('btn-sm');
            break;

          case 'large':
            classList.push('btn-lg');
            break;

          case 'mini':
            classList.push('btn-mini');
            break;

          default:
            break;
        }

        appendColorClass(this.color, classList);

        return classList;
      }
    },
  }
</script>