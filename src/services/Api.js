import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://tenant1.netops.com:8000'
  })
}
