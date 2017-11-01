<template>
  <div class="panel margin-top-0_5rem">
    <div class="panel-head text-center ph-new-user"><span>新手福利大派送</span></div>
    <div class="panel-body padding-left-1rem padding-right-1rem padding-bottom-0_5rem">
      <div class="col col-6 ">
        <div class="col-cell text-center">
          <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/mobile/default/default_gift_01.png" width="60%">
        </div>
        <div class="col-cell col-cell-5 col col-8 border-bottom-solid padding-bottom-0_5rem">
          <div class="col-cell col-cell-6">
            <div class="">888元理财红包</div>
            <div class="text-gray padding-top-0_5rem text-normal-min">注册即送，投资定期立返</div>
          </div>

          <router-link tag="div" class="col-cell col-cell-2 padding-top-0_5rem"  to="/auth/register">
            <!--<a href="/auth/login" class="btn btn-red-border btn-corner btn-min" style="width:3.5rem;">去认证</a>-->
            <div class="btn btn-red-border btn-corner btn-min" style="width:3.5rem;">{{}}</div>
          </router-link>

        </div>
      </div>
      <div class="col col-6 padding-top-0_5rem">
        <div class="col-cell text-center">
          <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/mobile/default/default_gift_02.png" width="60%">
        </div>
        <div class="col-cell col-cell-5 col col-8 border-bottom-solid padding-bottom-0_5rem">
          <div class="col-cell col-cell-6">
            <div class="">8888元体验金</div>
            <div class="text-gray padding-top-0_5rem text-normal-min">绑定银行卡，完成实名认证</div>
          </div>

          <router-link tag="div" class="col-cell col-cell-2 padding-top-0_5rem"  to="/auth/login" >
            <!--<a href="/auth/login" class="btn btn-red-border btn-corner btn-min" style="width:3.5rem;">去认证</a>-->
            <div class="btn btn-red-border btn-corner btn-min" style="width:3.5rem;">去认证</div>
          </router-link>
        </div>
      </div>
      <div class="col col-6 padding-top-0_5rem">
        <div class="col-cell text-center">
          <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/mobile/default/default_gift_03.png" width="60%">
        </div>
        <div class="col-cell col-cell-5 col col-8  padding-bottom-0_5rem">
          <div class="col-cell col-cell-6">
            <div class="">新人专享标</div>
            <div class="text-gray padding-top-0_5rem text-normal-min">高息短标，15天享12.0%年化</div>
          </div>
          <div class="col-cell col-cell-2 padding-top-0_5rem">
            <router-link tag="div" class="col-cell"  to="/project/detail" param="9323">
              <div class="btn btn-red-border btn-corner btn-min" style="width:3.5rem;">去投资</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>
