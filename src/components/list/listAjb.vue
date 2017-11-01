<template>

  <router-link to="/listChildren">
    <div class="list-body">
      <a href="http://wap.renrenaijia.com/aijiabao/index">
        <div class="list-cell">
          <div class="list-cell-tit text-h2"> 灵活理财 · {{licaiList.name}}</div>
          <div class="col col-8 list-cell-body">
            <div class="col-cell col-cell-3 text-indent-1em">
              <div class="text-red text-h1">{{licaiList.yearRate}}<span class="text-normal">%</span></div>
              <div class="text-gray text-normal-min padding-top-0_5rem">今日预期年化</div>
            </div>
            <div class="col-cell col-cell-2">
              <div class="text-h2 padding-top-0_5rem">灵活存取</div>
              <div class="text-gray padding-top-0_2_5rem line-height-1_5 text-normal-min">当日起息</div>
            </div>
            <div class="col-cell col-cell-3"><!--500,000元-->
              <div class="padding-right-1rem text-right list-set-val padding-top-0_5rem">{{licaiList.value}}</div>
              <div class="text-gray text-normal-min padding-top-0_5rem padding-right-1rem text-right">更新时间</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </router-link>
</template>

<script>
  import {getListData} from '../../api/listApi'

  export default {
    name: "listAjb",
    data: function() {
      return {
        licaiList:{}
      }
    },
    created(){
          getListData().then((res)=>{
           // console.log(res);
            this.licaiList=res.data.data.aijiabao; // 这是一个对象
          })
    },
    watch: {},
    methods: {

    },
    components:{

    }

  }
</script>

