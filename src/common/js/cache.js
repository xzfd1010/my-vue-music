// 操作storage相关逻辑

import storage from 'good-storage'

const SEARCH_KEY = '__search__' // 内部key
const SERACH_MAX_LENGTH = 15 // 最大存储空间

function insertArry(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare) // compare是比较函数
  if (index === 0) { // 查到的数据是第一个
    return
  }
  if (index > 0) {
    arr.splice(index, 1) // 之前的数据删掉
  }
  arr.unshift(val) // 插入数据
  if (maxLen && arr.length > maxLen) { // 删除多余数据
    arr.pop()
  }
}

export function saveSearch(query) {
  let searches = storage.get(SEARCH_KEY, []) // 默认值[]
  insertArry(searches, query, (item) => {
    return item === query
  }, SERACH_MAX_LENGTH)
  storage.set(SEARCH_KEY, searches)
  return searches
}

export function loadSearch() {
  return storage.get(SEARCH_KEY, [])
}
