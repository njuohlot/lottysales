<template>
    <section>
        <div class="top">
            <div class="links">
                <router-link to="/shop"><span class="material-symbols-sharp">keyboard_backspace</span></router-link>
                <router-link to="/shop">Continue Shopping</router-link>
            </div>

            <h1>Checkout</h1>
        </div>

        <div class="cart-content">
            <div class="checkout-form">
                <div class="row">
                    <div class="col-75">
                        <div class="container">
                            <form action="/action_page.php">

                                <div class="row">
                                    <div class="col-50">
                                        <h3>Billing Address</h3>
                                        <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe">
                                        <label for="email"><i class="fa fa-envelope"></i> Email</label>
                                        <input type="text" id="email" name="email" placeholder="john@example.com">
                                        <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                                        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street">
                                        <label for="city"><i class="fa fa-institution"></i> City</label>
                                        <input type="text" id="city" name="city" placeholder="New York">

                                        <div class="row">
                                            <div class="col-50">
                                                <label for="state">State</label>
                                                <input type="text" id="state" name="state" placeholder="NY">
                                            </div>
                                            <div class="col-50">
                                                <label for="zip">Zip</label>
                                                <input type="text" id="zip" name="zip" placeholder="10001">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-50">
                                        <h3>Payment</h3>
                                        
                                        <label for="cname">Name on Card</label>
                                        <input type="text" id="cname" name="cardname" placeholder="John More Doe">
                                        <label for="ccnum">Credit card number</label>
                                        <input type="text" id="ccnum" name="cardnumber"
                                            placeholder="1111-2222-3333-4444">
                                        <label for="expmonth">Exp Month</label>
                                        <input type="text" id="expmonth" name="expmonth" placeholder="September">
                                        <div class="row">
                                            <div class="col-50">
                                                <label for="expyear">Exp Year</label>
                                                <input type="text" id="expyear" name="expyear" placeholder="2018">
                                            </div>
                                            <div class="col-50">
                                                <label for="cvv">CVV</label>
                                                <input type="text" id="cvv" name="cvv" placeholder="352">
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <label>
                                    <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as
                                    billing
                                </label>
                                <input type="submit" value="checkout" class="btn">
                            </form>
                        </div>
                    </div>

                </div>

            </div>

            <CheckOut />

        </div>
    </section>
</template>


<script>
import CheckOut from '@/components/CheckOut.vue'

export default {
    name: 'CheckoutView',
    data() {
        return {
            
        }
    },
    components: {
        CheckOut,
    }
}

</script>
<style scoped>
section {
    padding: 5rem 0;
}

section .cart-content {
    display: flex;
    align-items: top;
    justify-content: center;
    margin: auto;
}

section .checkout-form {
    width: 60%;
    padding-right: 3rem;
}


section .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    padding-top: 4rem;
}

section .top h1 {
    font-weight: 900;
    padding: 0.8rem 0;
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
}

section .top .links {
    display: flex;
    justify-content: center;
    align-items: center;

}

section .top .links a {
    font-weight: 600;
    padding: 0.8rem 0;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #000;
}

section .top .links span {
    background-color: red;
    color: #fff;
    padding: 0.5rem;
    border-radius: 100px;
    margin-right: 0.4rem;
}

section .top .links span:hover {
    background-color: #000;
    transition: all 0.5s ease-in-out;
}

@media screen and (max-width: 768px) {
    section .cart-content {
        flex-direction: column;
        margin: auto;
    }

    section .cart-content{
        width: 100%;
        padding: 1rem 1rem;
      
    }

    section .top {
        width: 60%;
        padding-top: 1rem;
    }

    section .top h1 {
        font-size: 30px;
    }

}

@media screen and (max-width: 1200px) {
    section .cart-content {
        flex-direction: column;
        margin: auto;
    }

    section .checkout-form {
        width: 100%;
        padding: 1rem 1rem;
    }

    section .top {
        width: 60%;
        padding-top: 1rem;
    }

    section .top h1 {
        font-size: 30px;
    }
}
* {
    box-sizing: border-box;
    
}

.row {
    display: -ms-flexbox;
    /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap;
    /* IE10 */
    flex-wrap: wrap;
    margin: 30px -16px;
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
}

.col-25 {
    -ms-flex: 25%;
    /* IE10 */
    flex: 25%;
}

.col-50 {
    -ms-flex: 50%;
    /* IE10 */
    flex: 50%;
}

.col-75 {
    -ms-flex: 75%;
    /* IE10 */
    flex: 75%;
}

.col-25,
.col-50,
.col-75 {
    padding: 0 16px;
}

.container {
    background-color: #ffffff;
    padding: 5px 20px 15px 20px;
    border-radius: 3px;
    font-family: 'Poppins', sans-serif;
}

input[type=text] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
}
input:focus{
    outline: none;
}

label {
    margin-bottom: 10px;
    display: block;
    font-family: 'Poppins', sans-serif;
}

.icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
}

.btn {
    background-color: #EDA024;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
    font-family: 'Poppins', sans-serif;
}

.btn:hover {
    background-color: #000;
}

a {
    color: #2196F3;
    font-family: 'Poppins', sans-serif;
}

hr {
    border: 1px solid lightgrey;
}

span.price {
    float: right;
    color: grey;
}


@media (max-width: 800px) {
    .row {
        flex-direction: column-reverse;
    }

    .col-25 {
        margin-bottom: 20px;
    }
}
</style>
