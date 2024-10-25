<template>
  
  
  <div class="products-container">
        <div class="product-card" v-for="product in products"  :key="product.id" :product="product">
           
            <img :src="getImage(product.img)" :alt="product.title">
            <div class="product-title">{{ product.title }}</div>
            <div class="product-bio">{{ product.bio }}</div>
            <div class="product-price">{{ product.price }}</div>
            <v-btn  color="purple" rounded="xl" elevation="6" text-color="#F5F5DC" @click="buy" outlined>Buy Now</v-btn>
          </div>
          
        </div>
  

</template>

<script>
export default {
  data: () => ({
    products: [
      {
        id: 1,
        img: "hotBarb.jpg",
        title: "Hot Barbeque",
        price: "$10",
        bio: "Crunchy, spicy, and smoky roasted lotus seeds perfect for a guilt-free snack!"
      },
      {
        id: 2,
        img: "cheeseChilli.jpg",
        title: "Cheese Chilli",
        price: "$10",
        bio: "Crunchy, spicy, and smoky roasted lotus seeds perfect for a guilt-free snack!"
      },
      {
        id: 3,
        img: "periperi.jpg",
        title: "Peri Peri",
        price: "$10",
        bio: "Crunchy, spicy, and smoky roasted lotus seeds perfect for a guilt-free snack!"
      },
      {
        id: 4,
        img: "himSalt.jpg",
        title: "Himalayan Salt",
        price: "$10",
        bio: "Crunchy, spicy, and smoky roasted lotus seeds perfect for a guilt-free snack!"
      },
      {
        id: 5,
        img: "tangyTomato.jpg",
        title: "Tangy Tomato",
        price: "$10",
        bio: "Crunchy, spicy, and smoky roasted lotus seeds perfect for a guilt-free snack!"
      }
    ]
  }),
  methods: {
    getImage(imgPath) {
      return require(`../../assets/${imgPath}`);
    },
    buy() {
      alert("bought");
    }

  }

};
</script>
<style>
.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: plum;

}

.product-card {
  border: 1px solid #ddd;
  padding: 5px;
  margin: 5px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  
  box-sizing: border-box;
  background-color: white;
  
}

.product-card img {
  max-width: 100%;
  border-radius: 8px;
}

.product-title {
  font-size: 1.5em;
  margin: 8px 0;
  text-align: center;
}

.product-bio {
  color: #555;
  text-align: center;
}

.product-price {
  color: #b12704;
  font-size: 1.2em;
  margin-top: 8px;
  text-align: center;
}
</style>