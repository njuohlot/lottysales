<template>
  <div class="hero">
    <div class="hero-content">
      <h1>Trendmark</h1>
      <h2>SNEAKERS 2023 LIMITED EDITION</h2>

      <p>
        In another building I was shown his manufactory of shoes, which, like
        the other,<br />
        is full of ingenuity, and, in regard to subdivision of labour,...
      </p>
      <button>Shop Now</button>
    </div>
    <div class="empty-div"></div>
  </div>
  <OfferDeals />
  <section class="categories">
    <span>All Products</span>
    <h1><span class="bold">Meet</span> Categories</h1>
    <div class="category">
      <CategoriesCard
        name="Nike"
        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_22eca85c-e0ed-454e-bd65-a7b15dc1f2a6_160x108.png?v=1652704862"
      />
      <CategoriesCard
        name="Adidas"
        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_6e052360-fcef-4210-8418-6447ce19beb0_230x152.png?v=1652703852"
      />
      <CategoriesCard
        name="Jordan"
        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_e7732272-ad87-4a9b-8d37-66efdc87a029_230x152.png?v=1652705011"
      />
      <CategoriesCard
        name="Pabs"
        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_19972c6b-4425-46a2-953f-0c475ac18327_230x152.png?v=1653042872"
      />
      <CategoriesCard
        name="Xell"
        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_0764dfd1-2fa2-401a-866a-05b4ac81b0ec_240x158.png?v=1653043727"
      />
    </div>
  </section>
  <section class="products">
    <div class="product-top">
      <div class="product-title">
        <span>All Products</span>
        <h1><span class="bold">All the</span> Sneakers</h1>
      </div>
      <button></button>
    </div>

    <div class="product">
      <ProductCard
        name="Sprite Yoga Softy Set"
        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
        price="1900"
        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "
      />
      <ProductCard
        name="Sprite Yoga Softy Set"
        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
        price="1900"
        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "
      />
      <ProductCard
        name="Sprite Yoga Softy Set"
        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
        price="1900"
        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "
      />
      <ProductCard
        name="Sprite Yoga Softy Set"
        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
        price="1900"
        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "
      />
    </div>
  </section>
  <section class="products">
    <div class="product-top">
      <div class="product-title">
        <span>All Products</span>
        <h1><span class="bold">Recent</span> Sneakers</h1>
      </div>
      <button></button>
    </div>

    <div class="product">
      <ProductCard
        name="Sprite Yoga Softy Set"
        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
        price="1900"
        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "
      />
      <ProductCard
        name="Sprite Yoga Softy Set"
        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
        price="1900"
        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "
      />
      <ProductCard
        name="Sprite Yoga Softy Set"
        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
        price="1900"
        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "
      />
      <ProductCard
        name="Sprite Yoga Softy Set"
        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
        price="1900"
        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "
      />
    </div>
  </section>
  <FlashDeals />
  <div class="mycarousel-div">
    <div class="text">
      <span>All Products</span>
      <h1>Featured Sneakers</h1>
    </div>
    <div class="mycarousel">
      <Carousel
        :items-to-show="4"
        :wrapAround="true"
        :transition="500"
        :items-to-scroll="1"
        :autoplay="4000"
        :wrap-around="true"
        :breakpoints="{
          800: {
            itemsToShow: 2,
            snapAlign: 'center',
          },
          100: {
            itemsToShow: 1,
            snapAlign: 'center',
          },
          // 1000 and up
          1000: {
            itemsToShow: 2,
            snapAlign: 'start',
          },
          // 1200 and up
          1200: {
            itemsToShow: 4.95,
            snapAlign: 'start',
          },
        }"
      >
        <Slide v-for="slide in 10" :key="slide">
          <ProductCard
            name="Sprite Yoga Softy Set"
            url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
            price="1900"
            description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "
        /></Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import ProductCard from "@/components/ProductCard.vue";
import CategoriesCard from "@/components/CategoriesCard.vue";
import FlashDeals from "@/components/FlashDeals.vue";
import OfferDeals from "@/components/OfferDeals.vue";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    ProductCard,
    FlashDeals,
    OfferDeals,
    CategoriesCard,
    Carousel,
    Slide,
  },
};
</script>

<style scoped>
.hero {
  min-height: 75vh;
  background-image: url("https://steps-workdo.myshopify.com/cdn/shop/files/dhs_42674e34-95a4-4ecc-92ca-26c9603d9a68.jpg?v=1685531899");
  background-position: center right;
  background-repeat: no-repeat;
  background-size: 50% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.hero .hero-content {
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  padding: 0 10rem;
  margin-left: 6rem;
}
.hero-content h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 125px;
  color: #000;
}
.hero-content h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #000;
}
.hero-content p {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #000;
  margin-top: 1rem;
}
.hero .empty-div {
  width: 50%;
}
.hero-content button {
  display: inline-flex;
  align-items: center;
  padding: 15px;
  background: #f16e36;
  font-size: 12px;
  line-height: 1;
  font-weight: 600;
  min-width: 150px;
  letter-spacing: 0.5px;
  color: #fff;
  justify-content: center;
  text-transform: uppercase;
  box-shadow: 0 4.53333px 11.3333px 3px #f16e364a;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  margin-top: 2rem;
  outline: none;
  transition: all 0.3s ease-in-out;
}
.hero-content button:hover {
  background-color: #fff;
  color: #000;
}

.products {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0;
  font-family: "Poppins", sans-serif;
}
.products .product-top {
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-between;
}
.products .product-top button {
  border: none;
  background-color: #fff;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  border-radius: 50px;
  padding: 1rem 0.5rem;
  font-weight: 500;
}
.products .product-top button::after {
  content: "\e8e4";
  font-size: 16px;
  padding: 0.8rem;
  background-color: #000;
  color: #fff;
  font-family: "Material Symbols Sharp";
  margin-left: 0.5rem;
  border-radius: 100px;
}
.products .product-top button:hover::after {
  background-color: red;
}
.product {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0rem;
  font-family: "Poppins", sans-serif;
  flex-wrap: wrap;
}
.products h1 {
  font-size: 40px;
  font-weight: 500;
  text-transform: capitalize !important;
  padding: 1rem 0;
}
.products .bold,
.categories .bold {
  text-transform: capitalize;
  font-weight: 900;
}
.products span {
  font-weight: 500;
  line-height: 88%;
  margin-bottom: 12px;
  text-transform: uppercase;
}
.categories {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0;
  font-family: "Poppins", sans-serif;
  flex-wrap: wrap;
}
.categories h1 {
  font-size: 40px;
  font-weight: 500;
  padding: 1rem 0;
}
.categories span {
  font-weight: 500;
  line-height: 88%;
  margin-bottom: 12px;
  text-transform: uppercase;
}
.category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  flex-wrap: wrap;
  padding: 0 1rem;
}
@media screen and (max-width: 768px) {
  .hero-content h1 {
    font-weight: 800;
    font-size: 30px;
    color: #fff !important;
  }
  .hero-content h2 {
    font-weight: 400;
    font-size: 18px !important;
    color: #fff !important;
    margin-top: 0.5rem;
  }
  .hero-content p {
    font-weight: 300;
    font-size: 14px !important;
    color: #fff !important;
  }
  .hero {
    min-height: 80vh;
    background-position: center center;
    background-size: 100% 100%;
  }
  .hero .empty-div {
    display: none;
  }
  .hero .hero-content {
    width: 100%;
    margin-left: 0rem;
    color: #fff !important;
    padding: 1rem 1rem;
  }

  .products h1 {
    font-size: 20px;
  }
  .products{
    padding: 0.5rem;
    width: 96.1%;
  }
  .mycarousel-div .text {
    margin: 0rem 3rem !important;
  }

  .products .product-top {
    width: 99%;
  }
  .products .product-top {
    width: 99%;
  }
  .mycarousel-div {
    width: 91.2% !important;
  }

}

@media screen and (max-width: 1200px) {
  .hero-content h1 {
    font-size: 60px;
    color: #000;
  }
  .hero-content h2 {
    font-size: 30px;
    color: #000;
  }
  .hero-content p {
    font-size: 18px;
    color: #000;
    max-width: 550px;
  }
  .hero .empty-div {
    display: none;
  }
  .hero .hero-content {
    width: 100%;
    margin-left: 0rem;
    color: #fff !important;
    padding: 1rem 1rem;
  }
  .offer .search input {
    width: 15rem;
  }
}

.mycarousel {
  width: 85%;
  margin: auto;
  background: #000;
  padding-top: 2rem;
  overflow-x: hidden;
}
.mycarousel-div {
  width: 98.3%;
  background: #000;
  padding: 4rem 1rem;
  overflow-x: hidden !important;
}
.mycarousel-div .text {
  margin: 0rem 13rem;
  color: #fff;
  font-family: "Poppins";
}
.mycarousel-div .text h1 {
  font-size: 18px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  padding: 1rem 0;
}
.mycarousel-div .text span {
  font-size: 15px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  padding: 1rem 0;
}
</style>
