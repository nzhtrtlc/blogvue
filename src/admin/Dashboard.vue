<template>
    <div style="height: 100%">
        <SideBar />
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import SideBar from './components/SideBar';
  import get from 'lodash.get';

  export default {
    components: {
      SideBar
    },
    beforeCreate() {
      const isUserLoggedIn = get(this.$store.state, 'isUserLoggedIn');
      if (!isUserLoggedIn)
        this.$router.push({ name: 'AdminLogin' });
    }
  }
</script>
