<template>
  <div class="app">
    <post-form @create="createPost" />
    <post-list @remove = "removePost" :posts="posts" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "js", body: "describe" },
        { id: 2, title: "js 2", body: "describe 2" },
        { id: 3, title: "js 3", body: "describe 3" },
      ],
      title: "",
      body: "",
    };
  },
  methods: {
    createPost(post, second, third) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter((el) => el.id !== post.id);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
