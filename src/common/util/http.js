import axios from 'axios'
const { CancelToken, isCancel } = axios
let cancel = null;

const http = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 3000,
    //headers:''
})
http.interceptors.request.use((config) => {
    if (cancel) { cancel('取消了请求~') }
    config.cancelToken = new CancelToken((c) => { cancel = c })
    return config
})
http.interceptors.response.use(
    response =>  response.data ,
    error => {
        if (isCancel(error)) {
            console.log('请取消了,原因:', error.message)
            return new Promise(() => { })
        } else {
            console.log('失败了,原因:', error)
            return new Promise(() => { })
        }
    }
)
export default http