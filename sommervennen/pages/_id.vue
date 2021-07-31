<template>
    <div>
        <Header/>
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="https://source.unsplash.com/random/200x200?sig=1" alt="Card image cap">
        </div>
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
      redirect('/')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>