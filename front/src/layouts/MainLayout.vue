<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="row items-center justify-between q-pt-sm">
      <q-img width="130px" class="q-mx-sm q-my-md" src="../assets/Nova pasta/logo.png"/>
      <div>
        <q-icon
        class="q-mx-sm q-pa-sm q-icon-custom"
        name="fa fa-search"
        size="25px"
        color="black" />
         <q-icon
        class="q-mx-sm q-pa-sm q-icon-custom"
        name="fab fa-facebook-messenger"
        size="25px"
        color="black" />
      </div>
      <div class="flex flex-center full-width">
        <q-tabs class="text-teal q-mx-sm full-width" >
          <q-tab name="home" icon="fas  fa-home"/>
          <q-tab name="users" icon="fa  fa-users"/>
          <q-tab name="video" icon="ondemand_video"/>
          <q-tab name="store" icon="notifications"/>
          <q-icon name="fas fa-bars" size="30px" class="q-mr-md q-icon-color"/>
        </q-tabs>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  export default{
    name:"MainLayout",
    data() {
      return {
        tab: "home",
      }
    },
  }
</script>
<style lang="scss" scoped>
  .q-icon-custom{
    background-color: #f2f3f7;
    border-radius: 50%;
  }
  .q-tabs__content{
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .q-tab__icon{
    font-size: 28px;
  }
  .q-tab{
    padding: 5px;
  }

  .q-tab--active{
    color: #1678f3;
  }
  .q-tab--inactive{
    color: #656668;
  }
</style>
