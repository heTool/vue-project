/**
 * Created by Administrator on 2017/10/31.
 */
import axios from 'axios'

export function getRegisterData(phoneNum,password) {
  let params=new URLSearchParams();
  params.append('mobile',phoneNum);
  params.append('password',password);
  params.append('mobileCode','888888');
  console.log(phoneNum);
  console.log(password);
 /* return axios({
    method: 'post',
    url: '/api/member/registerMember',
    params,
    headers: {
      "req-header-device":"wap",
      "req-header-device-type":"4",
      "req-header-app-version":"3.0.0",
      "req-header-push-id":"",
      "req-header-client-version":"",
      "req-header-device-id":"",
      "req-header-channel-source":"",
      "req-header-request-time":"1507864671000",
      "ip":"192.168.10.82:8080"
    },
  }).then((res)=>{
    return Promise.resolve(res);
  });*/
 return axios.post('/api/member/registerMember',params).then((res)=>{

   return Promise.resolve(res);
 });
}
