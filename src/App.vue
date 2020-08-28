<template>
    <div id="app">
        <AuthorInfo />
        <Articles />
    </div>
</template>

<script>
    import AuthorInfo from "./components/AuthorInfo.vue";
    import Articles from "./components/Articles.vue";

    export default {
        name: "App",
        components: {
            AuthorInfo,
            Articles
        }
    };
</script>
