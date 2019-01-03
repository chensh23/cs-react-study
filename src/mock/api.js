import axios from "axios"

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("config", config);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log("response", response);
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    });
}

export default {
    mockData(url, params) {
        return fetch(url, params)
    }
}