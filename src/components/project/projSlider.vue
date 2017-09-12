<template>
  <div class="panel border-bottom-solid">
    <!--通知-->
    <div class="border-bottom-solid text-normal-min col col-8" onclick="javascript:window.location.href=''">
      <div class="col-cell col-cell-7 padding-top-0_5rem padding-bottom-0_5rem">
        <div class="padding-left-1rem text-no-warp padding-right-1rem">
          <i class="icon iconfont icon-notice text-orange text-normal-min"></i>&nbsp;&nbsp;新用户仅限购买一次，限额5万。                    </div>
      </div>
      <div class="col-cell text-gray text-center">
        <div class="border-left-solid padding-top-0_5rem padding-bottom-0_5rem">详情</div>
      </div>
    </div>

    <div class="panel-body">
      <div class="padding-top-1rem padding-left-1rem padding-bottom-1rem text-normal-min">
        已募集<span class="text-red">273,300</span>
      </div>

      <div class="ui-slider margin-left-1rem margin-right-1rem">
        <div class="slider-bar sbr-54 sbr-least-10">
          <div class="bar-mark">54%</div>
          <!--5万-->
          <div class="bar-mark-least">最低募集额</div>
        </div>
      </div>

      <div class="margin-left-1rem margin-right-1rem margin-top-1rem padding-top-0_5rem padding-bottom-0_5rem border-top-solid text-normal-min">
        <font color="#333333">项目成立的次日开始计息</font> <i class="icon iconfont icon-help text-normal-min text-gray" ui-dialog="explain"></i>
      </div>
    </div>
  </div>
</template>
