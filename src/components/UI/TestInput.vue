<template>
  <input type="text" :value="v" @input="testUpdate" />
</template>

<script>
export default {
  name: "test-input",
  props: {
    v: String,
  },
  data() {
      return {
          title:''
      }
  },
  methods: {
    testUpdate(e) {
         this.$emit("testUpdate", e.target.value);
    },
  },
};
</script>

<style></style>
