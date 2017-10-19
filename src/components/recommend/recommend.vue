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
  export default{
    data(){
      return {
        recommendObj:{}
      }
    },
    created(){
      getRecommendData().then((res)=>{
          this.recommendObj=res.data.data;
          console.log(res.data.data);
      })
    },
    components: {
      NewUserTask
    }
  }
</script>

