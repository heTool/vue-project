<template>
  <div class="body body-wz">
    <ProjPanel></ProjPanel>
    <ProjSlider></ProjSlider>
    <ProjInfo></ProjInfo>
  </div>
</template>

<script>
  import ProjPanel from 'components/project/ProjPanel'
  import ProjSlider from 'components/project/ProjSlider'
  import ProjInfo from 'components/project/ProjInfo'

  export default{
    components: {
      ProjPanel,
      ProjSlider,
      ProjInfo
    }
  }
</script>
