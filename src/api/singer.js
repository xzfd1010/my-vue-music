import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

// import axios from 'axios'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0
  })

  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    g_tk: 1928093487,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    singermid: singerId,
    songstatus: 1,
    order: 'listen',
    begin: '0',
    num: 100,
    cmd: 1
  })

  return jsonp(url, data, options)
}

// export function getSongVkey(songmid) {
//   const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
//   const data = Object.assign({}, commonParams, {
//     g_tk: 1898808498,
//     loginUin: 0,
//     hostUin: 0,
//     format: 'json',
//     platform: 'yqq',
//     needNewCode: 0,
//     cid: 205361747,
//     uin: 417466521,
//     songmid: songmid,
//     filename: `C400${songmid}.m4a`,
//     guid: 2909629524
//   })
//   return jsonp(url, data, options)
// }
