/**
 * Created by kdkjPC on 2018/3/1.
 */
import Vue from 'vue'
import Axios from 'axios';
var axiosConfig = Axios.create({
  // baseURL: 'http://192.168.20.112:8080/', //田涛银
  // baseURL: 'http://192.168.20.8:8080/',    //林晨旭
  baseURL: 'http://192.168.20.136:8080/', //服务器
  // baseURL: 'http://192.168.20.128:8080/', //本地
  timeout: 3000, //所有请求30s后过期
  withCredentials: true, //跨域凭证
});
export default axiosConfig;
