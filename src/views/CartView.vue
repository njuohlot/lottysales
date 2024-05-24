<template>
    <section>
        <div class="top">
            <div class="links">
                <router-link to="/shop"><span class="material-symbols-sharp">keyboard_backspace</span></router-link>
                <router-link to="/shop">Continue Shopping</router-link>
            </div>
            
            <h1>Your cart</h1>
        </div>
        
        <div class="cart-content">
            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="../assets/images/p1.avif" alt="" width="120px"></td>
                            <td><div>
                                <h3>Barley Textured Panelled Low-Top Shoes</h3>
                                    <span id="size"><b>Size</b>: 26</span>
                                </div></td>
                            <td><h2>698.00USD</h2></td>
                            <td>
                                <div class="quantity-update">
                                    <span class="material-symbols-sharp" @click="count--">remove</span>
                                    <span class="update-value">{{ count }}</span>
                                   
                                    <span class="material-symbols-sharp" @click="count++">add</span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h2>2,792.00USD</h2>
                                    <span class="material-symbols-sharp" id="delete">delete</span>
                                </div></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/images/p2.avif" alt="" width="120px"></td>
                            <td><div>
                                <h3>Sarley Textured Panelled Low-Top Shoes</h3>
                                    <span id="size"><b>Size</b>: 13</span>
                                </div></td>
                            <td><h2>198.00USD</h2></td>
                            <td>
                                <div class="quantity-update">
                                    <span class="material-symbols-sharp" @click="count--">remove</span>
                                    <span class="update-value">{{ count }}</span>
                                   
                                    <span class="material-symbols-sharp" @click="count++">add</span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h2>4,792.00USD</h2>
                                    <span class="material-symbols-sharp" id="delete">delete</span>
                                </div></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/images/p3.avif" alt="" width="120px"></td>
                            <td><div>
                                <h3>Tarley Textured Panelled Low-Top Shoes</h3>
                                    <span id="size"><b>Size</b>: 36</span>
                                </div></td>
                            <td><h2>998.00USD</h2></td>
                            <td>
                                <div class="quantity-update">
                                    <span class="material-symbols-sharp" @click="count--">remove</span>
                                    <span class="update-value">{{ count }}</span>
                                   
                                    <span class="material-symbols-sharp" @click="count++">add</span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h2>3,792.00USD</h2>
                                    <span class="material-symbols-sharp" id="delete">delete</span>
                                </div></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/images/p1.avif" alt="" width="120px"></td>
                            <td><div>
                                <h3>Barley Textured Panelled Low-Top Shoes</h3>
                                    <span id="size"><b>Size</b>: 26</span>
                                </div></td>
                            <td><h2>698.00USD</h2></td>
                            <td>
                                <div class="quantity-update">
                                    <span class="material-symbols-sharp" @click="count--">remove</span>
                                    <span class="update-value">{{ count }}</span>
                                   
                                    <span class="material-symbols-sharp" @click="count++">add</span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h2>2,792.00USD</h2>
                                    <span class="material-symbols-sharp" id="delete">delete</span>
                                </div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
           
              <CheckOut/>
            
        </div>
    </section>
</template>


<script>
import CheckOut from '@/components/CheckOut.vue'
import { ref } from 'vue'
const count = ref(0)
export default{
    name: 'CartView',
    data(){
        return{
           count,
        }
    },
    components:{
        CheckOut,
    }
}

</script>
<style scoped>
section{
    padding: 5rem 0;
}
section .cart-content{
    display: flex;
    align-items: center;
    justify-content: center;
   margin: auto;
}
section .table{
    width: 60%;
    padding-right: 3rem;
}
section .table table{
    width: 100%;
    text-align: left;
    overflow-x: scroll;
   
}
section .table table th{
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
}
section .table table thead tr{
    border: 1px solid #000;
}
section .table table tr{
    padding-top: 20rem;
}
th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  table h3{
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
  }
  table  #size{
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    padding: 0.4rem 0;
  }
  table h2{
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
  }
  table h2{
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
  }
  table #delete{
    color: red;
    padding: 0.4rem 0rem;
    cursor: pointer;
  }
  table .quantity-update{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid pink;
    padding: 0.5rem 0;
  }
  .quantity-update .update-value{
    font-weight: 700;
    padding: 0rem 0.5rem;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }
  .quantity-update span{
    cursor: pointer;
    color: #000;
    
  }
  section .top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    padding-top: 4rem;
  }
  section .top h1{
    font-weight: 900;
    padding: 0.8rem 0;
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
  }
  section .top .links{
    display: flex;
    justify-content: center;
    align-items: center;

  }
  section .top .links a{
   font-weight: 600;
    padding: 0.8rem 0;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #000;
  }
  section .top .links span{
    background-color: red;
    color: #fff;
    padding: 0.5rem;
    border-radius: 100px;
    margin-right: 0.4rem;
  }
  section .top .links span:hover{
    background-color: #000;
    transition: all 0.5s ease-in-out;
  }
  @media screen and (max-width: 768px) {
    section .cart-content{
flex-direction: column;
     margin: auto;
}
section .table{
    width: 100%;
    padding: 1rem 1rem;
    overflow-x: scroll;
}
section .top{
    width: 60%;
    padding-top: 1rem;
  }
  section .top h1{
    font-size: 30px;
  }
 
  }
  @media screen and (max-width: 1200px) {
    section .cart-content{
     flex-direction: column;
     margin: auto;
}
section .table{
    width: 100%;
    padding: 1rem 1rem;
    overflow-x: scroll;
}
section .top{
    width: 60%;
    padding-top: 1rem;
  }
  section .top h1{
    font-size: 30px;
  }
}
</style>

