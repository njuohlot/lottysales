<template>
    <section class="flash">
        <div class="content">
            <div>
                <button id="cat">FLASH DEALS</button>
            </div>
        
        <img src="../assets/images/p2.avif" alt="">
        <div class="rating">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
      </div>
      <h1>Barley Textured Panelled Low-Top Shoes</h1>
      <h2>SNEAKERS 2024 LILITED EDITION</h2>
      <p>Elevate your fashion game with our exquisite collection of shoes. Crafted with precision and attention to detail, these shoes combine comfort and elegance to give...</p>
      <h1>$300</h1>
      <AddToCartButton title="Add to Cart"/>
        </div>
        


    </section>
</template>

<script>
import AddToCartButton from './AddToCartButton.vue'
export default{
    name: 'FlashDeals',
    data(){
        return{

        }
    },

    methods:{

    },
    components:{
        AddToCartButton,
    }
}

</script>
<style scoped>
.flash{
    background-color: #fff;
    background-position: center right;
    background-repeat: no-repeat;
    background-size: 50% 100%;
    background-image: url('../assets/images/flash.webp');
}
.flash .content{
    padding: 3rem 15rem;
}
.flash .content #cat{
    display: inline-flex;
    align-items: center;
    padding: 15px 40px;
    background: #000;
    font-size: 18px;
    line-height: 1;
    font-weight: 800;
    letter-spacing: .5px;
    color: #fff;
    justify-content: center;
    text-transform: uppercase;
    box-shadow: 0 4.53333px 11.3333px 3px #f16e364a;
   border-radius: 30px;
    cursor: pointer;
    border: none;
    margin: 2rem 0rem;
    outline: none;
    transition: all 0.3s ease-in-out;
}
.flash .content h1{
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    padding: 1rem 0rem;
    max-width: 35rem;
    display: block;
}
.flash .content h2{
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    padding: 0.5rem 0rem;
    max-width: 27rem;
    display: block;
}
.flash .content p{
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding: 0.5rem 0rem;
    max-width: 27rem;
    display: block;
}
@media screen and (max-width: 768px) {
    .flash{
    background-position: center center;
    background-size: cover;
}
.flash .content{
    padding: 1rem 1rem;
}
.flash .content #cat{
    font-size: 16px;
}
.flash .content h1{
    font-size: 1rem;
    color: #fff;
    max-width: 100%;

}
.flash .content h2{
    font-size: 1rem;
    color: #fff;
}
.flash .content p{
    font-size: 1rem;
    color: #fff;
}
}
@media screen and (max-width: 1200px) {
    .flash{
    background-position: center;
    background-size: cover;
}
.flash .content{
    padding: 1rem 1rem;
}
.flash .content #cat{
    font-size: 16px;
}
.flash .content h1{
    font-size: 1rem;
    color: #fff;
    max-width: 100%;
}
.flash .content h2{
    font-size: 1rem;
    color: #fff;
}
.flash .content p{
    font-size: 1rem;
    color: #fff;
}
}

</style>