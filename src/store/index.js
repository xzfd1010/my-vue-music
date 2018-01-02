/**
 * 入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger' // 每次修改mutation，会在控制台打印logger

Vue.use(Vuex)

// 调试工具
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug, // 开启严格模式，有性能损耗，不在生产环境使用
  plugins: debug ? [createLogger()] : []
})
