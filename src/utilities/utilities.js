export const cuiDefaultColors = [
  'primary', 'success', 'warning', 'info', 'danger', 'indigo', 'teal', 'cyan', 'pink', 'yellow'
];

export function appendColorClass(color, classes) {
  if(cuiDefaultColors.includes(color)) {
    classes.push(color);
  }
}

export function appendSizeClass(size, classes, classPrefix = '') {
  if(classPrefix) {
    classPrefix = `${classPrefix}-`;
  }

  switch(size) {
    case 'large':
      classes.push(`${classPrefix}lg`);
      break;

    case 'small':
      classes.push(`${classPrefix}sm`);
      break;

    case 'mini':
      classes.push(`${classPrefix}mini`);
      break;

    default:
      break;
  }
}

export function findParentComponent(context, parentComponentName) {
  let parent = context.$parent;
  while(parent) {
    if(parent.$options.componentName === parentComponentName) {
      return true;
    } else {
      parent = parent.$parent;
    }
  }

  return false;
}

export function getParentInstance(context, parentComponentName) {
  let parent = context.$parent;
  while(parent) {
    if(parent.$options.componentName === parentComponentName) {
      return parent;
    } else {
      parent = parent.$parent;
    }
  }

  return null;
}