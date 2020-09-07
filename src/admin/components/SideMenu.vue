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
      :selectedKeys="selectedKeys"
      @select="onMenuItemSelect"
    >
      <a-menu-item :key="index" v-for="(menuItem, index) in menuItems">
        <router-link :to="menuItem.path">
          <a-icon :type="menuItem.icon" />
          <span>{{ menuItem.text }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { AuthService } from "../../services/auth.service";

export default {
  data() {
    return {
      selectedKeys: [],
      menuItems: [
        { text: "New Article", path: "/newarticle", icon: "edit" },
        { text: "New Category", path: "/newcategory", icon: "appstore" }
      ]
    };
  },
  created() {
    const key = this.menuItems.findIndex(
      menuItem => menuItem.path === this.$route.path
    );
    if (key > -1) {
      this.selectedKeys = [key];
    }
  },
  methods: {
    logOut() {
      AuthService.logOut();
      this.$router.push({ name: "AdminLogin" });
    },
    onMenuItemSelect({ item, key, selectedKeys }) {
      console.log(item, selectedKeys);
      this.selectedKeys = [key];
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: unset;
  &:hover {
    color: unset;
  }
}
</style>
