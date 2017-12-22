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
