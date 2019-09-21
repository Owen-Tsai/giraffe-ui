import '../../src/styles/cui.scss';
import '../../src/styles/custom-colors.scss';
import '../../src/assets/cicons/iconfont.css';
import '@mdi/font/css/materialdesignicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import '../../src/styles/common/transtion.scss';
import './styles/override.scss';

import { clickOutside as directive } from '../../src/utilities/clickOutside';

import CAlert from '../../src/packages/CAlert/CAlert';
import CButton from '../../src/packages/CButton/Button';
import CButtonGroup from '../../src/packages/CButton/ButtonGroup';
import CCard from '../../src/packages/CCard/CCard';
import CRadio from '../../src/packages/CRadio/CRadio';
import CRadioGroup from '../../src/packages/CRadio/CRadioGroup';
import CRadioBtn from '../../src/packages/CRadio/CRadioButton';
import CCheckbox from '../../src/packages/CCheckbox/CCheckbox';
import CCheckboxGroup from '../../src/packages/CCheckbox/CCheckboxGroup';
import CCheckboxBtn from '../../src/packages/CCheckbox/CCheckboxButton';
import CInput from '../../src/packages/CInput/CInput';
import CTextarea from '../../src/packages/CTextarea/CTextarea';
import CIcon from '../../src/packages/CIcon/CIcon';
import CDropdownMenu from '../../src/packages/CDropdown/CDropdownMenu';
import CDropdownItem from '../../src/packages/CDropdown/CDropdownItem';
import CDropdown from '../../src/packages/CDropdown/CDropdown';
import CTooltip from '../../src/packages/CTooltip/CTooltip';
import CTag from '../../src/packages/CTag/CTag';
import CAvatar from '../../src/packages/CAvatar/CAvatar';

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.component('c-alert', CAlert);
  Vue.component('c-button', CButton);
  Vue.component('c-button-group', CButtonGroup);
  Vue.component('c-card', CCard);
  Vue.component('c-checkbox', CCheckbox);
  Vue.component('c-checkbox-button', CCheckboxBtn);
  Vue.component('c-checkbox-group', CCheckboxGroup);
  Vue.component('c-input', CInput);
  Vue.component('c-radio', CRadio);
  Vue.component('c-radio-group', CRadioGroup);
  Vue.component('c-radio-button', CRadioBtn);
  Vue.component('c-textarea', CTextarea);
  Vue.component('c-icon', CIcon);
  Vue.component('c-tooltip', CTooltip);
  Vue.component('c-dropdown', CDropdown);
  Vue.component('c-dropdown-menu', CDropdownMenu);
  Vue.component('c-dropdown-item', CDropdownItem);
  Vue.component('c-tag', CTag);
  Vue.component('c-avatar', CAvatar);
}