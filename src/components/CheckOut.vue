<template>
    <section id="check-out">
        
        
        <div id="sub-title">
            <h1>Subtotal</h1>
            <h2>4,968.00USD</h2>
            <p>Taxes and shipping calculated at checkout</p>
            <AddToCartButton title="Checkout"/>
        </div>
    </section>
</template>


<script>
import AddToCartButton from './AddToCartButton.vue'
  export default{
    name: 'CheckOut',
    data(){
        return{

            notes: '',
        }
    },
    components:{
        AddToCartButton,
    }
  }
</script>

<style scoped>

section label{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 700;
}
section textarea{
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin-top: 0.8rem;
    padding: 1rem;
    border-color: pink;
    background-color: transparent;
    outline: none;

}
#sub-title{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem 2rem;
    border: 1px solid pink;
    margin: 1.5rem 0rem;
}
#sub-title h1{
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 700;
    padding: 1rem;
}
#sub-title h2{
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 700;
    padding: 0.2rem;
}
#sub-title p{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    padding: 0.4rem;
}

@media screen and (max-width: 768px) {
    #check-out{
        width: 80%;
        padding: 1rem;
    }
}

</style>