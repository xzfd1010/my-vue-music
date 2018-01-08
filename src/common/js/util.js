function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 洗牌，打乱数组
export function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 从0到i间取一个数，把这个索引对应的arr[j]与arr[i]交换
    let j = getRandomInt(0, i)
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }
  return arr
}
