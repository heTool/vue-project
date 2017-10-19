<template>

	<div style="padding-bottom:3rem" >
    <div class="list-head text-black-light">
      <div class="left">定期 · 稳赚计划</div>
    </div>
    <div class="list-body">
<<<<<<< HEAD
      <!--<a href="http://wap.renrenaijia.com/project/detail?id=9646">-->

        <router-link tag="a"  to="/project/detail?id=9646">
        <div class="list-cell ">
=======

        <div class="list-cell" v-for="item in productList" :class="item.hotWordsType!=0? 'mark-hot-sell' :'' " @click="selectItem(item)">
>>>>>>> 1fc509ff47295218af30d3047917f97f116dfbcd
          <div class="list-cell-tit text-h2">
            {{item.projectName}}                      <!--returnMoney/tags-->
            <span class="pop pop-circle pop-circle-red pop-min" v-show="item.returnMoney">{{item.returnMoney}}</span>
          </div>
          <div class="col col-8 list-cell-body">
            <div class="col-cell col-cell-3 text-indent-1em">
              <div class="text-red text-h1">{{item.preyearrate}}<span class="text-normal">%</span></div>
              <div class="text-gray text-normal-min padding-top-0_5rem">年化收益</div>
            </div>
            <div class="col-cell col-cell-2">
              <div class="text-h2 padding-top-0_5rem">{{item.days}}<span class="text-normal">天</span></div>
              <div class="text-gray text-normal-min padding-top-0_2_5rem line-height-1_5">项目周期</div>
            </div>
            <div class="col-cell col-cell-3">
              <div class="padding-right-1rem text-right list-set-val padding-top-0_5rem">{{item.residueMoney}}元</div>
              <div class="text-gray text-normal-min padding-top-0_5rem padding-right-1rem text-right">剩余可投</div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        </router-link>
      <!--</a>-->
=======

    </div>
    <copy-right></copy-right>
    <div class="loading-container" v-show="!productList.length">
      <loading></loading>
>>>>>>> 1fc509ff47295218af30d3047917f97f116dfbcd
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
  //
=======
  import {getListData} from '../../api/listApi'
  import copyRight from 'components/comm/copyright'
  import Loading from 'components/loading/loading'
  export default{
    data(){

      return{
        productList:[],

      }
    },
    created(){
      setTimeout(()=>{
        getListData().then((res)=>{
          this.productList=res.data.data.listProject;
          console.log(res);
        })
      },300)
    },
    methods:{
      selectItem(item){
          this.$emit('select',item);
      }
    },
      components:{
        copyRight,
        Loading
      }
  }
>>>>>>> 1fc509ff47295218af30d3047917f97f116dfbcd

</script>

<style lang="less">
  .loading-container{

    width:100%;
    height:100%;
    position: fixed;
    left:0;
    top:0;
    z-index:998;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
