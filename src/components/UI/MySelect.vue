<template>
  <select v-model="modelValue" @change = "changeOptions">
    <option disabled value="">Выберите из списка</option>
    <option 
    v-for="option in options" 
    :key="option.value" 
    :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
      changeOptions(e) {
          this.$emit('update:modelValue',e.target.value)
      }
  }
};
</script>

<style></style>
