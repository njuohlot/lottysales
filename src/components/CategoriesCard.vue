CategoriesCard.vue
<template>
  <div class="my-categories">
    <img :src="url" />
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "CategoriesCard",
  props: {
    name: String,
    url: String,
  },
};
</script>
<style scoped>
.my-categories {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  background-color: #fff;
  margin: 0.5rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem 4rem;
  flex-wrap: wrap;
  transition: all 0.5s ease-in-out;
}
.my-categories:hover {
  transform: rotate(20deg);
  background-color: #f16e36;
  color: #fff;
}
.my-categories img {
  width: 80px;
  height: 80px;
}
.my-categories h3 {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 800;
  margin-top: 0.3rem;
}
@media screen and (max-width: 1200px) {
  .my-categories {
    padding: 1rem 2rem;
    margin: 0.2rem 0.2rem;
  }
}
</style>