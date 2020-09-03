<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
  import { AuthService } from './services/auth.service';

  export default {
    async beforeCreate() {
      const currentRouteName = this.$router.currentRoute.name;
      if (this.$route.matched[0].path.includes('/admin')) {
        const isSessionValid = await AuthService.checkAndUpdateSession();
        if (isSessionValid) {
          if (currentRouteName === 'AdminLogin')
            this.$router.push({ name: 'Dashboard' }, () => {
            });
          else
            this.$router.push({ name: this.$router.currentRoute.name }, () => {
            });
        } else {
          this.$router.push({ name: 'AdminLogin' }, () => {
          });
        }
      }
    }
  }
</script>

<style scoped>
    #app {
        height: 100%;
    }

    section {
        height: 100%;
    }
</style>
