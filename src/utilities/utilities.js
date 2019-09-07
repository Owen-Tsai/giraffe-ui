const defaultColors = [
  'primary', 'success', 'warning', 'info', 'danger', 'indigo', 'teal', 'cyan', 'pink', 'yellow'
];

export function appendColorClass(type, classes) {
  if(defaultColors.includes(type)) {
    classes.push(type);
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