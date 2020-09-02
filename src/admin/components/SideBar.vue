<template>
    <div class="menu-container">
        <a-menu
                style="width: 256px; height: 100%"
                :default-selected-keys="['1']"
                mode="inline"
                theme="dark"
        >
            <a-menu-item key="0" class="menu-title">
                <span>Welcome, {{userName}}</span>
            </a-menu-item>
            <a-menu-item key="1">
                <a-icon type="mail" />
                New Article
            </a-menu-item>
            <a-menu-item key="2">
                <a-icon type="mail" />
                New Category
            </a-menu-item>
            <a-menu-item key="3" class="logout" @click="logOut">
                <a-icon type="logout" />
                Log Out
            </a-menu-item>
        </a-menu>
    </div>
</template>

<style lang="scss" scoped>
    .menu-container {
        height: 100%;
        width: 256px;
        background-color: #001529;
        color: white;

        .menu-title {
            pointer-events: none;
        }

        .logout {
            position: absolute;
            bottom: 0;
            width: 256px;
            font-weight: bold;
        }
    }
</style>

<script>
  import { AuthService } from '../../services/auth.service';
  import get from 'lodash.get';

  export default {
    data() {
      return {
        userName: get(this.$store.state, 'user.email') || 'Admin'
      };
    },
    methods: {
      logOut() {
        AuthService.logOut();
        this.$router.push({ name: 'AdminLogin' });
      }
    },
  };
</script>
