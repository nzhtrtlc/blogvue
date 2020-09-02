<template>
    <div class="home">
        <AuthorInfo />
        <Articles />
        <router-link to="/admin">Admin Panel</router-link>
    </div>
</template>

<script>
    // @ is an alias to /src
    import AuthorInfo from "../components/AuthorInfo.vue";
    import Articles from "../components/Articles.vue";

    export default {
        name: "Home",
        components: {
            AuthorInfo,
            Articles
        }
    };
</script>
