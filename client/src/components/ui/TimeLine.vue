<script setup lang="ts">
  import { ref } from 'vue';
  import Button from '@/components/ui/Button.vue';
  import TimeLineModal from '@/components/ui/TimeLineModal.vue';

  const experiences = ref<Portfolio.ModalConfig[]>([
    {
      // image: Kinexon,
      experienceName: 'Kinexon',
      experiencePosition: 'Software Engineer',
      startDate: 'Feb 1, 2024',
      endDate: 'Current',
      location: 'Munich, Germany',
      content: [
        'Development of frontend and backend software components for the sensor network.',
        ' Dev. of communication protocols.',
        'Dev. of full stack system tests.',
        'Support for product innovations and release cycles of existing products.',
        'Coordination with other departments.',
      ],
    },
    {
      experienceName: 'Career Switch',
      startDate: 'July 2022',
      endDate: ' Feb 2024',
      location: 'Remote',
      content: [
        'During this time, I switched my career from sales to software development.',
        'I was provided the opportunity to change careers and chade something I was truly passtionate about.',
        'After around a year of selft study, and a technical bootcamp, I was able to secure my first job as a software engineer.',
      ],
    },
    {
      // image: Shopmokney,
      experienceName: 'Shopmonkey',
      experiencePosition: 'Account Executive',
      startDate: 'March 2021',
      endDate: 'Novelmber 2022',
      location: 'Salt Lake City, UT',
      content: [
        'Regularly met and surpassed monthly quota target and recognized as a top performer of the team.',
        'Represented the sales team for the enablement cohort (Cross departmental committee for product updates, changes, new processes, etc), also led sales training for the sales team.',
        'Prepared and delivered on-site presentations to high profile prospective customers.',
      ],
    },
    {
      // image: Podium,
      experienceName: 'Podium',
      experiencePosition: 'Account Executive',
      startDate: 'May 2019',
      endDate: 'March 2021',
      location: 'Salt Lake City, UT',
      content: [
        'Met and Surpassed monthly quota regularly.',
        'Maintained a rigid schedule of arriving at the office before 6 AM.',
        'Top Performer of 2019 and was invited to be part of the Founders Club.',
        'Promoted 3 times within 2 years',
      ],
    },
    {
      // image: UofU,
      experienceName: 'The Unviserity of Utah',
      experiencePosition: 'Aisstant Coach',
      startDate: 'August 2018',
      endDate: 'May 2019',
      location: 'Salt Lake City, UT',
      content: [
        'Assistant Coach for the Inaugural Division 1 Season.',
        'Served the organization as a captain for two consecutive seasons.',
        'Instrumental in building the culture and laying the foundation for future NCAA athletes.',
        'Offered the position as an assistant coach by Head Coach Brian Holman after senior season',
      ],
    },
    {
      // image: UofU,
      experienceName: 'Williams College',
      experiencePosition: 'Summer Research Assistant',
      startDate: 'June 2017',
      endDate: 'August 2017',
      location: 'Williamstown, MA',
      content: [
        'Research Assistant to Professor David Zimmerman, Economics.',
        'Helped Professor David Zimmerman prepare for his sports econometrics class.',
        'Provided Prof. Zimmerman with weekly memos containing questions, information and data points from various sports analytics research journals to use and include in his upcomming semester.',
      ],
    },
  ]);

  const modalConfig = ref<Portfolio.ModalConfig | null>(null);
  const modalToShow = ref('');

  const openModal = (modalId: string, config: Portfolio.ModalConfig): void => {
    modalToShow.value = modalId;
    modalConfig.value = config;
  };

  const closeModal = (): void => {
    modalToShow.value = '';
    modalConfig.value = null;
  };
</script>

<template>
  <div class="timeline-container">
    <div class="timeline-item" v-for="item in experiences" :key="item.experienceName">
      <div class="timeline-card">
        <div class="card-title title">{{ item.experienceName }}</div>
        <div class="card-text">
          <p>
            {{ item.experiencePosition }}
            <br />
            {{ item.startDate }} - {{ item.endDate }}
            <br />
            {{ item.location }}
          </p>
          <Button @click="openModal(item.experienceName ?? '', item)" :text="'More'" :size="'sm'" />
        </div>
      </div>
    </div>

    <TimeLineModal v-if="modalConfig" :config="modalConfig" @closeModal="closeModal" />
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_style-config.scss' as colors;
  .timeline-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100%;
    color: colors.$dark-purple;
    // margin-top: 0;
    // margin-bottom: 20px;
    animation: fade-in 1s ease-in;
    overflow-y: auto;

    .timeline-item {
      margin: 30px;

      .timeline-card {
        width: 500px;
        height: 200px;
        background-color: colors.$platinum;
        color: colors.$platinum;
        border-radius: 5px;
        opacity: 0;
        animation: fade-in 0.8s forwards;

        &:hover {
          box-shadow: 0 0px 6px colors.$platinum;
          cursor: pointer;
        }

        .card-title {
          margin-bottom: 10px;
          font-size: 1.5rem;
          font-weight: 700;
          text-align: center;
          color: colors.$dark-purple;
        }

        .card-text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          p {
            font-size: 1rem;
            text-align: center;
            color: colors.$dark-purple;
            margin-bottom: 10px;
          }
        }
      }

      @for $i from 1 through 10 {
        .timeline-item:nth-child(#{$i}) .timeline-card {
          animation-delay: #{0.2 * $i}s;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .timeline-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 0px;
      // height: 100vh;
      // width: 100%;
      color: colors.$dark-purple;
      animation: fade-in 1s ease-in;
      // overflow-y: auto;

      .timeline-item {
        margin: 30px;
        width: 70%;

        .timeline-card {
          width: 100%;
          height: 100%;
          background-color: colors.$platinum;
          color: colors.$platinum;
          border-radius: 5px;
          opacity: 0;
          animation: fade-in 0.8s forwards;

          &:hover {
            box-shadow: 0 0px 6px colors.$platinum;
            cursor: pointer;
          }

          .card-title {
            margin-bottom: 10px;
            font-size: 1.5rem;
            font-weight: 700;
            text-align: center;
            color: colors.$dark-purple;
          }

          .card-text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            p {
              font-size: 1rem;
              text-align: center;
              color: colors.$dark-purple;
              margin-bottom: 10px;
            }
          }
        }

        @for $i from 1 through 10 {
          .timeline-item:nth-child(#{$i}) .timeline-card {
            animation-delay: #{0.2 * $i}s;
          }
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
</style>
