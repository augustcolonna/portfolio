<script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';
  import emailjs from 'emailjs-com';
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
    emailSent.value = false;
    const templateParams = {
      from_name: name.value,
      from_email: userEmail.value,
      message: message.value,
    };

    await emailjs.send('service_mfcg2es', 'template_b86pr4y', templateParams, 'pnwaGUZVCwK3-HyMX').then(
      (response) => {
        if (response.status === 200) {
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
      },
      (error) => {
        successMessage.value = '';
        errorMessage.value = 'Something went wrong. Please try again later.';
        console.log('error:', error);
      }
    );
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
      Shoot me a message
      <i class="fa fa-envelope"></i>
    </h1>

    <form @submit.prevent="sendEmail">
      <label for="name">
        Name
        <input v-model="name" placeholder="First name, last name" required />
      </label>

      <label for="userEmail">
        Your Email address - so I can get back to you
        <input v-model="userEmail" type="email" placeholder="example@example.com" required />
      </label>

      <label for="message">
        Message
        <textarea v-model="message" placeholder="Write your message here" required></textarea>
      </label>

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
    width: 70%;
    color: colors.$platinum;
    animation: fade-in 0.8s;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    label {
      font-size: 1.2rem;
      margin: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: solid 4px colors.$platinum;
      padding: 10px;
      border-radius: 15px;
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

    @media only screen and (max-width: 768px) {
      .contact-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        color: colors.$platinum;
        animation: fade-in 0.8s;
      }
      form {
        width: 100%;
        padding: 0 10px;
      }
      label {
        width: 100%;
      }

      input {
        width: 100%;
      }

      textarea {
        width: 100%;
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
