<template>
    <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <h3>Add New Product </h3>
      
      <div class="form-group">
        <input type="text" id="name" v-model="form.name" placeholder="Enter product title" required />
      </div>
      <div class="form-group">
        <input type="number" id="price" v-model="form.price" placeholder="Enter product price" required />
      </div>
      <div class="form-group">
        <textarea id="description" v-model="form.description" placeholder="Enter product description" required></textarea>
      </div>
      <div class="form-group">
        <input type="file" id="image" @change="handleImageUpload" placeholder="Upload Product Image" required />
      </div>
      
      <v-btn color="amber" text-color:white type="submit">Submit</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        price: '',
        description: '',
        image: null
      },
    };
  },
  methods: {
    handleImageUpload(event) {
      this.form.image = event.target.files[0];
    },
    handleSubmit() {
      // Handle form submission logic here
      console.log(this.form);
    },
  },
};
</script>

<style>
.form-container {

  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

</style>