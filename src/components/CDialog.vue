<template>
  <transition name="c-fade-in">
    <div
      class="c-dialog-wrapper"
      v-show="visible"
      @click.self="handleWrapperClick"
    >
      <div class="c-dialog" :style="dialogStyle">
        <div class="c-dialog-header" v-if="$slots.header || title">
          <slot name="heading">
            <span class="c-dialog-title">{{ title }}</span>
            <i class="material-icons" v-if="!hideCloseIcon" @click="handleClose">clear</i>
          </slot>
        </div>
        <div class="c-dialog-body">
          <slot></slot>
        </div>
        <div class="c-dialog-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'CDialog',
    data: () => ({
      closed: true
    }),
    props: {
      hideCloseIcon: Boolean,
      closeOnWrapperClick: Boolean,
      title: String,
      width: String | Number,
      visible: Boolean,
      beforeClose: Function,
    },
    watch: {
      visible(newValue) {
        if(newValue) {
          this.$emit('open');
        } else {
          this.$emit('close');
        }

        this.closed = !newValue;
      },
      closed(val) {
        this.$emit('input', val);
      }

    },
    computed: {

    },
    mounted() {
      this.closed = !this.visible;
    },
    methods: {
      handleClose() {
        this.closed = true;
      }
    },
  }
</script>