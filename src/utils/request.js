import axios from 'axios'
import { getCookie,removeCookie } from '../utils/cookies'
import store from '../store'

// create an axios instance
const service = axios.create({
  baseURL: 'http://zykx.cdwyzl.com/index.php', // api 的 base_url
  timeout: 30000 // request timeout
})

service.interceptors.request.use(
  config => {
    config.headers['Access-token'] = getCookie('token');    

    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    let status = JSON.parse(JSON.stringify(error)).response.status;
    let url = store.state.url;
 
    if(status == 403) {
      removeCookie('token')
      let uri = encodeURIComponent(url);
      window.location.href = 'http://sso.cdwyzl.com/index.php/site?uri=' + uri;
    }

    return Promise.reject({
      type: "request failed",
      payload: error
    });
  }
)

export default service