<template>
     <div class="offer">
    <div class="text">
      <span>All Products</span>
      <h1>Get 20% off</h1>
      <h3>for first order</h3>
    </div>
    <div class="search">
      <input type="email" name="email" placeholder="Enter Email Address" v-model="input"
      />
      <span class="material-symbols-sharp">trending_flat</span>
    </div>
  </div>
</template>

<script>
export default{
    name: 'OfferDeals',
    data(){
        return{
            input: '',
        }
    },
    methods:{

    }
}
</script>
<style scoped>
.offer {
  background-color: #000;
  color: #fff;
  font-family: "Poppins", sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  background-image: url("../assets/images/sub-left.png"),
    url("../assets/images/sub-right.png");
  background-repeat: no-repeat;
  background-size: 100px 100px;
  background-position: left 0px bottom 0px, top 0px right 0px;
}
.offer .text {
  margin-right: 2rem;
  width: 50%;
}
.offer .search {
  margin-left: 3rem;
  position: relative;
 
}
.offer .text span {
  font-weight: 500;
  line-height: 88%;
  margin-bottom: 12px;
  text-transform: uppercase;
}
.offer .text h1 {
  font-size: 40px;
  font-weight: 800;
  padding: 0.5rem 0;
}
.offer .text h3 {
  font-size: 25px;
  font-weight: 600;
}
.offer .search input {
  padding: 1rem 2rem;
  border: 1px solid #fff;
  border-radius: 100px;
  background-color: transparent;
  width: 19rem;
  color: #fff;
}

.offer .search span {
  position: absolute;
  right: 5px;
  background-color: #f0f0f0;
  border-radius: 100px;
  color: #000;
  padding: 0.6rem 0.8rem;
  top: 2.5px;
  cursor: pointer;
}
.offer .search span:hover{
  background-color: red;
  color: #fff;
}
.offer .search input:focus {
  outline: none;
}
@media screen and (max-width: 768px){
   
.offer {
    flex-direction: column;
  }
  .offer .search {
    margin: 1rem 0;
  } 
  .offer .text h1 {
  font-size: 30px;
} 
.offer .text h3 {
  font-size: 18px;
}
.offer{
  padding: 1rem 0;
} 

}
@media screen and (max-width: 1200px) {
  .offer .search input {
    width: 15rem;
  }
  
}

</style>