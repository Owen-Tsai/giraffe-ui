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
      size: String,
      iconSet: {
        type: String,
        validator(val) {
          return ['fa', 'mdi'].includes(val)
        },
        default: 'fa'
      },
      color: String,
      size: [String, Number]
    },
    computed: {
      innerClasses() {
        let classList = Array.of('c-icon-inner');

        if(this.iconSet === 'mdi') {
          classList.push(this.iconSet);
        }

        if(this.name) {
          this.iconSet === 'fa' ?
            classList.push(`${this.name}`) : classList.push(`mdi-${this.name}`) 
        }
        if(this.helper) {
          if(typeof(this.helper) === 'string') {
            this.iconSet === 'fa' ?
              classList.push(`fa-${this.helper}`) : classList.push(`mdi-${this.helper}`) 
          } else {
            this.helper.forEach(h => {
              this.iconSet === 'fa' ?
                classList.push(`fa-${h}`) : classList.push(`mdi-${h}`) 
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