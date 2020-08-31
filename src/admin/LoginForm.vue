<template>
    <div>
        <a-input addon-before="User Name" placeholder="Username" v-model="userName" :disabled="isLoading" />
        <br>
        <br>
        <a-input-password addon-before="Password" placeholder="Password" v-model="password" :disabled="isLoading" />
        <br>
        <br>
        <a-button type="primary" :loading="isLoading" v-on:click="login">
            Login
        </a-button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "LoginForm",
        data() {
            return {
                userName: '',
                password: '',
                isLoading: false
            }
        },
        methods: {
            login() {
                this.isLoading = true;
                const payload = { userName: this.userName, password: this.password }
                axios.post('localhost:3000/login', payload)
                    .then(response => console.log(response))
                    .catch(e => console.log(e))
                    .finally(() => this.isLoading = false)
            }
        }
    }
</script>
<style scoped>
</style>
