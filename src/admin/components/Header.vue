<template>
    <a-layout-header style="background: #fff; padding: 0">
        <a-icon
                class="trigger"
                :type="this.$store.state.sideMenuCollapsed ? 'menu-unfold' : 'menu-fold'"
                @click="handleCollapse"
        />
    </a-layout-header>
</template>

<script>
  export default {
    methods: {
      handleCollapse() {
        this.$store.dispatch('collapseSideMenu');
      }
    }
  }
</script>

<style lang="scss" scoped>
    #dashboard-layout .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: #1890ff;
        }

        .logo {
            height: 32px;
            background: rgba(255, 255, 255, 0.2);
            margin: 16px;
        }
    }
</style>
