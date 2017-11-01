<template>
  <transition name="slide">
    <div class="container-full">
      <!--header-->
      <header class="header">
        <nav class="nav">
          <div class="nav-left">
            <div class="nav-left" @click="back"><span class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></span></div>
          </div>
          <div class="nav-head">注册</div>
          <div class="nav-right nav-channel line-height-1_5"><a href="http://wap.renrenaijia.com/auth/login">登录</a></div>        </nav>
      </header>
      <!--header-->
      <!---content-->
      <div class="body">
        <!--注册--->
        <div class="panel">
          <div class="panel-body panel-login">
            <div class="text-center padding-top-2rem padding-bottom-1rem"><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/mobile/comm/logo_login.png" width="50%"></div>
            <div class="form-items-border form-items-full">
              <input type="tel" placeholder="请输入你的手机号" maxlength="11" class="form-items-cell"  v-model="form.tel">
            </div>
            <div class="form-items-border form-items-full">
              <input type="password" placeholder="登录密码(6-16位字母或数字组合)" minlength="6" maxlength="16" class="form-items-cell"  v-model="form.password">
            </div>
            <div class="form-items-border">
              <input type="text" placeholder="短信验证码" maxlength="6" class="form-items-cell"  v-model="form.code">
              <div class="form-items-cell pop-code pop-circle-red btn-code" @click="getCode();">点击获取验证码</div>
            </div>
            <div class="bar text-right text-normal-min">收不到短信？试试<span class="text-blue" onclick="getVoiceCode();">语音验证码</span> </div>
            <div class="padding-top-1rem padding-bottom-1rem">
              <button class="btn btn-red btn-circle" @click="register();">立即注册</button>
            </div>
            <div class="text-center padding-top-2rem padding-bottom-2rem text-normal-min">
              <div class="line-height-1_5 text-gray">注册即代表你同意</div>
              <div class="text-red"><a href="javascript:;" ui-dialog="service-rule" class="text-blue">《用户协议》</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import {getRegisterData} from '../../api/loginApi'
  import {des} from '../../commonjs/commonjs'
 import axios from 'axios'
  export default{
    data(){
      return{
        form:{
          tel:'',
          password:'',
          code:''
        }
      }
    },
    created(){

    },
    methods:{
      back(){
          this.$router.go(-1)
      },
      //检测手机号
      phoneCheck(val) {
        let regTel = /^[1]{1}[3,4,5,7,8]\d{9}$/;
          if(!val){
              alert('请输入手机号码')
          }else if (!regTel.test(val)) {
            alert("请输入正确的手机号");
            return false;
          } else {
            return true;
        }
      },
      passwordCheck(val){
        if (!val) {
          alert('请输入密码')
        } else if (!/^[A-Za-z0-9]+$/.test(val) || val.length < 6) {
          alert('密码只能是6位以上英文或者数字')
        } else {
          return true;
        }
      },
      getCode(){
       //DES加密
        let key='88888888';
        let desPhone=des(key,this.form.tel);
        let params=new URLSearchParams();
        params.append('mobile',desPhone);
        params.append('businessCode','register');
        if(this.phoneCheck(this.form.tel)&& this.passwordCheck(this.form.password)){
          axios.post('/api/member/sendMobileCode',params).then((res)=>{
              if(res.data.resMsg!=''){
                  alert('一分钟内只允许获取一次验证码，请稍后再试')
              }else{
                  alert('验证码已发送至您的手机')
              }
          })
        }
      },
      register(){
        if(!this.form.code){
            alert('验证码不能为空')
        }else if(this.form.code!='888888'){
            alert('请输入正确的验证码')
        }else if(this.phoneCheck(this.form.tel)&& this.passwordCheck(this.form.password)&& this.form.code==='888888'){
          let key='88888888';
          let desPhone=des(key,this.form.tel);
          let desPassword=des(key,this.form.password);
          getRegisterData(desPhone,desPassword).then((res)=>{
              this.$router.push({path:'/login'})
          })
        }
      },
    }
  }
</script>

<style lang="less">
  .container-full{
    position: fixed;
    bottom:0;
    z-index:99;
    .panel{
      padding-top:3rem;
    }
  }
  .slide-enter-active , .slide-leave-active{
    transition: all .3s ease;
  }
  .slide-enter, .slide-leave-to
    {
    transform: translate3d(100%,0,0);

  }
</style>
