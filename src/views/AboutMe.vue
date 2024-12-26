<script setup lang="ts">
  const attributes: string[] = [
    'Lifelong Learner',
    '',
    '',
    'Outdoor Enthusiast ',
    'Espresso Consumer',
    '',
    '',
    'Problem Solver',
  ];
</script>

<template>
  <div class="about-container">
    <div class="about">
      <div class="about-left">
        <img src="@/assets/images/profile-img.png" alt="profile" />
        <div class="about-summary">
          <h1>A brief history</h1>
          <p>
            In 2019 I graduated from The University of Utah with a BS in Accountin with plans of becomming a certified
            public accountant, primarily focusing on tax accounting with ambition to one day step into forensic
            accounting. However, like many people, I did not start my professional career in the field that I had spent
            4 years studying.
            <br />
            <br />
            After graduation, I spent 4 years working as a sales person for various tech start ups. I knew that I wanted
            to do something more technical. After teaching myself how to code, moving to Germany, learning the German
            language, and completeing a technical coding bootcamp, I landed my first role as a software engineer in
            Munich, Germany at Kinexon.
          </p>
        </div>
      </div>
      <div class="about-right">
        <div v-for="attribute in attributes" :key="attribute">{{ attribute }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_colors.scss' as colors;
  .about-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    color: colors.$platinum;
    margin-left: 20px;

    .about {
      display: grid;
      grid-template-columns: 1fr 1fr;
      border: solid 5px colors.$platinum;
      border-radius: 69px 0px 55px 0px;
      margin: 0px 20px;

      .about-left {
        background-color: colors.$platinum;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        border-radius: 55px 0px 0px 0px;

        img {
          height: 450px;
          border-radius: 50%;
          animation: fade-in 1s ease-in;
        }

        .about-summary {
          padding: 5px;
          margin: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          h1 {
            text-align: center;
            color: colors.$dark-purple;
            margin-bottom: 15px;
            // animation: slide-down 1s ease-in;
          }

          p {
            text-align: left;
            color: colors.$dark-purple;
            line-height: 1.7rem;
            margin-top: 10px;
            margin-right: 15px;
            animation: slide-up 1s ease-in;
          }
        }
      }

      .about-right {
        margin-left: 0;
        padding-left: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 700;
          font-size: 1.7rem;
        }

        div:nth-child(1) {
          background-color: colors.$dark-purple;
          animation: fade-in 1s ease-in;
        }
        div:nth-child(2) {
          background-color: colors.$platinum;
        }
        div:nth-child(3) {
          background-color: colors.$platinum;
        }
        div:nth-child(4) {
          background-color: colors.$dark-purple;
          animation: fade-in 1.3s ease-in;
        }
        div:nth-child(5) {
          background-color: colors.$dark-purple;
          animation: fade-in 1.6s ease-in;
        }
        div:nth-child(6) {
          background-color: colors.$platinum;
        }
        div:nth-child(7) {
          background-color: colors.$platinum;
        }
        div:nth-child(8) {
          background-color: colors.$dark-purple;
          animation: fade-in 1.9s ease-in;
          border-radius: 0px 0px 55px 0px;
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
</style>
