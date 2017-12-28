/**
 * 管理mutation
 */

import * as types from './mutation-types'

// 利用常量关联可以减少错误
const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mutations
