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
 return axios.post('/api/member/registerMember',params).then((res)=>{

   return Promise.resolve(res);
 });
}
