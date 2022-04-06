<template>
  <div class="navbar">
<div>
    Vue3
</div>
<div class="navbar__btns">
    <my-button @click="$router.push('/posts')">Posts</my-button>
    <my-button @click="$router.push('/about')">About</my-button>
</div>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
export default {
  components: { MyButton },

}
</script>

<style>
.navbar {
    height: 50px;
    background-color: teal;
    box-shadow: 2px 2px 4px gray;
    display: flex;
}

.navbar__btns {
    margin-left: auto;
}
</style>