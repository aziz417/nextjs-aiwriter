import axios from 'axios'

let AXIOS = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ENV_BASE_URL,
    timeout: 10000,
    Accept: 'application/json', 
});


AXIOS.interceptors.request.use(function (config) {

    const TOKEN = localStorage.getItem('token')
   
    if (TOKEN) {
        // console.log(TOKEN);
        // instance.defaults.headers.post['Authorization'] = `Bearer ${TOKEN}`;
        // instance.defaults.headers.post['Content-Type'] = 'application/json';
        // instance.defaults.headers.post['Accept'] = "application/json";

        config.headers['Authorization'] = `Bearer ${TOKEN}`;
        
        // config.headers['Content-Type'] = 'application/json';
        // config.headers.Accept = `application/json`;
        // config.headers.Content-Type = `Bearer ${TOKEN}`;
        // config.headers.common['Accept'] = "application/json";
        // config.headers.common['Content-Type'] = "application/json";
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default AXIOS

    // const defaultOptions = {
    //   baseURL: ipUrl,
    // //   headers: {
    // //     'Content-Type': 'application/json',
    // //   },
    // };
  
    // Create instance
//     let instance = axios.create({
//         baseURL: ipUrl,
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       });
  
//     // Set the AUTH token for any request
//     instance.interceptors.request.use(function (config) {
//       const token = localStorage.getItem('token');
//       config.headers.Authorization =  token ? `Bearer ${token}` : '';
//       return config;
//     },
//     function (error) {
//         //     // Do something with request error
//             return Promise.reject(error);
//         // }
//     });
  
  
//   export default instance;