<template>
<div class = "md:flex">
    <div class="card" style="width: 18rem; margin: 2rem;" >
        <div class="card-body">
            <h5 class="card-title">Post id {{post.id}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{post.title}}</h6>
            <NuxtLink
                :to="`/${post.id}`"

            >Show details
            </NuxtLink>

        </div>
    </div>
</div>
    
</template>

<script>
    export default {
        props: {
            post: {
                title: String,
                id: String
            } 
        }
    }
</script>

<style lang="scss" scoped>

</style>