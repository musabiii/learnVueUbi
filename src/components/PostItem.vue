<template>
  <div class="post">
    <div>
      {{ post.id }}
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Describe:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)"> open </my-button>
      <my-button @click="$emit('remove', post)"> Delete</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: { MyButton },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin: 0 15px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__btns {
  display: flex;
}
</style>
