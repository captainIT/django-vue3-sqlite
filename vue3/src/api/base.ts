import axios from 'axios'


export  const baseAxios = axios.create({
  // baseURL:process.env,
  baseURL:"",
  timeout: 2*1000,
})

/**
 * 拦截请求
 * */
baseAxios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
/**
 * 拦截响应
 * */
baseAxios.interceptors.response.use(
  response => {
    const { data, config } = response
    const { code, msg } = data
    return  Promise.resolve(data)
  },
  error => {
    const { response, message } = error
    if (error.response && error.response.data) {
      const { status, data } = response
      return Promise.reject(error)
    } else {
      return Promise.reject(error)
    }
  }
)
