<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="navbar">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/resume">Resume</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped></style>
