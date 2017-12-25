export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  // let newClass = el.className.split(' ')
  // newClass.push(className)
  // el.className = newClass.join(' ')
  el.classList.add(className)
}

export function hasClass(el, className) {
  // let reg = new RegExp('(^|\\s)' + className + '(\\s|$')
  // return reg.test(el.className)
  return el.classList.contains(className)
}

/**
 * val存在，set；val不存在，get
 * @param el
 * @param name
 * @param val
 * @return {string | (string | null)}
 */
export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
