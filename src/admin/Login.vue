<template>
    <a-row class="arow" type="flex" justify="center" align="middle">
        <a-col :span="6" :xs="12" :md="8" :lg="6" :xl="5">
            <LoginForm />
        </a-col>
    </a-row>
</template>

<script>
    import LoginForm from './LoginForm';

    export default {
        components: {
            LoginForm
        }
    }
</script>

<style scoped>
    .arow{
        min-height: 100vh;
    }
</style>
