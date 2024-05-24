<template>
  
  <div
    class="my-product"
    @mouseover="showIcons = true"
    @mouseleave="showIcons = false"
  >
    <div class="icons-top" :class="{ showIcons: showIcons }">
      <router-link to="/product">
        <span class="material-symbols-sharp">favorite</span>
      </router-link>
      <router-link to="/product">
        <span class="material-symbols-sharp">compare_arrows</span>
      </router-link>
      <router-link to="/product">
        <span class="material-symbols-sharp">visibility</span>
      </router-link>
    </div>
   
      <div class="content">
        <router-link to="/product">
      <img :src="url" alt="product-image" />
      
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
   
      <div class="rating">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
      </div>
      <h2>{{ price }} <small>usd</small></h2>
    </router-link>
      <AddToCartButton title="Add To Cart" />
    </div>
    
  </div>
</template>

<script>
import AddToCartButton from "./AddToCartButton.vue";
export default {
  name: "ProductCard",
  data() {
    return {
      showIcons: false,
    };
  },
  components: {
    AddToCartButton,
  },
  props: {
    name: String,
    url: String,
    description: String,
    price: String,
  },
};
</script>
<style scoped>
.my-product {
  width: 300px;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  padding: 1rem 1rem;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
  margin: 1rem;
}
.my-product .icons-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  position: absolute;
  transition: all 0.3s ease-in-out;
  right: -35px;
}
.rating {
  padding: 0.5rem;
}
.checked {
  color: orange;
}
.my-product .icons-top.showIcons {
  right: 10px;
  transition: all 0.3s ease-in-out;
}
.my-product .icons-top span {
  font-size: 18px;
  padding: 0.3rem;
  border-radius: 100px;
  color: #fff;
  background-color: green;
  margin: 0.2rem;
}
.my-product .icons-top span:hover {
  font-size: 19px;
}
.my-product img {
  width: 200px;
  margin-left: 3rem;
}
.my-product h3 {
  font-size: 16px;
  padding: 0.3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: #000;
}
.my-product p {
  font-size: 14px;
  padding: 0.3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #000;
}
.my-product h2 {
  font-size: 24px;
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: #000;
}
small {
  font-size: 15px;
  font-weight: 400;
}
</style>