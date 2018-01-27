// 操作storage相关逻辑

import storage from 'good-storage'

const SEARCH_KEY = '__search__' // 内部key
const SERACH_MAX_LENGTH = 15 // 最大存储空间

const PLAY_KEY = '__play__'
const PLAY_MAX_LENGTH = 200

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

function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
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

export function deleteSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  deleteFromArray(searches, (item) => {
    return item === query
  })
  storage.set(SEARCH_KEY, searches)
  return searches
}

export function clearSearch() {
  storage.remove(SEARCH_KEY)
  return []
}

export function savePlay(song) {
  let songs = storage.get(PLAY_KEY, [])
  insertArry(songs, song, (item) => {
    return item.id === song.id()
  }, PLAY_MAX_LENGTH)

  storage.set(PLAY_KEY, songs)

  return songs
}

export function loadPlay() {
  return storage.get(PLAY_KEY, [])
}
