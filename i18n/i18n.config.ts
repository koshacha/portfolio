export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ru",
  messages: {
    en: {
      nav: {
        home: "Home",
        anken: "Projects",
        shigoto: "Work",
        hito: "Profile",
        resume: "Download CV",
      },
      footer: {
        "back-to-top": "Back to top",
        updated: "Last updated",
        contact: "Contact",
      },
      "not-found": {
        title: "The page you're looking for doesn't exist.",
        button: "Return Home",
      },
      projects: {
        title: "Projects",
        all: "All Work",
        details: "Details",
      },
      contacts: {
        elsewhere: "Elsewhere",
      },
      work: {
        title: "Background",
      },
      logo: {
        verb: "Verb",
        first: "To indicate; to show; to demonstrate",
        second: "To reveal; to display.",
      },
    },
    ru: {
      nav: {
        home: "Главная",
        anken: "Проекты",
        shigoto: "Работа",
        hito: "Обо мне",
        resume: "Скачать портфолио",
      },
      footer: {
        "back-to-top": "Наверх",
        updated: "Обновлено",
        contact: "Связаться",
      },
      "not-found": {
        title: "Страницы, которую вы ищете, не существует.",
        button: "На главную",
      },
      projects: {
        title: "Проекты",
        all: "Все",
        details: "Детали",
      },
      contacts: {
        elsewhere: "Другое",
      },
      work: {
        title: "История трудоустройства",
      },
      logo: {
        verb: "Глагол",
        first: "указывать; показывать, обозначать",
        second: "выражать; проявлять; демонстрировать.",
      },
    },
  },
}));
