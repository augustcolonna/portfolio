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
    <div class="history-container">
      <img src="@/assets/images/profile-img.png" alt="profile" />
      <div class="history">
        <h1>A brief history</h1>
        <p>
          In 2019 I graduated from The University of Utah with a BS in Accountin with plans of becomming a certified
          public accountant, primarily focusing on tax accounting with ambition to one day step into forensic
          accounting. However, like many people, I did not start my professional career in the field that I had spent 4
          years studying.
          <br />
          <br />
          After graduation, I spent 4 years working as a sales person for various tech start ups. I knew that I wanted
          to do something more technical. After teaching myself how to code, moving to Germany, learning the German
          language, and completeing a technical coding bootcamp, I landed my first role as a software engineer in
          Munich, Germany at Kinexon.
        </p>
      </div>
    </div>
    <div class="attributes">
      <div v-for="attribute in attributes" :key="attribute" class="attribute">
        <div>{{ attribute }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_style-config.scss' as colors;
  .about-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    color: colors.$platinum;
    padding: 0;
    margin: 0 auto;
    overflow-y: auto;

    .history-container {
      background-color: colors.$platinum;
      display: flex;
      width: 80%;
      height: 100%;
      margin-top: 30px;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      border-radius: 59px 59px 0px 0px;

      img {
        height: 450px;
        border-radius: 50%;
        animation: fade-in 1s ease-in;
      }

      .history {
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

    .attributes {
      margin-bottom: 30px;
      height: 700px;
      width: 80%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      border: solid 3px colors.$platinum;
      border-radius: 0px 0px 58px 58px;

      .attribute {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 1.7rem;
        opacity: 0;
        animation: fade-in 0.8s forwards;
      }

      .attribute:nth-child(1) {
        background-color: colors.$dark-purple;
      }
      .attribute:nth-child(2) {
        background-color: colors.$platinum;
      }
      .attribute:nth-child(3) {
        background-color: colors.$platinum;
      }
      .attribute:nth-child(4) {
        background-color: colors.$dark-purple;
      }
      .attribute:nth-child(5) {
        background-color: colors.$dark-purple;
      }
      .attribute:nth-child(6) {
        background-color: colors.$platinum;
      }
      .attribute:nth-child(7) {
        background-color: colors.$platinum;
        border-radius: 0px 0px 0px 55px;
      }
      .attribute:nth-child(8) {
        background-color: colors.$dark-purple;
        border-radius: 0px 0px 58px 0px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .about-container {
      height: auto; // Allow the container to take auto height
      padding: 20px; // Add some padding for better spacing
      margin-top: 50px;

      .history-container {
        flex-direction: column;
        width: 100%;
        margin-top: 20px;

        img {
          height: 200px;
        }

        .history {
          padding: 10px;
          margin: 0;
          width: 100%;

          p {
            margin-right: 0;
          }
        }
      }

      .attributes {
        width: 100%;
        height: auto;

        border-radius: 0px 0px 58px 58px;

        .attribute {
          font-size: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
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
</style>
