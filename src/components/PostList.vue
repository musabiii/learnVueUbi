<template>
  <div v-if="posts.length != 0">
    <h3>List of users</h3>
    <post-item
      @remove="$emit('remove', post)"
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
  <h2 v-else style="color: red">List is empty</h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
