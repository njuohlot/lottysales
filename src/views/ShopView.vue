<template>
    <section class="hero">
        <router-link to="/">
            <h3>
                <span class="material-symbols-sharp">keyboard_backspace</span> Go to
                home
            </h3>
        </router-link>
        <h1>Shop All</h1>
    </section>

    <div class="shop">
        <aside :class="{showAside: showFilters}">
            <div class="close">
                <span class="material-symbols-sharp" @click="showFilter"> close </span>
            </div>
            <h1>Filters</h1>
            <div class="filter-price">
                <h4>Price</h4>
                <p>The highest price is 900.00USD</p>

                <form action="">
                    <div class="input-price">
                        <div class="left">
                            <label for="">Min Price:</label>
                            <input type="number" name="price" placeholder="0" />
                        </div>
                        <div class="right">
                            <label for="">Max Price:</label>
                            <input type="number" name="price" placeholder="900.00USD" />
                        </div>
                    </div>
                    <button type="reset">Reset</button>
                </form>
            </div>
            <div class="filter-price">
                <h4>Color</h4>
                <p>0 selected</p>

                <form action="">
                    <div class="input-price">
                        <div class="left">
                            <input type="checkbox" name="price" placeholder="0" id="checkbox" />
                        </div>
                        <div class="right">
                            <label for="">(2)</label>
                        </div>
                    </div>
                    <div class="input-price">
                        <div class="left">
                            <input type="checkbox" name="price" placeholder="0" />
                        </div>
                        <div class="right">
                            <label for="">(10)</label>
                        </div>
                    </div>
                    <div class="input-price">
                        <div class="left">
                            <input type="checkbox" name="price" placeholder="0" />
                        </div>
                        <div class="right">
                            <label for="">(3)</label>
                        </div>
                    </div>
                    <button type="reset">Reset</button>
                </form>
            </div>
        </aside>
        <main>
            <div class="sort">
                <div>
                    <label for="sort">Sort By:</label>
                    <select name="sort" id="sort">
                        <option value="features">Feature</option>
                        <option value="best-selling">Best Selling</option>
                        <option value="Alphabetically, A-Z" selected>
                            Alphabetically, A-Z
                        </option>
                        <option value="Alphabetically, Z_A">Alphabetically, Z-A</option>
                        <option value="price-low-high">Price, low to high</option>
                        <option value="price-high-low">Price, high to low</option>
                        <option value="date-new-old">Date, new to old</option>
                        <option value="price-old-new">Price, old to new</option>
                    </select>
                    <span class="material-symbols-sharp" id="filter-btn" @click="showFilter">sort </span>
                </div>
            </div>

            <div class="products">
                <div class="product">
                    <ProductCard name="Sprite Yoga Softy Set"
                        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
                        price="1900"
                        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. " />
                    <ProductCard name="Sprite Yoga Softy Set"
                        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
                        price="1900"
                        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. " />
                    <ProductCard name="Sprite Yoga Softy Set"
                        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
                        price="1900"
                        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. " />
                    <ProductCard name="Sprite Yoga Softy Set"
                        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
                        price="1900"
                        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. " />
                    <ProductCard name="Sprite Yoga Softy Set"
                        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
                        price="1900"
                        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. " />
                    <ProductCard name="Sprite Yoga Softy Set"
                        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
                        price="1900"
                        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. " />
                    <ProductCard name="Sprite Yoga Softy Set"
                        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
                        price="1900"
                        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. " />
                    <ProductCard name="Sprite Yoga Softy Set"
                        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
                        price="1900"
                        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. " />
                </div>
            </div>
        </main>
    </div>
</template>


<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "ShopView",
  data(){
    return {
        showFilters: false,
    }
  },
  methods:{
   showFilter(){
          this.showFilters = !this.showFilters;
   },
  },
  components: {
    ProductCard,
  },
};
</script>
<style scoped>
.hero {
  padding: 10rem;
  background-color: black;
  font-family: "Poppins", sans-serif;
  color: #fff;
}

.hero h3 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.8rem 0rem;
  font-size: 16px;
  font-weight: 600;
}

.hero h3 span {
  border: 1px solid #fff;
  padding: 0.8rem;
  border-radius: 100px;
  margin-right: 0.8rem;
}
.hero a {
  color: #fff;
}

.hero h1 {
  padding: 0.8rem 0rem;
  font-size: 40px;
  font-weight: 900;
}

.hero p {
  padding: 0.8rem 0rem;
  font-size: 18px;
  font-weight: 400;
  max-width: 500px;
}

.contact {
  background-color: #f2f7fa;
  padding: 3rem 0rem;
}

h4 {
  font-family: "Roboto", sans-serif, "arial";
  font-weight: 400;
  font-size: 20px;
  color: #000;
  line-height: 1.5;
}

@media screen and (max-width: 768px) {
  .hero {
    padding: 7rem 1rem;
  }

  .hero h1 {
    font-size: 35px;
  }

  .hero h3 {
    font-size: 17px;
  }

  .hero p {
    font-size: 16px;
  }
  .shop aside {
    position: absolute;
    top: 0;
    left: -320px;
    width: 50% !important;
    z-index: 2;
  }
  .shop main {
    width: 100%;
    margin: auto;
  }
  .close span {
    display: block !important;
  }
  span#filter-btn {
    display: block !important;
  }
  .shop main .sort {
    width: 100% !important;
  }
}
@media screen and (max-width: 1200px) {
    .shop aside {
        position: absolute;
        top: 0;
        left: -580px;
        width: 80% !important;
        z-index: 2;
    }

    .shop main {
        width: 100%;
        margin: auto;
    }

    .close span {
        display: block !important;
    }

    span#filter-btn {
        display: block !important;
    }

    .shop main .sort {
        width: 100% !important;
    }
}
.shop {
  display: flex;
  align-items: top;
  justify-content: space-between;
  width: 100%;
}
.shop aside {
  width: 15%;
  height: 100%;
  background: #fff;
  padding: 3rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  transition: all 0.8s ease-in-out;
  overflow-y: scroll;
}
.shop main {
  width: 85%;
}
.shop main .sort {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
  padding: 1rem 0rem;
}
.shop main .sort label {
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  padding: 0.3rem;
}
.shop main .sort select {
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  padding: 0.7rem;
  border-radius: 100px;
  outline: none;
  border-color: pink;
}
.product {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Poppins", sans-serif;
  flex-wrap: wrap;
}
main {
  background-color: #f2f7fa;
}
aside h1 {
  font-size: 25px;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  padding: 2rem 2rem;
}

.filter-price {
  padding: 1.8rem 0rem;
}
.filter-price h4 {
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  padding: 0.5rem 0rem;
}
.filter-price p {
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  padding: 0.5rem 0rem;
}
.filter-price form label {
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  padding: 0.5rem 0rem;
}
.filter-price .input-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;
}
.filter-price .input-price input {
  width: 6rem;
  height: 1.5rem;
  padding: 5px;
  outline: none;
}
.filter-price .input-price input:focus {
  outline: none;
}
.filter-price button {
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  padding: 0.5rem 0rem;
  border: none;
  background-color: transparent;
}
input #checkbox:nth-child(1) {
  color: #000 !important;
}
.close {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.close span {
  font-size: 30px;
  color: red;
  display: none;
  cursor: pointer;
}
aside.showAside {
  left: 0;
}
span#filter-btn {
  font-size: 35px;
  color: #000;
  padding: 0.5rem 0.5rem;
  display: none;
  cursor: pointer;
}
</style>
