import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log('2')
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
