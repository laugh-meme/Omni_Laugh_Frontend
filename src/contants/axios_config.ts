import axios from 'axios';

export const baseApi = axios.create({
    baseURL: 'http://localhost:5174/',
    timeout: 1000,
});

// Add a response interceptor
baseApi.interceptors.response.use(function onFulfilled(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        console.log('RESPONSE IS SUCCESSFULL')
        console.log(response)
        return response;
  }, function onRejected(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log('AN ERROR OCCURRED')
        console.log(error)
        return Promise.reject(error);
  });