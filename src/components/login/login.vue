<template>
  <transition name="slide">
    <div class="container-full">
      <!--header-->
      <header class="header">
        <nav class="nav">
          <div class="nav-left">
            <div class="nav-left" @click="back()"><a class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
          </div>
          <div class="nav-head">登录</div>
          <div class="nav-right nav-channel line-height-1_5">
            <router-link to="/register">
              注册
            </router-link>

          </div>        </nav>
      </header>
      <!--header-->

      <!---content-->
      <div class="body">
        <!--登录-短信验证码方式--->
        <div class="panel">
          <div class="panel-body panel-login">
            <div class="text-center padding-top-2rem "><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/mobile/comm/logo_login.png" width="50%"></div>
            <div class="form-items-border form-items-full">
              <input type="tel" placeholder="请输入你的手机号" maxlength="11" class="form-items-cell" id="mobile">
            </div>
            <div class="form-items-border">
              <input type="text" placeholder="短信验证码" maxlength="6" class="form-items-cell" id="code">
              <div class="form-items-cell pop-code pop-circle-red btn-code" onclick="getCode();">获取验证码</div>
            </div>
            <div class="bar text-right text-normal-min">收不到短信？试试<span class="text-blue" onclick="getVoiceCode();">语音验证码</span> </div>
            <div class="padding-top-1rem padding-bottom-1rem">
              <button class="btn btn-red btn-circle" onclick="login();">立即登录</button>
            </div>
            <div class="bar text-center text-gray">
              <a href="http://wap.renrenaijia.com/auth/login_pwd">账号密码登录</a>
            </div>

            <div class="text-center padding-top-2rem padding-bottom-2rem text-normal-min">
              <div class="line-height-1_5 text-gray">如未注册则自动注册且代表你同意</div>
              <div class="text-red"><a href="javascript:;" ui-dialog="service-rule" class="text-blue">《用户协议》</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
        back(){
          this.$router.back(-1);
        }
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
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translate3d(100%,0,0);

  }
</style>
