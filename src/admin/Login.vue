<template>
    <a-row class="arow" type="flex" justify="center" align="middle">
        <a-col :span="6" :xs="12" :md="8" :lg="6" :xl="5">
            <LoginForm />
            <router-link to="/">Home</router-link>
        </a-col>
    </a-row>
</template>

<script>
  import LoginForm from './LoginForm';
  import get from 'lodash.get';

  export default {
    components: {
      LoginForm
    },
    beforeCreate() {
      const isUserLoggedIn = get(this.$store.state, 'isUserLoggedIn');
      if (isUserLoggedIn)
        this.$router.push({ name: 'Dashboard' });
    }
  }
</script>

<style scoped>
    .arow {
        min-height: 100vh;
    }
</style>
