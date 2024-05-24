<template>
  <NavBarVue/>
  <router-view />
  <FooterTemplate/>
</template>

<script>
import NavBarVue from './components/NavBar.vue'
import FooterTemplate from './components/FooterTemplate.vue';
export default{
  name: 'App',

  components:{
    NavBarVue,
    FooterTemplate
  }
}

</script>
<style>
*{
  padding: 0;
  margin: 0;
  box-shadow: border-box;
}
a{
  text-decoration: none;
}
li{
  list-style-type: none;
}
body{
    background-color: #F2F7FA;
}
</style>
