<template>
    <section class="single-product">
        <div class="left">
            <div class="gallery">
                <input type="radio" checked="checked" name="select" id="img-tab-1" />
                <label for="img-tab-1" style="
            background-image: url(http://localhost:8080/img/p1.1c96e320.avif);
          "></label>
                <img src="http://localhost:8080/img/p1.1c96e320.avif" border="0" />

                <input type="radio" name="select" id="img-tab-6" />
                <label for="img-tab-6" style="
            background-image: url(http://localhost:8080/img/p2.2eec09e0.avif);
          "></label>
                <img src="http://localhost:8080/img/p2.2eec09e0.avif" border="0" />

                <input type="radio" name="select" id="img-tab-7" />
                <label for="img-tab-7" style="
            background-image: url(http://localhost:8080/img/p3.a132e14e.avif);
          "></label>
                <img src="http://localhost:8080/img/p3.a132e14e.avif" border="0" />

                <input type="radio" name="select" id="img-tab-8" />
                <label for="img-tab-8" style="
            background-image: url(http://localhost:8080/img/p4.0d87a481.avif);
          "></label>
                <img src="http://localhost:8080/img/p4.0d87a481.avif" border="0" alt="galler" />
            </div>
        </div>
        <div class="right">
            <div class="rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
            </div>
            <h1>Barley Textured Panelled Low-Top Shoes</h1>
            <h2>Sneakers 2023 Limited Edition</h2>
            <div class="sku-cat">
                <h2><b>SKU:</b> <span>11</span></h2>
                <h2><b>Category:</b> <span>Sneakers</span></h2>
            </div>
            <p>Elevate your fashion game with our exquisite collection of shoes. Crafted with precision and attention to
                detail, these shoes combine comfort and elegance to give</p>
            <h3><b>AVAILABLE SIZES:</b> <span class="sizes">36</span> <span class="sizes">16</span></h3>
            <h4>Quantity</h4>
            <div class="quantity-update">
                <span class="material-symbols-sharp" @click="count--">remove</span>
                <span class="update-value">{{ count }}</span>

                <span class="material-symbols-sharp" @click="count++">add</span>
            </div>

            <h1>$900.00</h1>
            <AddToCartButton title="Buy It Now" />
        </div>
    </section>
    <div class="recently-view-products">
        <h1>Recently Viewed Products</h1>
        <div class="products">
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
    <div class="review">
        <h1>Customer Review</h1>
        <div class="rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
        </div>
        <p>Be the first to write a review</p>
        <button type="submit" v-if="!showReviewForm" class="btn submit" @click="showReviewForm=true">Write
            Review</button>
        <button type="submit" v-else class="btn submit" @click="showReviewForm = false">Cancel
            Review</button>

        <div class="wrapper" v-if="showReviewForm">
            <form action="#">
                <textarea name="opinion" cols="50" rows="5" placeholder="Your review"></textarea>
                <div class="btn-group">
                    <button type="submit" class="btn submit">Submit</button>

                </div>
            </form>
        </div>


    </div>
    <div class="content">
        <div class="left">
            <h1>Trendmark</h1>
            <h3>Description:</h3>
            <p>The attention to detail is evident in every stitch and contour, ensuring a perfect fit and unmatched
                comfort. The carefully selected materials not only enhance their durability but also add a touch of
                sophistication to any outfit. Whether you're dressing up for a formal occasion or going for a casual
                outing, these shoes effortlessly merge versatility and timeless elegance.</p>
            <button>View More</button>
        </div>
        <div class="right">
            <img src="../assets/images/p-banner.webp" alt="">
        </div>
    </div>

    <div class="mycarousel-div">
        <div class="text">
            <span>All Products</span>
            <h1>Related products</h1>
        </div>
        <div class="mycarousel">
            <Carousel :items-to-show="4" :wrapAround="true" :transition="500" :items-to-scroll="1" :autoplay="4000"
                :wrap-around="true" :breakpoints="{
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
                }">
                <Slide v-for="slide in 10" :key="slide">
                    <ProductCard name="Sprite Yoga Softy Set"
                        url="https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793"
                        price="1900"
                        description="In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. " />
                </Slide>
                
            </Carousel>
        </div>
    </div>

</template>

<script>
import { Carousel, Slide} from 'vue3-carousel'
import AddToCartButton from '@/components/AddToCartButton.vue';
import ProductCard from '@/components/ProductCard.vue';
import { ref } from 'vue'
const count = ref(0)
export default {
  name: "ProductView",
  data() {
    return {
      count,
      showReviewForm: false,
    };
  },
  methods: {
    
  },
  components: {
      AddToCartButton,
      ProductCard,
      Carousel,
      Slide,
      
  },
};
</script>

<style scoped>

.single-product {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  padding: 0rem 1rem;
  margin-top: 4rem auto;
}
.single-product .left,
.single-product .right {
  width: 50%;
padding: 1rem 3rem;
}
.single-product .left {
  background-color: #f0f0f0;
padding: 15rem 0rem;
}
.single-product .right{
    font-family: 'Poppins', sans-serif;
}
.single-product .right h1{
    font-size: 41px;
    font-weight: 900;
    max-width: 600px;
    padding: 0.8rem 0rem;
}
.single-product .right h2 {
    font-size: 22px;
    font-weight: 600;
    max-width: 600px;
    padding: 0.4rem 0rem;
}
.single-product .right p {
    font-size: 18px;
    font-weight: 400;
    max-width: 600px;
    padding: 0.4rem 0rem;
}
.single-product .right h3 {
    font-size: 18px;
    font-weight: 700;
    max-width: 600px;
    padding: 0.6rem 0rem;
}
.single-product .right h4 {
    font-size: 20px;
    font-weight: 700;
    max-width: 600px;
    padding: 0.7rem 0rem;
}
.single-product .right h3 span{
    background-color: #000;
    color: #fff;
    padding: 0.5rem;
    border-radius: 10px;
    cursor: pointer;
}
.single-product .right .sku-cat{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem;
}
.single-product .right .sku-cat {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem;
}
.single-product .right .sku-cat h2:nth-child(1){
    margin-right: 0.5rem;
}
.single-product .right .sku-cat h2 {
        font-size: 20px;
        font-weight: 700;
        padding: 0.4rem 0rem;
}
.single-product .right .sku-cat span {
    font-size: 17px;
    font-weight: 500;
   
}
.right .quantity-update {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid pink;
    padding: 0.5rem 0;
    width: 100px;
}
.quantity-update .update-value {
    font-weight: 700;
    padding: 0rem 0.5rem;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
}

.quantity-update span {
    cursor: pointer;
    color: #000;

}
.rating{
    padding: 0.5rem 0rem;
}
.rating .checked{
    color: orange;
}
.gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 3;
    align-content: start;
    max-width: 500px;
    margin: 0 auto;
    transition: all 150ms linear;
    padding: 3rem;
}

.gallery input[type="radio"] {
    display: none;
}

.gallery label {
    position: relative;
    display: block;
    padding-bottom: 60%;
    margin: 5px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 80px;
    background-position: center;
}

.gallery label:before {
    border: 1px solid #e3e3e3;
    content: '';
    position: absolute;
    left: -5px;
    right: -5px;
    bottom: -5px;
    top: -5px;
}

.gallery img {
    display: none;
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 1;
    max-width: 300px;
    transition: all 150ms linear;
}

.gallery input[name="select"]:checked+label+img {
    display: block;
}

.gallery input[name="select"]:checked+label:before {
    border: 1px solid #000;
}
.recently-view-products{
    display: flex;
    align-items: center;
    justify-items: center;
    width: 100%;
    padding: 4rem 0rem;
    flex-direction: column;
}
.recently-view-products h1 {
       font-size: 41px;
       font-weight: 900;
        padding: 0.8rem 0rem;
        font-family: 'Poppins', sans-serif;
}
.recently-view-products .products{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
}
.review{
       display: flex;
        align-items: center;
        justify-items: center;
        width: 100%;
        padding: 2rem 0rem;
        flex-direction: column;
}
.review h1 {
    font-size: 30px;
    font-weight: 900;
    padding: 0.8rem 0rem;
    font-family: 'Poppins', sans-serif;
}

textarea{
    border-color: pink;
    padding: 1rem;
}
.review .btn{
    padding: 15px 40px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 400;
    margin: 1rem 0rem;
    background-color: #000;
    color: #fff;
    border: none;
}
.review p {
    padding: 0.8rem;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;

}

.content{
    display: flex;
    justify-content: space-between;;
    align-items: center;
    width: 70%;
    margin: 3rem auto;
}
.content .left h1{
        font-size: 40px;
        font-weight: 900;
        padding: 0.4rem 0rem;
        font-family: 'Poppins', sans-serif;
}
.content .left h3 {
font-size: 22px;
    font-weight: 600;
    padding: 0.4rem 0rem;
    font-family: 'Poppins', sans-serif;
    
}
.content .left p {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    max-width: 500px;
}
.content .left button {
        font-size: 16px;
        font-weight: 600;
        padding: 20px 40px;
        border: none;
        border-radius: 100px;
        font-family: 'Poppins', sans-serif;
        background-color: #F16E36;
        margin: 1rem;
        color: #fff;
}

.mycarousel {
    width: 85%;
    margin: auto;
    background: #F2F7FA;
    padding-top: 2rem;
    overflow-x: hidden;
}

.mycarousel-div {
   
    background: #F2F7FA;
    padding: 4rem 1rem;
    overflow-x: hidden !important;
}

.mycarousel-div .text {
    margin: 0rem 13rem;
    color: #000;
    font-family: "Poppins";
}

.mycarousel-div .text h1 {
    font-size: 25px;
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

@media screen and (max-width: 1200px) {
    .single-product {
            flex-direction: column;
            width: 80%;
            margin: auto;
            
        }
         .single-product .left, .single-product .right {
        width: 100%;
         }
       
        .recently-view-products .products {
            flex-direction: column;
            
         }
        .recently-view-products h1 {
         font-size: 30px;
        }
        .single-product .left {
             padding: 3rem 1rem;
         }
         .single-product .right h1 {
             font-size: 30px;
         }
        .single-product .right h2 {
         font-size: 18px;
         }
        .single-product .right h3 {
        font-size: 12px;
        }
        textarea {
        border-color: pink;
        padding: 1rem;
        }
        .content{
            flex-direction: column;
            justify-content: center;
            width: 90%;
            
        }
      .content img{
        max-width: 400px;
      }
    .mycarousel-div{
        width: 93.4%;
       
    }
    .content .left h1{
        font-size: 30px;
    }
        .mycarousel-div .text {
            margin: 0rem 3rem;
        }
        
    
}


</style>