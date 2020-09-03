<template>
    <a-layout id="dashboard-layout">
        <SideMenu />
        <a-layout>
            <Header />
            <a-layout-content>
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
  import SideMenu from './components/SideMenu';
  import Header from './components/Header';

  export default {
    components: {
      SideMenu,
      Header
    }
  }
</script>

<style lang="scss" scoped>
    main {
        margin: 24px 16px;
        padding: 24px;
        background: #fff;
        min-height: 200px;
    }
</style>
