<template>
  <div class="layout_main">
      <Header></Header>
    <el-container>
      <div class="left">
        <SideBar ></SideBar>
      </div>
      <div class="container">
        <RouterView />
      </div>
    </el-container>



  </div>
</template>
<script>
import Header from "@/components/layout/components/Header.vue";
export default {
  name: "Layout",
  components: { Header }
};
</script>

<style scoped lang="scss">
.layout_main{
  display: flex;
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  .left{
    width: 70px;

    box-shadow:0px 8px 24px rgb(0 53 133 / 10%) !important ;
    z-index: 1100;
    padding-left: 8px;
    padding-right: 8px;
    border-right: none;
  }
  .container{
    background-color: #F4F8FE;
    width: 100%;
    padding-top: 90px;
    padding-left: 30px;
  }
}
</style>