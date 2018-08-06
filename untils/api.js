import axios from 'axios'                       //网络请求组件
import Qs from 'qs'                             //数据解析库(使用JSON亦可，本文未使用QS，如需要，可替换JSON为QS)
import { Message } from 'element-ui'            //element组件，本文使用message消息提示(可根据自行需要进行替换其他TOAST)
import * as api from './commonApi'               //封装axios请求组件，在特定业务场景使用里面的请求
import store from '~/store/index'

//axios网络封装请求开始


var service = axios.create({
    // process.env.NODE_ENV获取当前业务场景的环境,以使用不同的api地址.可将请求地址换为process.env.API_ROOT,API_ROOT为自定义api请求地址(请自行替换)
    //示例如下：
    baseURL: process.env.NODE_ENV === 'production' ? process.env.API_ROOT : 'https://www.w3cvip.org',
    timeout: 100000,
})
//获取登录时存储的sessionStorage
// let getToken = window.sessionStorage.getItem('token');
// //进行数据格式的转换
// let parseToken = JSON.parse(getToken);
//拦截网络请求开始
service.interceptors.request.use(config => {
    // 请求头添加token , 就给头部带上token
    if (sessionStorage.getItem('token')) {
        config.headers.Authorization = getEntity.token_type +" "+ getEntity.access_token; // 让每个请求携带token  
    }
    // 检测如果请求为post，进行转换为JSON字符串（一般情况下不需要）
    if (config.method === 'post') {
        config.data = JSON.stringify(config.data)
    }
    // 设置请求头
    // 请求头常见的有以下几种方式，可根据需要自行修改
    // ’application/json’,’application/x-www-form-urlencoded’,’multipart/form-data’
    // Axios默认为’application/json’
    config.headers = {
        'Content-Type':'application/x-www-form-urlencoded'
    }
    return config;
},error => {
    // 请求错误消息提示
    Message({
        message: error.message,
        type: "error"
    });
    return Promise.reject(error.data.error.message);
 });


//返回状态判断(添加响应拦截器)
service.interceptors.response.use(response => {
   
    return response
    // 返回数据进行消息提示
    if(!response.data){
        Message({
            message: "数据响应失败",
            type: "warning"
        });
    }
},error => {
        //获取错误信息
        const config = error.config
        //判断错误信息的url是否为刷新接口的url，process.env.API_ROOT请自行替换为请求地址，如：192.168.1.1
        if(config.url === process.env.API_ROOT +"/connect/refresh"){
            Message({
                message: '数据刷新失败，请重新登录再进行操作。',
                type: 'error',
                duration: 1.5 * 1000
            })
            //清除vuex及其sessionStorage等信息
            store.commit('remove_login_info')
            //进行路由跳转
            router.push('/login')
            return
        }
        //拦截response 返回状态码，如果为401需要重新进行token刷新，调用请求并传入参数
        if (error.response.status === 401) {
            const retryreq = new Promise((resolve, reject) => {
                api.refreshToken(store.state.usertonken.refresh_token).then((resp) => {
                    if(resp.data.code === 2000000){
                        this.loginloading = true;
                        //重新添加token到sessionStorage
                        window.sessionStorage.setItem('token',JSON.stringify(resp.data.data))
                        //用vuex重新设置基本信息
                        store.commit('add_login_info',resp.data.data)
                        this.loginloading = false;
                        //修改_retry
                        config._retry = true;
                        let getJsonStr = window.sessionStorage.getItem('token');
                        //进行数据格式的转换
                        let getEntity = JSON.parse(getJsonStr);
                        //修改原请求的token
                        config.headers.Authorization = getEntity.token_type + " " +getEntity.access_token;
                        config.baseURL = '';
                        resolve(axios(config));
                    }
                }).catch(function (error) {
                    return Promise.reject(error);
                });
            });
            return retryreq;
        }
        
        //拦截response 返回状态码，如果为400进行错误消息提示
        if (error.response.status === 400) {
            Message({
                // message:error.response.data.err_msg,
                message:'操作失败',
                type: "warning",
                duration: 1.5 * 1000
            });
        }
        //拦截response 返回状态码，如果为403进行错误消息提示
        if (error.response.status === 403) {
            Message({
                message: '暂无权限，请重新登录再进行操作。',
                type: 'error',
                duration: 1.5 * 1000
            })
            //清除vuex及其sessionStorage等信息
            store.commit('remove_login_info')
            //进行路由跳转
            this.$router.push({path:'/login'})
        }
        return Promise.reject(error);
    }
   
);
service.install = (Vue) => {
    Vue.prototype.$http = axios
}

export default service
  
  