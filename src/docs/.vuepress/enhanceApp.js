import '../../styles/cui.scss';
import 'material-design-icons/iconfont/material-icons.css';
import '../../styles/common/transtion.scss';
import './styles/override.scss';

import CAlert from '../../packages/CAlert/CAlert';
import CButton from '../../packages/CButton/Button';
import CButtonGroup from '../../packages/CButton/ButtonGroup';
import CCard from '../../packages/CCard/CCard';
import CRadio from '../../packages/CRadio/CRadio';
import CRadioGroup from '../../packages/CRadio/CRadioGroup';
import CRadioBtn from '../../packages/CRadio/CRadioButton';
import CCheckbox from '../../packages/CCheckbox/CCheckbox';
import CCheckboxGroup from '../../packages/CCheckbox/CCheckboxGroup';
import CCheckboxBtn from '../../packages/CCheckbox/CCheckboxButton';
import CInput from '../../packages/CInput/CInput';
import CTextarea from '../../packages/CTextarea/CTextarea';
import CDropdownMenu from '../../packages/CDropdown/CDropdownMenu';
import CDropdownItem from '../../packages/CDropdown/CDropdownItem';
import CDropdown from '../../packages/CDropdown/CDropdown';
import CTooltip from '../../packages/CTooltip/CTooltip';

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
}