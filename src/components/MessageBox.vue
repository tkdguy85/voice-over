<template>
  <form @submit.prevent="submitForm" class="contact-form">
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
  margin: 0 auto;
}
</style>