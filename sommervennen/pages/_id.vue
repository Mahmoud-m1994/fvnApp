<template>
    <div>
      <h1>This is dynamic page</h1>
      <h2>{{filteredPost.title}}</h2>
    </div>
</template>


<script>
export default {
  async asyncData({ params, redirect }) {
    const posts = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    ).then((res) => res.json())

    const filteredPost = posts.filter(
      (e) => e.id === params.id
    )
    if (filteredPost) {
      return {
        filteredPost
      }
    } else {
      console.log(filteredPost[0]);
      console.log("Mahi ", params.id);
      redirect('/')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>