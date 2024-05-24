
<template>

<button class="add-to-cart">{{ title }}</button>
</template>
<script>
export default{
    name: 'AddToCartButton',
    props:{
        title: String
    }
}


</script>
<style scope>
   
   .add-to-cart{
    display: inline-flex;
    align-items: center;
    padding: 15px 40px;
    background: #f16e36;
    font-size: 12px;
    line-height: 1;
    font-weight: 600;
    letter-spacing: .5px;
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
 .add-to-cart:hover{
  background-color: #fff;
  color: #000;
 }
 .add-to-cart::after{
    content: '\e8cc';
    font-size: 12px;
    padding: 0.3rem;
    border-radius: 100px;
    color: #fff;
    background-color: green;
    font-family: "Material Symbols Sharp";
    margin-left: 0.5rem;
 }

 @media screen and (max-width: 768px) {
    .add-to-cart{
        width: 100%;
    }
    
 }
   

</style>