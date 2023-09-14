// import { BASE_URL } from './index'
// 1.手动切换：过于依赖人为因素，容易出错
export const BASE_URL = 'http://codercba.com:9002/'
export const TIME_OUT = 10000

// 2.依赖当前的环境:development/production
// console.log(process.env.NODE_ENV)
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://codercba.com:9002/'
// } else {
//   BASE_URL = 'http://codercba.com:9003/'
// }
// export { BASE_URL }
// 3.从定义的环境变量的配置文件中，加载文件
console.log(process.env.REACT_APP_BASE_URL)
