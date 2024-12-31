<script setup lang="ts">
  import Button from '@/components/ui/Button.vue';

  const socialLink: Portfolio.SocialLinks[] = [
    { name: 'linkedIn', link: 'https://www.linkedin.com/in/august-colonna/' },
    { name: 'Git Hub', link: 'https://www.github.com/augustcolonna/' },
  ];
</script>

<template>
  <div class="home-container">
    <div class="welcome">
      <h1 class="title">August Colonna</h1>
      <h2 class="title">Software Engineer</h2>
    </div>
    <div class="buttons">
      <RouterLink to="/about">
        <Button :text="'Get To Know Me'" :size="'lrg'" />
      </RouterLink>
      <RouterLink to="/contact">
        <Button :text="'Lets Chat'" :size="'lrg'" />
      </RouterLink>
    </div>
    <div class="social">
      <div class="social-links">
        <a
          v-for="link in socialLink"
          :key="link.name"
          :href="link.link"
          target="_blank"
          rel="noopener noreferrer"
          :class="{ right: link.name === 'Git Hub' }"
        >
          <i v-if="link.name === 'linkedIn'" class="fab fa-linkedin"></i>
          <i v-else class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_style-config.scss' as colors;

  .home-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    color: colors.$platinum;
    background: linear-gradient(to right, colors.$dark-purple 50%, colors.$platinum 50%);

    .welcome {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 80%;

      h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10rem;
        width: 100%;
        animation: fade-in 1s ease-in;
      }

      h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 9px;
        font-size: 3rem;
        animation: fade-in 1s ease-in;
      }

      .breakline {
        width: 100%;
        height: 3px;
        background-color: colors.$platinum;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 0;
      }
    }

    .buttons {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;
      animation: slide-up 1s ease-in;
    }

    .social {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-top: 20px;

      .social-links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        animation: slide-up 1s ease-in;

        a {
          margin: 0 20px;
          font-size: 4rem;
          color: colors.$platinum;
          transition: all 0.2s;

          &.right {
            color: colors.$dark-purple;
          }

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }

    @keyframes slide-up {
      0% {
        transform: translateY(50%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
</style>
