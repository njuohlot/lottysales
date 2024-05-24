<template>
  <header>
    <div class="left">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/images/vans.jpg" alt="" />
        </router-link>
      </div>
      <div class="search">
        <span class="material-symbols-sharp">search</span>
        <input type="search" placeholder="Search Products" name="search" v-model="search" />
      </div>
    </div>

    <nav :class="{ toggleNav: showNav }">
      <ul>
        <li>
          <router-link to="/" class="active" @click="showNav = !showNav">Home</router-link>
        </li>
        <li>
          <router-link to="/shop" @click="showNav = !showNav">Shop</router-link>
        </li>
        <li>
          <router-link to="/about" @click="showNav = !showNav">About us</router-link>
        </li>
        <li>
          <router-link to="/contact" @click="showNav = !showNav">Contact us</router-link>
        </li>
      </ul>
    </nav>
    <div class="right">
      <router-link to="/register">
        <span class="material-symbols-sharp">person</span>
      </router-link>
      <a href="javascript:void(0)">
        <span class="material-symbols-sharp" @click="toggleCart">shopping_cart</span>
        <span class="badge">0</span>
      </a>
      <span @click="toggleNav" class="material-symbols-sharp" id="show-mwnu" v-if="showNav === false">menu</span>
      <span @click="toggleNav" class="material-symbols-sharp" id="show-mwnu" v-else>close</span>
    </div>
    <div class="side-shopping-cart" :class="{ showCart: showCart }">
      <div class="top">
        <h3>Shopping Cart</h3>
        <span class="material-symbols-sharp" @click="showCart = !showCart">close</span>
      </div>
      <div class="my-cart">
        <div class="cart-items">
          <div class="left-cart">
            <img src="../assets/images/cart-1.jpg" alt="" />
            <div class="text">
              <h2>Throwback Hip Bag</h2>
              <h4>Salmon</h4>
              <p>QTY: 1</p>
            </div>
          </div>
          <div class="right-cart">
            <h2>$900</h2>
            <span class="material-symbols-sharp"> delete </span>
          </div>
        </div>
        <div class="cart-items">
          <div class="left-cart">
            <img src="../assets/images/cart-2.jpg" alt="" />
            <div class="text">
              <h2>Throwback Hip Bag</h2>
              <h4>Salmon</h4>
              <p>QTY: 5</p>
            </div>
          </div>
          <div class="right-cart">
            <h2>$1800</h2>
            <span class="material-symbols-sharp"> delete </span>
          </div>
        </div>
        <div class="cart-items">
          <div class="left-cart">
            <img src="../assets/images/cart-3.jpg" alt="" />
            <div class="text">
              <h2>Throwback Hip Bag</h2>
              <h4>Salmon</h4>
              <p>QTY: 4</p>
            </div>
          </div>
          <div class="right-cart">
            <h2>$2600</h2>
            <span class="material-symbols-sharp"> delete </span>
          </div>
        </div>
      </div>
      <div class="top">
        <div class="subtotal">
          <h3>Subtotal</h3>
          <p>Shipping and taxes calculated at checkout.</p>
        </div>

        <span class="sub-amount">$262.00</span>
      </div>
      <div class="shopping-btn">
        <button @click="showCart = !showCart"><router-link to="/cart">View Cart</router-link></button>
        <button @click="showCart = !showCart"><router-link to="/checkout">Checkout</router-link></button>
        <span @click="showCart = !showCart">or <router-link to="/shop">Continue Shopping</router-link></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      search: "",
      showNav: false,
      showCart: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },
};
</script>

<style scoped>
.left img {
  max-width: 80px;
}
.badge {
  background-color: #752728;
  color: white !important;
  padding: 2px 4px;
  border-radius: 100px;
  font-size: 10px !important;
  position: relative;
  top: -25px;
  left: -10px;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  background-color: #fff;
  height: 8vh;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: fixed;
  top: 0;
  z-index: 2;
}
.left {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  width: 40%;
}
.left .logo {
  margin-right: 2rem;
}
.left .search input {
  padding: 0.8rem 3rem;
  width: 20rem;
  border: none;
  border-radius: 50px;
  background-color: #e8f0fe;
}
input:focus {
  outline: none;
}
.left .search input::placeholder {
  color: #4a5568;
  font-size: 15px;
}
.left .search input:focus {
  border: none;
}

.left .search span {
  color: #4a5568;
  position: relative;
  left: 2.3rem;
  top: 0.6rem;
  font-size: 1.5rem;
}
.left .search {
  position: relative;
}

nav {
  width: 50%;
  background-color: #fff;
}
nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
nav.toggleNav {
  right: 0px;
}
nav li a {
  padding: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}
nav li a:hover {
  font-size: 18px;
  color: #752728;
}
ul li .active {
  color: #752728;
}
.right {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 4rem;
}
.right span {
  font-size: 1.5rem;
  padding: 0.5rem;
  color: #752728;
}
.right span:nth-child(3) {
  cursor: pointer;
  display: none;
}
@media screen and (max-width: 1300px) {
  .left .search input {
    width: 10rem;
  }
  .right {
    width: 15%;
  }
}
@media screen and (max-width: 900px) {
  .left .search input {
    width: 15rem;
  }
  .left {
    width: 60%;
  }
  .right {
    width: 40%;
  }
  .right span:nth-child(3) {
    display: block;
  }
  nav {
    position: absolute;
    height: 30vh;
    top: 4.3rem;
    right: -280px;
    z-index: 2;
    width: 30vw;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    text-align: left;
    transition: all 0.8s ease-in-out;
  }
  nav ul {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 1rem;
  }
  nav ul li {
    padding: 0.8rem;
  }
}
@media screen and (max-width: 768px) {
  .left {
    width: 40%;
    padding: 0 0;
  }
  .left .search {
    display: none;
  }
  nav {
    width: 50vw;
    height: 100vh;
    top: 3.1rem;
    right: -350px;
  }
  nav ul {
    margin-top: 2.5rem;
  }

  .right {
    padding-right: 2rem;
    width: 60%;
  }
  .badge {
    padding: 1px 1px;
    border-radius: 100px;
    font-size: 10px !important;
    position: relative;
    top: -15px;
    left: -10px;
  }
}

.side-shopping-cart {
  padding: 2rem;
  height: 80vh;
  background-color: #fff;
  position: absolute;
  right: -400px;
  top: 4.45rem;
  width: 20rem;
  z-index: 2;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow-x: hidden;
  transition: all 0.8s ease-in-out;
}
.side-shopping-cart.showCart {
  right: 0;
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3rem;
}
.top h3 {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
}
.top span {
  color: #752728;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
}
.top p {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 300;
  padding-top: 0.2rem;
}
.my-cart {
  padding-bottom: 1.5rem;
  max-height: 55%;
  overflow-y: scroll;
  width: 100%;
}
.cart-items img {
  width: 80px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin-right: 1rem;
}
.cart-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid pink;
}
.cart-items .left-cart {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}
.cart-items .left-cart h2 {
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  font-weight: 500;
}
.cart-items .left-cart h4 {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 300;
  padding-top: 0.2rem;
}
.cart-items .left-cart p {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 600;
}
.cart-items .left-cart p {
  margin-top: 2rem;
}
.cart-items .right span {
  margin-top: 2rem;
  color: #752728;
  cursor: pointer;
}
.cart-items .right-cart h2 {
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  font-weight: 700;
}
.shopping-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.shopping-btn button {
  display: inline-flex;
  align-items: center;
  padding: 15px;
  background: #f16e36;
  font-size: 12px;
  line-height: 1;
  font-weight: 600;
  min-width: 200px;
  letter-spacing: 0.5px;
  color: #fff;
  justify-content: center;
  text-transform: uppercase;
  box-shadow: 0 4.53333px 11.3333px 3px #f16e364a;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  margin: 1rem;
  outline: none;
  transition: all 0.3s ease-in-out;
}
.shopping-btn button a {
  color: #fff;
}
.shopping-btn button:hover {
  background-color: #fff;
}
.shopping-btn button:hover a {
  color: #333;
}
.shopping-btn a {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
}
@media screen and (max-width: 1200px) {
  .side-shopping-cart {
    padding: 2.5rem;
    height: 80vh;
    right: -400px;
    top: 3rem;
    width: 15rem;
  }
}
</style>