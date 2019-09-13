<template>
  <div id="app">
    <div class="scrollbar">
      <p>各种形状和样式的按钮 Buttons of different styles and shapes</p>
      <div class="btns">
        <c-button size="large" color="danger" @click="logStatic">大按钮</c-button>
        <c-button color="info">常规尺寸</c-button>
        <c-button size="small" color="warning">小按钮</c-button>
        <c-button size="mini" color="success">迷你尺寸</c-button>
        <c-button round color="primary">圆角按钮</c-button>
        <c-button round size="large" color="primary">圆角按钮</c-button>
        <c-button round size="small" color="primary">圆角按钮</c-button>
        <c-button round size="mini" color="primary">圆角按钮</c-button>
        <c-button sharp color="info">尖锐按钮</c-button>
        <c-button outlined color="success" size="large">边框按钮</c-button>
        <c-button raised color="primary">凸起按钮</c-button>
        <c-button simplified size="small" color="primary">扁平按钮</c-button>
        <c-button pure-text color="primary">纯文字</c-button>
        <c-button size="mini">无颜色</c-button>
        <c-button size="small" icon="thumb_up">带图标</c-button>
        <c-button color="primary" disabled>禁用</c-button>
        <c-button size="mini" icon="face" circle color="teal"></c-button>
        <c-button size="small" icon="face" circle color="teal"></c-button>
        <c-button icon="face" circle color="teal"></c-button>
        <c-button size="large" icon="face" circle color="teal"></c-button>
      </div>
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
      <div class="cards">
        <p>卡片可以作为基本的元素容器 Cards can be used as basic elements containers</p>
        <c-card>
          <div slot="header">
            <h4 style="margin: 0">卡片标题</h4>
          </div>
          <div>
            <p>卡片的内容可以是文字、图片、链接、按钮等元素或组件，通过匿名插槽传入。</p>
          </div>
          <div slot="footer">
            <c-button size="small" color="danger">按钮</c-button>
          </div>
        </c-card>
        <c-card color="pink">
          <div slot="header">
            <h4 style="margin: 0">带颜色的卡片</h4>
          </div>
          <div>
            <p>卡片也可以指定颜色属性。卡片上的文字将根据背景颜色的亮度自动调整为黑色或白色</p>
          </div>
          <div slot="footer">
            <c-button size="small" color="warning">按钮</c-button>
          </div>
        </c-card>
        <c-card>
          <div>
            <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" style="width: 100%; object-fit: cover">
            <p>卡片的header和footer都是可选的。这是一个只包含body的卡片</p>
          </div>
        </c-card>
        <c-card raised>
          <div>
            <p>默认情况下卡片会在鼠标指针悬浮其上时添加box-shadow。而指定了raised属性的卡片会永远保持有立体阴影效果。相反地，指定了simplified属性的卡片将永远不会有立体阴影效果</p>
          </div>
          <div slot="footer" style="text-align: right">
            <c-button size="small" color="danger">靠右侧的按钮</c-button>
          </div>
        </c-card>
      </div>
      <div class="alerts">
        <p>警告组件用来显示提示或警告 Alert components are used to display hints and alerts</p>
        <c-alert :visible="v1" color="info" icon="info" outlined description="This is a warning, please read it carefully."></c-alert>
        <c-alert :visible="v2" color="success" description="没有图标，不突出边框"></c-alert>
        <c-alert :visible="v3" close-icon="done" title="注意！" color="danger" icon="error_outline" outlined description="当警告信息包含标题时，图标会自动变大."></c-alert>
        <c-alert :visible="v1" close-text="ok">text</c-alert>
      </div>
      <div class="quote">
        <p>块级引用不是一个单独的组件，但是可以通过class属性附加基本样式 Blockquote is not a component, but can be applied with basic style using class attr</p>
        <blockquote class="blockquote">
          Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.
          <span>Steve Jobs</span>
        </blockquote>
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
        <c-tooltip placement="top-end" color="info">
          <p slot="activator">这是一段文字，上面有一个 tooltip</p>
          <span>hello, I'm a tooltip</span>
        </c-tooltip>
      </div>
      
      
<!-- 
      <div style="margin: 20px; padding: 20px; height: 300px; border: 1px solid black">
        <c-dropdown trigger="hover">
            <c-button type="info" slot="activator">下拉菜单</c-button>
            <c-dropdown-menu>
              <c-dropdown-item>option 1</c-dropdown-item>
              <c-dropdown-item>option 2</c-dropdown-item>
              <c-dropdown-item>option 3</c-dropdown-item>
            </c-dropdown-menu>
        </c-dropdown>
      </div>
      <div style="margin: 20px;">
        <c-button type="teal" outlined @click="dialog=true">打开对话框</c-button>
        <c-dialog title="just a test dialog" :visible="dialog">
          <div>
            <p>This is the body of the dialog, so I will put something into it.</p>
          </div>
          <c-button slot="footer" size="small">button</c-button>
        </c-dialog>
      </div> -->
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
      CTooltip
      // CDialog
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
  .btns {
    .c-btn {
      margin: 0 10px;
    }
  }
  .btn-group {
    .c-btn-group {
      margin: 0 10px;
    }
  }
  .cards {
    vertical-align: middle;
    align-items: center;
    justify-content: center;

    .c-card {
      display: inline-block;
      margin: 0 10px;
      width: 300px;
    }
  }
  .alerts {
    .c-alert {
      width: 500px;
      margin: 10px 0;
    }
  }
  .quote {
    blockquote {
      width: 500px;
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
  
</style>
