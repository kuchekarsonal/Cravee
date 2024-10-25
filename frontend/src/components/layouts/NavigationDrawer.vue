<template>
    <nav>
        
    <div class="menu-item"> <img style=" max-width: 100%;  border-radius: 8px; height:100px " :src="require('@/assets/og.png')"></div>
 
    
     <div class="menu-item"><router-link to="/">Home</router-link></div>
     <div class="menu-item"><router-link to="/Products">Products</router-link></div>
     <div class="menu-item"><router-link to="/CorporateGifting">CorporateGifting</router-link></div>
     <div class="menu-item"><router-link to="/ContactUs">ContactUs</router-link></div>
     <div class="menu-item"><router-link to="/AboutUs">AboutUs</router-link></div>
     <div class="menu-item"><router-link to="/Login">Login</router-link></div>
     </nav>
  
  </template>
  <script>
  
      export default {
          name: 'NavigationDrawer',
          methods:{
              scrollToTop() {
              window.scrollTo(0, 0);
          }
          }
      }
  </script>
  
  <style>
  
  nav{
      display: flex;
      align-items: center;
      justify-content: center;
      position: sticky;
      position: -webkit-sticky; /* For Safari */
      top: 0;
      padding: 5px;
      z-index: 1000; /* Ensure it stays above other content */
      background-color: white;
    height:100px
  
  }

  nav .menu-item{
      color: #FFF;
      padding: 10px 10px;
      position: relative; 
      text-align: center;
      
      border-bottom: 3px solid transparent;
      display: 100%;
      transition: 0.4s;
     
  }
  
  nav .menu-item a{
      color: #5c3327;
      text-decoration: none;
      
      font-size: 20px;
      line-height: 20px;
      font-weight: 500;
      text-transform: capitalize;
      padding: 10px 20px;
      letter-spacing: .5px
  }
  
  
  </style>