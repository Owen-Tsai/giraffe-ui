<template>
  <div id="app">
    <div class="btn-group">
      <p>按钮组是一组类似的操作的集合 A button group can be used to group a series of similar operations</p>
      <c-button-group>
        <c-button color="primary" round>左按钮</c-button>
        <c-button color="primary" round>中间按钮</c-button>
        <c-button color="primary" round>右按钮</c-button>
      </c-button-group>
      <c-button-group>
        <c-button color="info" size="small" icon="play_arrow">播放</c-button>
        <c-button color="info" size="small" icon="pause">暂停</c-button>
        <c-button color="info" size="small" icon="stop">停止</c-button>
      </c-button-group>
    </div>
    <div class="radios">
      <p>单选框</p>
      <c-radio @change="logParam" label="男性" v-model="radio" color="info"></c-radio>
      <c-radio label="保密" v-model="radio" disabled></c-radio>
      <c-radio label="double" v-model="radio" color="primary">双性</c-radio>
      <c-radio label="女性" v-model="radio"></c-radio>
      <p>selected is {{ radio }}</p>
      <p>单选框组</p>
      <c-radio-group v-model="radioGroup">
        <c-radio label="男性" color="info"></c-radio>
        <c-radio label="保密" disabled></c-radio>
        <c-radio label="double" color="primary">双性</c-radio>
        <c-radio label="女性"></c-radio>
        <p>selected is {{ radioGroup }}</p>
      </c-radio-group>
      <p>按钮形状的单选框组</p>
      <c-radio-group v-model="radioGroup" btn-color="primary" size="small">
        <c-radio-btn label="男性" color="info"></c-radio-btn>
        <c-radio-btn label="保密" disabled></c-radio-btn>
        <c-radio-btn label="double" color="primary">双性</c-radio-btn>
        <c-radio-btn label="女性"></c-radio-btn>
      </c-radio-group>
      <p>selected is {{ radioGroup }}</p>
    </div>
    <div class="checkboxes">
      <p>复选框</p>
      <c-checkbox label="男性" v-model="e" color="info"></c-checkbox>
      <c-checkbox label="保密" v-model="e" color="primary" disabled></c-checkbox>
      <c-checkbox label="double" v-model="e">双性</c-checkbox>
      <c-checkbox label="女性" v-model="e"></c-checkbox>
      <p>selected is {{e}}</p>
      <p>复选框组</p>
      <c-checkbox-group v-model="checkboxGroup">
        <c-checkbox label="男性" color="info"></c-checkbox>
        <c-checkbox label="保密" color="primary" disabled></c-checkbox>
        <c-checkbox label="double">双性</c-checkbox>
        <c-checkbox label="女性"></c-checkbox>
      </c-checkbox-group>
      <p>selected is {{checkboxGroup}}</p>
      <p>按钮样式的复选框组</p>
      <c-checkbox-group v-model="checkboxGroup" btn-color="warning">
        <c-checkbox-btn label="男性" color="info"></c-checkbox-btn>
        <c-checkbox-btn label="保密" disabled></c-checkbox-btn>
        <c-checkbox-btn label="double" color="primary">双性</c-checkbox-btn>
        <c-checkbox-btn label="女性"></c-checkbox-btn>
      </c-checkbox-group>
      <p>selected is {{checkboxGroup}}</p>
    </div>
    <div class="inputs">
      <c-input v-model="str" disabled width="200" type="text" placeholder="normal input box"></c-input>
      <c-input v-model="str" width="200" type="number" color="danger" prefix-icon="face"></c-input>
      <c-input v-model="str" width="200" suffix-icon="face"></c-input>
      <br>
      <c-input v-model="str" width="200" color="primary" hint="show something what if it's too long"></c-input>
      <c-input v-model="str" width="300" color="info" round>
        <span slot="hint">using named slot is so cool!</span>
      </c-input>
      <br>
      <c-input v-model="str" width="200" color="success" prepend-caption="http://"></c-input>
      <c-input v-model="str" width="200" group-clickable>
        <div slot="append">Go!</div>
      </c-input>
      <br>
      <c-input v-model="str" readonly width="200" type="text" simplified placeholder="normal input box"></c-input>
      <c-input v-model="str" width="200" color="danger" round prefix-icon="face"></c-input>
      <c-input v-model="str" disabled width="200" type="password" simplified suffix-icon="face"></c-input>
      <br>
      <c-input v-model="str" suffix-icon="clear" show-icon-on-focus="suffix" size="large" width="250"></c-input>
      <c-input v-model="str" prefix-icon="face" show-icon-on-focus="prefix" size="small" width="250"></c-input>
      <c-input v-model="str" prefix-icon="face" size="mini" width="250"></c-input>
      <c-input v-model="str" prefix-icon="face" width="250"></c-input>
      <br>
    </div>
    <div class="textareas">
      <c-textarea v-model="str" rows="1" color="danger"></c-textarea>
      <c-textarea v-model="str" :rows="2"></c-textarea>
      <c-textarea v-model="str" disabled :rows="3" color="primary"></c-textarea>
      <br>
      <c-textarea v-model="str" :min-rows="4" no-resize placeholder="this is a placeholder"></c-textarea>
      <c-textarea v-model="str" readonly no-resize color="cyan"></c-textarea>
      <c-textarea v-model="str" :min-rows="2" no-resize></c-textarea>
    </div>
    <div class="dropdowns">
      <c-dropdown trigger="click" placement="bottom-start">
        <c-button slot="activator">下拉菜单</c-button>
        <c-dropdown-menu :max-width="100">
          <c-dropdown-item>第一个选项</c-dropdown-item>
          <c-dropdown-item>第二个选项</c-dropdown-item>
          <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
        </c-dropdown-menu>
      </c-dropdown>
    </div>
    <div class="tooltips">
      <c-tooltip placement="top-end" color="info" :max-width="70">
        <p slot="activator">这是一段文字，上面有一个 tooltip</p>
        <span>hello, I'm a tooltip</span>
      </c-tooltip>
    </div>
    <div class="toolbars">
      <c-toolbar>
        <c-toolbar-item title to="/">Title</c-toolbar-item>
        
          <c-toolbar-item to="https://www.baidu.com">link 2</c-toolbar-item>
          <c-toolbar-item>link 3</c-toolbar-item>
          <c-toolbar-item>
            <c-dropdown trigger="click" placement="bottom-start">
              <span slot="activator">dropdown</span>
              <c-dropdown-menu :max-width="100">
                <c-dropdown-item>第一个选项</c-dropdown-item>
                <c-dropdown-item>第二个选项</c-dropdown-item>
                <c-dropdown-item>第三个选项稍微长一点</c-dropdown-item>
              </c-dropdown-menu>
            </c-dropdown>
          </c-toolbar-item>
          
          <c-toolbar-item>
            <c-input prefix-icon="search" width="250"></c-input>
          </c-toolbar-item>
        
      </c-toolbar>
    </div>
  </div>
</template>

<script>
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
  import CToolbar from './packages/CToolbar/CToolbar'
  import CToolbarItem from './packages/CToolbar/CToolbarItem'
  // import CDialog from './packages/CDialog'

  export default {
    name: 'app',
    data() {
      return {
        v1: true,
        v2: true, 
        v3: true,
        radio: '',
        e: [],
        radioGroup: '',
        checkboxGroup: [],
        dialog: false,
        str: 'text'
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
      CToolbarItem,
      CToolbar,
    },
    methods: {
      logStatic() {
        alert(123);
      },
      logParam(param) {
        alert(param);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn-group {
    .c-btn-group {
      margin: 0 10px;
    }
  }
  .inputs {
    .c-input {
      margin-top: 10px;
      margin-right: 20px;
    }
  }
  .textareas {
    margin-bottom: 100px;
    .c-textarea {
      margin-top: 10px;
      margin-right: 20px;
      width: 300px;
    }
  }
  .dropdowns {
    margin-bottom: 20px;
  }
  .tooltips {
    margin-bottom: 200px;
    margin-left: 200px;
  }
  .toolbars {
    margin-bottom: 200px;
  }
  
</style>
