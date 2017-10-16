<template>
  <div>
    <header class="header header-red">
      <nav class="nav">
        <div class="nav-left nav-channel">
          <a href="javascript:goMemberIndex();"><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/mobile/comm/icon-home.png" width="28" class="nav-avatar" id="avatar"></a>
        </div>
        <div class="nav-head"></div>
        <div class="nav-right">
          <a href="javascript:goMemberMsg();">
            <i class="icon iconfont icon-information text-white text-h1"></i>
          </a>
        </div>
      </nav>
    </header>
    <div class="panel panel-red padding-bottom-1rem">
      <!--login before-->
      <div class="padding-top-1rem padding-bottom-2rem padding-2rem">
        <div class="panel-slogan"><span class="panel-slogan-txt">让金融美好生活</span></div>
        <div class="col col-5">
          <div class="col-cell col-cell-1">&nbsp;</div>
          <router-link to="/login" class="btn btn-white-border btn-circle btn-login col-cell col-cell-3" >
              立即登录
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getRecommendData} from '../../api/recommendApi'

  export default{
    data(){
      return{

      }
    },
    created(){
      getRecommendData().then((res)=>{
          console.log(res);
      })
    }
  }
</script>

