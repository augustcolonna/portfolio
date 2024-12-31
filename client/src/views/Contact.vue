<script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';
  import Button from '@/components/ui/Button.vue';

  const name = ref<string>('');
  const userEmail = ref<string>('');
  const message = ref<string>('');

  const successMessage = ref<string>('');
  const errorMessage = ref<string>('');

  const emailSent = ref<boolean>();
  const buttonProps = ref({
    text: 'Send Email',
    size: 'md',
  });

  const buttonObject = () => {
    if (name.value && userEmail.value && message.value) {
      if (emailSent.value == false) {
        return (buttonProps.value = {
          text: 'Sending...',
          size: 'md',
        });
      }
    }
  };

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
        localStorage.removeItem('name');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('message');
      } else {
        throw new Error('Failed to send email.');
      }
    } catch (error) {
      successMessage.value = '';
      errorMessage.value = 'Something went wrong. Please try again later.';
    }
  };

  watch([name, userEmail, message], ([newName, newUserEmail, newMessage]) => {
    localStorage.setItem('name', newName);
    localStorage.setItem('userEmail', newUserEmail);
    localStorage.setItem('message', newMessage);
  });

  onMounted(() => {
    if (localStorage.getItem('name')) {
      name.value = localStorage.getItem('name') as string;
    }
    if (localStorage.getItem('userEmail')) {
      userEmail.value = localStorage.getItem('userEmail') as string;
    }
    if (localStorage.getItem('message')) {
      message.value = localStorage.getItem('message') as string;
    }
  });
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
      <textarea v-model="message" placeholder="Write your message here" required></textarea>
      <Button
        v-if="!emailSent"
        @click="buttonObject"
        type="submit"
        :text="buttonProps.text"
        :size="buttonProps.size"
      ></Button>
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
    animation: fade-in 0.8s;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
    }

    input {
      background-color: colors.$platinum;
      margin: 15px;
      border: none;
      padding: 12px;
      color: colors.$dark-purple;
      border-radius: 5px;
      width: 300px;

      &::placeholder {
        color: colors.$dark-purple;
      }
    }

    textarea {
      background-color: colors.$platinum;
      margin: 15px;
      border: none;
      padding: 12px;
      color: colors.$dark-purple;
      border-radius: 5px;
      height: 200px;
      width: 600px;
      resize: none;

      &::placeholder {
        color: colors.$dark-purple;
      }
    }

    @media only screen and (max-width: 600px) {
      input {
        width: 100%;
      }

      textarea {
        width: 100%;
      }

      form {
        width: 100%;
        padding: 0 10px;
      }
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
