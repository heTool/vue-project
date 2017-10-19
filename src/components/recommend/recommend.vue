<template>
	<div>
    <TopSlider></TopSlider>
    <CountData></CountData>
    <NewUserTask></NewUserTask>
    <ProdAjb></ProdAjb>
    <ProdWz></ProdWz>
    <div v-on:click="getIdxData">请求个数据{{posts}}</div>
    <DownBar></DownBar>
	</div>
</template>

<script>
  import DownBar from 'components/recommend/DownBar'
  import TopSlider from 'components/recommend/TopSlider'
  import CountData from 'components/recommend/CountData'
  import NewUserTask from 'components/recommend/NewUserTask'
  import ProdAjb from 'components/recommend/ProdAjb'
  import ProdWz from 'components/recommend/ProdWz'

  export default{
    components: {
      DownBar,
      TopSlider,
      CountData,
      NewUserTask,
      ProdAjb,
      ProdWz
    },
    data: function () {
      return {
        posts: []
      }
    },
    watch: {
      '$route': function () {
        var _this = this
        _this.getIdxData()
      }
    },
    methods: {
      getIdxData: function () {
        var _this = this
        return _this.$ajax.get('http://rap.renrenaijia.com/mockjsdata/11/api/aijiabao/aijiabaoIndex')
          .then(function (response) {
            _this.posts = response.data
          })
          .catch(function (error) {
            console.log(error)
            _this.fechError = error
          })
      }
    }
  }
</script>

<style>
</style>
