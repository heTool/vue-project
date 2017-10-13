/**
 * Created by Administrator on 2017/10/12.
 */
import axios from 'axios';

//请求列表数据
export function getHomeData() {
  return axios({
    method: 'post',
    url: '/api/member/ext/getMemberCenter',
    data: {
      "sign":""
    },
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
  });
}



