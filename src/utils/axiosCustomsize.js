import axios from "axios";



const instance = axios.create({
    baseURL: 'http://localhost:8080/',
   
  });
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {

    console.log('>>> long ra ',response)

    return response && response.data ? response.data : response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
   
    console.log("Lỗi hệ thống",error.message)
    return Promise.reject(error);
  });


 export default instance
