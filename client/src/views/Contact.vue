<script setup lang="ts">
  import { ref } from 'vue';
  import Button from '@/components/ui/Button.vue';

  const name = ref<string>('');
  const userEmail = ref<string>('');
  const message = ref<string>('');

  const successMessage = ref<string>('');
  const errorMessage = ref<string>('');

  const emailSent = ref<boolean>();

  const sendEmail = async () => {
    try {
      emailSent.value = false;
      const response = await fetch('http://localhost:8080/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.value,
          email: userEmail.value,
          message: message.value,
        }),
      });

      if (response.ok) {
        successMessage.value = 'Your email was sent successfully!';
        errorMessage.value = '';
        name.value = '';
        userEmail.value = '';
        message.value = '';
        emailSent.value = true;
      } else {
        throw new Error('Failed to send email.');
      }
    } catch (error) {
      successMessage.value = '';
      errorMessage.value = 'Something went wrong. Please try again later.';
    }
  };
</script>

<template>
  <div class="contact-container">
    <h1 class="title">
      Send me an email
      <i class="fas fa-envelope"></i>
    </h1>

    <form @submit.prevent="sendEmail">
      <input v-model="name" placeholder="First name, last name" required />
      <input v-model="userEmail" type="email" placeholder="example@example.com" required />
      <textarea v-model="message" placeholder="Write email here" required></textarea>
      <Button v-if="!emailSent" type="submit" text="Send Email" size="md"></Button>
      <Button v-if="emailSent" text="Email Sent!" size="md"></Button>
    </form>

    <p v-if="successMessage">{{ successMessage }}</p>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_style-config.scss' as colors;
  .contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    color: colors.$platinum;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
    }

    input {
      background-color: transparent;
      margin: 15px;
      border: solid 1px colors.$platinum;
      padding: 12px;
      color: colors.$platinum;
      border-radius: 5px;
      width: 300px;

      &::placeholder {
        color: colors.$platinum;
      }
    }

    textarea {
      background-color: transparent;
      margin: 15px;
      border: solid 1px colors.$platinum;
      padding: 12px;
      color: colors.$platinum;
      border-radius: 5px;
      height: 200px;
      width: 600px;

      &::placeholder {
        color: colors.$platinum;
      }
    }
  }
</style>
