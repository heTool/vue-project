<template>
	<div>
    <TopSlider></TopSlider>
    <CountData></CountData>
    <NewUserTask></NewUserTask>
    <ProdAjb></ProdAjb>
    <ProdWz></ProdWz>
    <DownBar></DownBar>
	</div>
</template>

<script>
  import {getRecommendData} from '../../api/recommendApi'
  import NewUserTask from 'components/recommend/NewUserTask'
  import TopSlider from 'components/recommend/topSlider'
  import CountData from 'components/recommend/countData'
  import ProdAjb from 'components/recommend/prodAjb'
  import ProdWz from 'components/recommend/prodWz'
  import DownBar from 'components/recommend/downBar'

  export default{
    components: {
      NewUserTask,
      TopSlider,
      CountData,
      ProdAjb,
      ProdWz,
      DownBar
    },
    data () {
      return {
        recommendObj:{}
      }
    },
    created(){
      getRecommendData().then((res)=>{
          this.recommendObj=res.data.data;
          console.log(res.data.data);
      })
    }
  }
</script>

