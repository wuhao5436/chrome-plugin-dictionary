import { extend } from 'umi-request'
import { urlWrapper } from '../utils/urlWrapper'

const request  = extend({
    headers: {
        'content-type': 'application/json',
        'Accept-content': 'application/json'
    },
})


request.interceptors.request.use((url, options) => {
    return {
      url: `${urlWrapper(url)}`,
      options
    };
  });
  

export { request }