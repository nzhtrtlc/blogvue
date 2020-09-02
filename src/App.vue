<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style scoped>
    #app {
        height: 100%;
    }
</style>

<script>
  import { AuthService } from './services/auth.service';

  export default {
    async beforeCreate() {
      if (this.$router.currentRoute.path.includes('/admin')) {
        if (await AuthService.checkAndUpdateSession()) {
          this.$router.push({ name: 'Dashboard' });
        }
      }
    }
  }
</script>
