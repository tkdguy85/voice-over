<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <p>Message Box</p>
    <label for="name">Name</label>
    <input type="text" id="name" v-model="name" required>

    <label for="email">Email</label>
    <input type="email" id="email" v-model="email" required>

    <label for="number">Number</label>
    <input type="number" id="number" v-model="number" required>

    <label for="message">Message Box:</label>
    <textarea id="message" v-model="message"></textarea>
    
    <button type="submit">Send</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      number: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted')
    }
  }
};
</script>

<style scoped>
.contact-form {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
  margin: 10px 200px;
}

label {
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 2px solid black;
  border-radius: 4px;
}

button[type='submit'] {
  background-color: darkturquoise;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}

button[type='submit']:hover {
  background-color: mediumturquoise;
}

</style>