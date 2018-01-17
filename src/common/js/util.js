function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 洗牌，打乱数组
export function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    // 从0到i间取一个数，把这个索引对应的arr[j]与arr[i]交换
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

// 节流，函数柯里化——调用一个函数，返回一个函数
export function debounce(func, delay) {
  let timer

  return function (...args) { // 如果此函数反复调用，不会多次触发，只会触发一次
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
