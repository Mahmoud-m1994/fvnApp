<template>
    <div class = "row" >
        <PostCard 
            v-for="post in posts" 
            :post="post"
            :key="post.id"
        />
    </div>
</template>

<script>
    export default {
        async fetch() {
            this.posts = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
            ).then(res => res.json())
        },
        data() {
            return {
                posts: []
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>