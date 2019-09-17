export function appendColorClass(color, classes, classPrefix = 'color') {
  if(color) {
    classes.push(`${classPrefix}-${color}`);
  }
}

export function appendSizeClass(size, classes, classPrefix = '') {
  if(classPrefix) {
    classPrefix = `${classPrefix}-`;
  }

  switch(size) {
    case 'huge':
      classes.push(`${classPrefix}huge`);
      break;

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
      return parent;
    } else {
      parent = parent.$parent;
    }
  }

  return false;
}