<template>
  <div id="app">
    <div>
      <c-button size="large" icon="alarm" color="primary">按钮</c-button>
      <c-button size="large" color="primary">按钮</c-button>
      <c-button icon="alarm" color="primary">按钮</c-button>
      <c-button color="primary">按钮</c-button>
      <c-button size="small" icon="alarm" color="primary">按钮</c-button>
      <c-button size="small" color="primary">按钮</c-button>
      <c-button size="mini" icon="alarm" color="primary">按钮</c-button>
      <c-button size="mini" color="primary">按钮</c-button>
    </div>
    <div style="margin-top: 50px;">
      <c-rate v-model="num" show-text></c-rate>
      <p>{{ num }}</p>
    </div>
    
    <div>
      <c-select width="300px" :max-selection="3" v-model="select" color="info" size="small" round>
        <c-option>123</c-option>
        <c-option>456</c-option>
        <c-option value="YYY">789</c-option>
        <c-option>yly</c-option>
      </c-select>
      <p>{{ select }}</p>
    </div>
  </div>
</template>

<script>
  import pic from '../docs/.vuepress/public/hero.jpg'

  export default {
    name: 'app',
    data() {
      return {
        str: 'text',
        tagInputVal: '',
        tagInputVisible: false,
        dynamicTags: ['标签1', '标签2', '标签3', '标签4'],
        img: pic,
        cols: ['id', 'name', 'studentID', 'mark'],
        num: 0,
        select: null,
        data: [
          {
            'id': 1,
            'name': 'Owen Tsai',
            'studentID': '14',
            'mark': 100
          },
          {
            'id': 2,
            'name': 'Yue Liuyang',
            'studentID': '15',
            'mark': 100
          },
          {
            'id': 3,
            'name': 'Lin Jingya',
            'studentID': '16',
            'mark': 90
          },
          {
            'id': 4,
            'name': 'Wang Na',
            'studentID': '17',
            'mark': 80
          },
          {
            'id': 5,
            'name': 'Liu Lanlan',
            'studentID': '18',
            'mark': 70
          },
        ]
      }
    },
    methods: {
      logStatic() {
        console.log(123);
      },
      logParam(param) {
        console.log(param);
      },
      confirmInput() {
        if(this.tagInputVal !== '') {
          this.dynamicTags.push(this.tagInputVal);
        }
        this.tagInputVisible = false;
        this.tagInputVal = '';
      },
      showTagInput() {
        this.tagInputVisible = true;
        this.$nextTick(() => {
          this.$refs.tagInput.$refs.input.focus();
        });
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .dropdowns {
    margin: 20px;
  }
  .tooltips {
    margin-bottom: 200px;
    margin-left: 200px;
  }
  .toolbars {
    margin-bottom: 200px;
  }
  .tags {
    * {
      margin: 5px;
      vertical-align: middle;
    }
  }
  #app {
    padding-top: 64px;
  }
  .avatars {
    display: flex;
    align-items: center;
  }
</style>
