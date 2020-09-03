<template>
    <a-layout-sider
            :collapsed="this.$store.state.sideMenuCollapsed"
            :trigger="null"
            collapsible
    >
        <div class="logo" />
        <a-menu
                theme="dark"
                mode="inline"
                :default-selected-keys="['1']"
                @click="onMenuClick"
        >
            <a-menu-item key="1" data-route="/newarticle">
                <a-icon type="edit" />
                New Article
            </a-menu-item>
            <a-menu-item key="2" data-route="/newcategory">
                <a-icon type="appstore" />
                New Category
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script>
  import { AuthService } from "../../services/auth.service";
  import get from "lodash.get";

  export default {
    data() {
      return {
        userName: get(this.$store.state, "user.email") || "Admin"
      };
    },
    methods: {
      logOut() {
        AuthService.logOut();
        this.$router.push({ name: "AdminLogin" });
      },
      onMenuClick(e) {
        const route = get(e.domEvent.target, "dataset.route");
        if (route) this.$router.push(route);
      }
    }
  };
</script>

<style lang="scss" scoped>
    a {
        all: unset;
    }
</style>
