<template>
  <div class="app">
    <form @submit.prevent>
      <h4>create post</h4>
      <my-input v-model="post.title" type="text" placeholder="name" />
      <input v-model="post.body" class="input" type="text" placeholder="desc" />
      <test-input @testUpdate="testUpdate" :v="testInput" />
      <my-button
        style="align-self: flex-end; margin-top: 15px"
        class="btn"
        @click="createPost"
        >create</my-button
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
        testInput: "",
    };
  },
  methods: {
    createPost(e) {
      const post = { id: +new Date(), ...this.post };
      this.$emit("create", post, "param1", "param2");
      this.post = {
        title: "",
        body: "",
      };
    },

    testUpdate(a) {
      console.log(a)
      this.testInput = a;
    },
  },
};
</script>

// STYLE

<style scoped>
.app {
  padding: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
</style>
