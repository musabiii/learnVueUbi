<template>
  <div >
    <my-input v-model="searchQuery" placeholder="type string" />
    <div class="app__btns">
      <my-button @click="fetchUsers"> fetch </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <post-form @create="createPost" />
    <post-list
      @remove="removePost"
      :posts="searchedPosts"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка</div>
    <div ref="observer" class="observer"></div>
    <!-- постраничная пагинация -->
    <!-- <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        @click="changePage(pageNumber)"
        :class="{
          page__active: page === pageNumber,
        }"
      >
        {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
export default {
  components: {
    PostForm,
    PostList,
    MyButton,
    MySelect,
    MyInput,
  },
  data() {
    return {
      posts: [],
      searchQuery: "",
      title: "",
      body: "",
      isPostsLoading: false,
      selectedSort: "",
      page: 1,
      limit: 5,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  methods: {
    createPost(post, second, third) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter((el) => el.id !== post.id);
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    async fetchUsers() {
      try {
        this.isPostsLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
          this.posts = response.data;
          this.isPostsLoading = false;
        }, 1000);
      } catch (e) {
        console.log("error");
      }
    },
    async loadMorePosts() {
      try {
        this.page+=1;
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
          this.posts = [...this.posts, ...response.data];
        }, 1000);
      } catch (e) {
        console.log("error");
      }
    },
  },
  mounted() {
    this.fetchUsers();
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page<this.totalPages) {
        console.log('пересечение')
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort] > post2[this.selectedSort] ? 1 : -1
      );
    },
    searchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    selectedSort(newValue) {
      // this.posts.sort((post1, post2) => (post1[newValue] > post2[newValue]?1:-1));
    },
    // page() {
    //   this.fetchUsers();
    // }
  },
};
</script>

<style>

</style>
