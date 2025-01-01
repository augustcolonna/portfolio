declare namespace Portfolio {
  interface SocialLinks {
    name: string;
    link: string;
  }

  interface ModalConfig {
    experienceName?: string;
    experiencePosition?: string;
    startDate?: string;
    endDate?: string;
    location?: string;
    content?: string[];
  }

  interface ChatMessage {
    name: string;
    email: string;
    message: string;
  }
}
