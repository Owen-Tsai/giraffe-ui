<template>
  <div id="app">
    <div class="dropdowns">
      <c-dropdown trigger="click" placement="bottom" @click:item="logParam" @click:outside="logStatic">
        <c-button slot="activator">下拉菜单</c-button>
        <c-dropdown-menu :max-width="100">
          <c-dropdown-item icon="fas fa-camera">第一个选项</c-dropdown-item>
          <c-dropdown-item>第二个选项</c-dropdown-item>
          <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
        </c-dropdown-menu>
      </c-dropdown>
    </div>
    <div class="toolbars">
      <c-navbar color="primary" fixed>
        <c-navbar-item title to="/">Title</c-navbar-item>
        <div class="c-flex-grow"></div>
        <c-navbar-group>
          <c-navbar-item to="https://www.baidu.com">link 1</c-navbar-item>
          <c-navbar-item to="https://www.baidu.com">链接</c-navbar-item>
          <c-navbar-item>
            <c-button color="info">中文</c-button>
          </c-navbar-item>
          <c-navbar-item>
            <c-button color="info">click</c-button>
          </c-navbar-item>
          <c-navbar-item>
            <c-button circle icon="fas fa-camera" color="primary" flat></c-button>
          </c-navbar-item>
          <c-navbar-item>
            <c-dropdown trigger="click" placement="bottom-start">
              <c-button color="info" slot="activator" icon="giraffe giraffe-expand-more">下拉</c-button>
              <c-dropdown-menu :max-width="100">
                <c-dropdown-item>第一个选项</c-dropdown-item>
                <c-dropdown-item>第二个选项</c-dropdown-item>
                <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
              </c-dropdown-menu>
            </c-dropdown>
          </c-navbar-item>
        </c-navbar-group>
          <c-navbar-item>
            <c-input prefix-icon="fas fa-search" width="250"></c-input>
          </c-navbar-item>
        
      </c-navbar>
    </div>
    <div class="tags">
      <c-tag color="green" outlined v-for="tag in dynamicTags" :key="tag" @close="handleClose(tag)">
        {{ tag }}
      </c-tag>
      <c-input 
        ref="tagInput"
        size="small"
        v-model="tagInputVal"
        v-if="tagInputVisible"
        @blur="confirmInput"
        width="90px"
      ></c-input>
      <c-button v-if="!tagInputVisible" @click="showTagInput">+ Add Tag</c-button>
    </div>

    <div class="avatars">
      <c-avatar username="Owen Tsai" color="info" inline></c-avatar>
      <c-avatar username="Yue Liu Yang" color="teal" inline></c-avatar>
      <c-avatar icon="fas fa-user" color="info" inline></c-avatar>
      <c-avatar icon="fas fa-user" inline></c-avatar>
      <c-avatar initials="YLY" inline></c-avatar>
      <c-avatar :src="img" inline :size="80"></c-avatar>
    </div>
    <div class="table">
      <c-table :columns="cols" :data="data"></c-table>
    </div>
  </div>
</template>

<script>
  import pic from '../docs/.vuepress/public/hero.jpg'
  import CButton from './packages/CButton/Button'
  import CButtonGroup from './packages/CButton/ButtonGroup'
  import CCard from './packages/CCard/CCard'
  import CAlert from './packages/CAlert/CAlert'
  import CRadio from './packages/CRadio/CRadio'
  import CRadioGroup from './packages/CRadio/CRadioGroup'
  import CRadioBtn from './packages/CRadio/CRadioButton'
  import CCheckbox from './packages/CCheckbox/CCheckbox'
  import CCheckboxGroup from './packages/CCheckbox/CCheckboxGroup'
  import CCheckboxBtn from './packages/CCheckbox/CCheckboxButton'
  import CInput from './packages/CInput/CInput'
  import CTextarea from './packages/CTextarea/CTextarea'
  import CDropdownMenu from './packages/CDropdown/CDropdownMenu'
  import CDropdownItem from './packages/CDropdown/CDropdownItem'
  import CDropdown from './packages/CDropdown/CDropdown'
  import CTooltip from './packages/CTooltip/CTooltip'
  import CNavbar from './packages/CNavbar/CNavbar'
  import CNavbarGroup from './packages/CNavbar/CNavbarGroup'
  import CNavbarItem from './packages/CNavbar/CNavbarItem'
  import CIcon from './packages/CIcon/CIcon'
  import CTag from './packages/CTag/CTag'
  import CAvatar from './packages/CAvatar/CAvatar'
  import CTable from './packages/CTable/CTable'
  // import CDialog from './packages/CDialog'

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
    components: {
      CButton,
      CButtonGroup,
      CCard,
      CAlert,
      CRadio,
      CRadioGroup,
      CRadioBtn,
      CCheckbox,
      CCheckboxGroup,
      CCheckboxBtn,
      CInput,
      CTextarea,
      CDropdownItem,
      CDropdownMenu,
      CDropdown,
      CTooltip,
      CNavbarItem,
      CNavbar,
      CNavbarGroup,
      CIcon,
      CTag,
      CAvatar,
      CTable
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
