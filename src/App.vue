<template>
    <navbar/>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './pages/Navbar.vue';
export default {
  components: { Navbar },};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app__btns {
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
  justify-content: center;
}
.page {
  padding: 5px;
  border: solid 1px #eee;
  margin: 0 5px;
}

.page__active {
  background-color: teal;
  color: #fff;
}
.observer {
  height: 30px;
  background-color: green;
}
</style>
