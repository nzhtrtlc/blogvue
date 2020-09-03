<template>
    <div>
        <a-input addon-before="User Name" placeholder="Username" v-model="email" :disabled="isLoading" />
        <br>
        <br>
        <a-input-password addon-before="Password" placeholder="Password" v-model="password" :disabled="isLoading" />
        <br>
        <br>
        <a-button type="primary" :loading="isLoading" v-on:click="login">
            Login
        </a-button>
        <a-button style="margin-left: 5px" @click="cancelLogin">Cancel</a-button>
        <div v-show="isLoginFailed">
            <br>
            <a-alert
                    message="Error"
                    description="Username or password is incorrect"
                    type="error"
                    show-icon
            />
        </div>
    </div>
</template>

<script>
  import { AuthService } from '../services/auth.service';

  export default {
    name: "LoginForm",
    data() {
      return {
        email: '',
        password: '',
        isLoading: false,
        isLoginFailed: false
      }
    },
    methods: {
      async login() {
        this.isLoading = true;
        try {
          const response = await AuthService.login({
            email: this.email,
            password: this.password
          });
          const { token, ...rest } = response.data;
          this.$store.dispatch('setToken', token);
          localStorage.setItem('token', token);
          this.$store.dispatch('setUser', rest);
          this.$router.push({ name: 'Dashboard' });
        } catch (e) {
          console.log(e)
        }
      },
      cancelLogin(){
        this.isLoading = false;
        this.isLoginFailed = false;
      }
    }
  }
</script>
