import axios from 'axios';

// 添加请求拦截器
axios.interceptors.request.use((config) => {
    return config;
});

// 添加响应拦截器
axios.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        console.log('response', response);

        if (response.status === 200) {
            return response.data;
        } else {
            return {
                code: -10000,
                message: '网络异常'
            };
        }
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const http_get = (url, params = {}) => {
    return axios
        .get(url, { params })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log('axios get err======', err);
        });
};

export const http_post = (url, data = {}) => {
    return axios
        .post(url, data)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log('axios post err======', err);
        });
};
