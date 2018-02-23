/**
 * 所有状态
 */

import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

// 基础数据
const state = {
  singer: {},
  playing: false, // 控制是否播放
  fullScreen: false, // 是否全屏
  playlist: [], // 播放列表
  sequenceList: [], // 歌曲列表，作为顺序列表；顺序播放时，数据相同
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 当前播放歌曲的索引
  disc: {},
  topList: {},
  searchHistory: loadSearch(), // 获取之前的值
  playHistory: loadPlay(), // 播放历史
  favoriteList: loadFavorite()
}

export default state
