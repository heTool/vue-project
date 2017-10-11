<template>
  <transition name="slide">
    <div class="container-full">
      <!--header-->
      <header class="header">
        <nav class="nav">
          <div class="nav-left">
            <div class="nav-left"><a href="http://wap.renrenaijia.com/member/index" class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
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
              <input type="tel" placeholder="请输入你的手机号" maxlength="11" class="form-items-cell" id="mobile">
            </div>
            <div class="form-items-border form-items-full">
              <input type="password" placeholder="登录密码(6-16位字母或数字组合)" minlength="6" maxlength="16" class="form-items-cell" id="pwd">
            </div>
            <div class="form-items-border">
              <input type="text" placeholder="短信验证码" maxlength="6" class="form-items-cell" id="code">
              <div class="form-items-cell pop-code pop-circle-red btn-code" onclick="getCode();">点击获取验证码</div>
            </div>
            <div class="bar text-right text-normal-min">收不到短信？试试<span class="text-blue" onclick="getVoiceCode();">语音验证码</span> </div>
            <div class="padding-top-1rem padding-bottom-1rem">
              <button class="btn btn-red btn-circle" onclick="register();">立即注册</button>
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
