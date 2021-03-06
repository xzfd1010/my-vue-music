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

/**
 * 给样式添加前缀
 * 浏览器能力检测
 */
let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
