import { Dialog, Notify } from 'vant'
import router from '@/router'
const axios = require('axios')
const { getToken, removeToken } = require('./auth')

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const instance = axios.create({
  baseURL: '/api/',
})
// request 拦截器
instance.interceptors.request.use(
  config => {
    const notRequireToken = (config.requireToken === false)
    if (getToken() && !notRequireToken) {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    console.error(error)
  },
)
// response 拦截器
instance.interceptors.response.use(
  res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200
    // 获取错误信息
    const message = res.data.msg
    if (code === 401) {
      Dialog({
        title: '系统提示',
        message: '资源请求失败，登录过期，请重新登录',
      }).then(() => {
        removeToken()
        router.push('/signIn')
      })
      return Promise.reject(message)
    } else if (code !== 200) {
      Notify({ type: 'danger', message })
      return Promise.reject(message)
    } else {
      return res.data
    }
  },
  error => {
    console.error(error)
    Notify({ type: 'danger', message: error.message })
    return Promise.reject(error)
  },
)
export default instance
