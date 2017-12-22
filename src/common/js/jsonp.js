import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  // url拼接
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  // 把原有的callback形式转为promise形式
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = ''
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : '' // 去掉第一个'&'
}
