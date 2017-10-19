<template>
<<<<<<< HEAD
  <div class="list-body" id="list-ajb">
    <!--<a href="http://wap.renrenaijia.com/aijiabao/index">-->
      <router-link tag="a"  to="/aijiabao/index">
      <div class="list-cell">
        <div class="list-cell-tit text-h2" v-on:click="greet">灵活理财 · 爱家宝</div>
        <div class="col col-8 list-cell-body">
          <div class="col-cell col-cell-3 text-indent-1em">
            <div class="text-red text-h1">6.4<span class="text-normal">%</span></div>
            <div class="text-gray text-normal-min padding-top-0_5rem">今日预期年化</div>
          </div>
          <div class="col-cell col-cell-2">
            <div class="text-h2 padding-top-0_5rem">灵活存取</div>
            <div class="text-gray padding-top-0_2_5rem line-height-1_5 text-normal-min">当日起息</div>
          </div>
          <div class="col-cell col-cell-3"><!--500,000元-->
            <div class="padding-right-1rem text-right list-set-val padding-top-0_5rem">16:00</div>
            <div class="text-gray text-normal-min padding-top-0_5rem padding-right-1rem text-right">更新时间</div>
          </div>
        </div>
      </div>
      </router-link>
    <!--</a>-->
  </div>
</template>

<script>
  /* eslint-disable quotes,space-before-function-paren,spaced-comment */

=======
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
>>>>>>> 1fc509ff47295218af30d3047917f97f116dfbcd
  export default {
    name: "listAjb",
    data: function() {
      return {
<<<<<<< HEAD
        name: 'test vue.js'
      }
    },
    // 在 `methods` 对象中定义方法
    methods: {
      greet: function (event) {
        // `this` 在方法里指当前 Vue 实例
        //alert('Hello ' + this.name + '!')
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName)
        }
      }
=======
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

>>>>>>> 1fc509ff47295218af30d3047917f97f116dfbcd
    }

  }
</script>
<<<<<<< HEAD

=======
<style lang="less">


</style>
>>>>>>> 1fc509ff47295218af30d3047917f97f116dfbcd
