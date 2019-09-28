<template>
  <span :class="wrapperClasses" @click="handleClick">
    <span :class="innerClasses" ref="icon"></span>
    <span class="c-icon-text">
      <slot></slot>
    </span>
  </span>
</template>

<script>
  import { appendColorClass, appendSizeClass } from '../../utilities/utilities';

  export default {
    name: 'CIcon',
    props: {
      helper: [String, Array],
      iconSet: {
        type: String,
        validator(val) {
          return ['fa', 'mdi', 'giraffe'].includes(val)
        },
        default: 'fa'
      },
      color: String,
      size: [String, Number]
    },
    computed: {
      innerClasses() {
        let classList = Array.of('c-icon-inner');

        if(this.iconSet === 'mdi' || this.iconSet === 'giraffe') {
          classList.push(this.iconSet);
        }

        if(this.name) {
          if(this.iconSet === 'fa') {
            classList.push(this.name);
          } else {
            classList.push(`${this.iconSet}-${this.name}`)
          }
        }

        if(this.helper) {
          if(typeof(this.helper) === 'string') {
            classList.push(`${this.iconSet}-${this.helper}`)
          } else {
            this.helper.forEach(h => {
              classList.push(`${this.iconSet}-${h}`)
            });
          }
        }

        return classList;
      },
      wrapperClasses() {
        let classList = Array.of('c-icon');
        appendColorClass(this.color, classList);
        appendSizeClass(this.size, classList);
        return classList;
      },
      name() {
        return this.$slots.default[0].text.trim()
      }
    },
    methods: {
      handleClick() {
        this.$emit('click');
      }
    },
    mounted() {
      if(typeof(this.size) === 'string') {
        this.$refs.icon.style.fontSize = `${this.size}`
      } else {
        this.$refs.icon.style.fontSize = `${this.size}px`
      }
    }
  }
</script>