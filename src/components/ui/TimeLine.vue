<script setup lang="ts">
  import { ref } from 'vue';
  import Button from '@/components/ui/Button.vue';
  import TimeLineModal from '@/components/ui/TimeLineModal.vue';
  import Kinexon from '@/assets/images/KINEXON.jpg';
  import Shopmokney from '@/assets/images/SHOPMONKEY.png';
  import Podium from '@/assets/images/PODIUM.png';
  import UofU from '@/assets/images/UOFU.png';

  const experiences = ref<Portfolio.ModalConfig[]>([
    {
      image: Kinexon,
      experienceName: 'Kinexon',
      experiencePosition: 'Software Engineer',
      startDate: 'Feb 1, 2024',
      endDate: 'Current',
      location: 'Munich, Germany',
      content:
        'Development of frontend and backend software components for the sensor network. Dev. of communication protocols. Dev. of interfaces to external IT systems. Dev. of full stack system tests. Support for product innovations and release cycles of existing products. Coordination with other departments.',
    },
    {
      experienceName: 'Career Switch',
      experiencePosition: 'Sales to Software Development',
      startDate: 'July 2022',
      endDate: ' Feb 2024',
      location: 'Remote',
      content:
        'During this time, I switched my career from sales to software development. I was provided the opportunity to change careers and chade something I was truly passtionate about. After around a year of selft study, and a technical bootcamp, I was able to secure my first job as a software engineer.',
    },
    {
      image: Shopmokney,
      experienceName: 'Shopmonkey',
      experiencePosition: 'Account Executive',
      startDate: 'March 2021',
      endDate: 'Novelmber 2022',
      location: 'Salt Lake City, UT',
      content:
        'Regularly met and surpassed monthly quota target and recognized as a top performer of the team. Represented the sales team for the enablement cohort (Cross departmental committee for product updates, changes, new processes, etc), also led sales training for the sales team. Prepared and delivered on-site presentations to high profile prospective customers.',
    },
    {
      image: Podium,
      experienceName: 'Podium',
      experiencePosition: 'Account Executive',
      startDate: 'May 2019',
      endDate: 'March 2021',
      location: 'Salt Lake City, UT',
      content:
        'Met and Surpassed monthly quota regularly. Maintained a rigid schedule of arriving at the office before 6 AM. Top Performer of 2019 and was invited to be part of the Founders Club. Promoted 3 times within 2 years',
    },
    {
      image: UofU,
      experienceName: 'The Unviserity of Utah',
      experiencePosition: 'Aisstant Coach',
      startDate: 'August 2018',
      endDate: 'May 2019',
      location: 'Salt Lake City, UT',
      content:
        'Assistant Coach for the Inaugural Division 1 Season.Served the organization as a captain for two consecutive seasons.Instrumental in building the culture and laying the foundation for future NCAA athletes.Offered the position as an assistant coach by Head Coach Brian Holman after senior season',
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
    <div class="see-more">
      Scroll Right To See More
      <i class="fa-solid fa-angles-right"></i>
    </div>
    <v-timeline direction="horizontal" align="center">
      <v-timeline-item class="timeline-item" size="large" v-for="item in experiences" :key="item.experienceName">
        <v-card>
          <v-card-title>{{ item.experienceName }}</v-card-title>
          <v-card-text>
            <p>
              {{ item.experiencePosition }}
              <br />
              {{ item.startDate }} - {{ item.endDate }}
              <br />
              {{ item.location }}
            </p>
            <Button @click="openModal(item.experienceName, item)" :text="'More'" :size="'sm'" />
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <TimeLineModal v-if="modalConfig" :config="modalConfig" @closeModal="closeModal" />
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_colors.scss' as colors;
  .timeline-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: colors.$dark-purple;
    margin-top: 20px;
    margin-bottom: 20px;
    animation: fade-in 1s ease-in;
    overflow-x: auto;
    overflow-y: auto;

    .see-more {
      color: colors.$platinum;
      font-size: 1.5rem;
      position: fixed;
      top: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.3;

      i {
        margin-left: 5px;
        animation: pulse 1.3s infinite;
      }
    }

    .v-timeline {
      width: 100%;
      height: 100%;
      position: relative;
      left: 10%;

      .v-timeline-item {
        .v-timeline-divider {
          color: colors.$platinum;
        }

        .v-card {
          width: 500px;
          height: 200px;
          background-color: colors.$platinum;
          color: colors.$platinum;
          border-radius: 5px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;

          &:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          }

          .v-card-title {
            font-size: 1.5rem;
            font-weight: 700;
            text-align: center;
            color: colors.$dark-purple;
          }

          .v-card-text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            // padding: 10px;

            p {
              font-size: 1rem;
              text-align: center;
              color: colors.$dark-purple;
            }
          }
        }
      }
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

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
