export const portfolio = {
  person: {
    name: 'Антон Зорин',
    role: 'Frontend Engineer',
  },
  hero: {
    label: 'АНТОН ЗОРИН — FRONTEND ENGINEER',
    title: 'Сложные интерфейсы. Понятные решения.',
    description:
      'Проектирую и развиваю продуктовые SPA- и SSR-приложения на Vue, Nuxt и TypeScript — от архитектуры и бизнес-логики до UI-систем и интеграций.',
    availability: 'Открыт к продуктовой frontend-роли',
    facts: [
      'почти 5 лет опыта',
      'Vue / Nuxt / TypeScript',
      'Казань',
      'удалённо или гибрид',
    ],
  },
  capabilities: {
    eyebrow: '01 — ПРОФИЛЬ',
    title: 'Что я беру на себя',
    description: 'Не набор технологий, а четыре области ответственности за результат.',
    items: [
      {
        title: 'Сложные продуктовые интерфейсы',
        description: 'Таблицы, фильтры, сортировка, пагинация, канбан и административные сценарии.',
        example: 'Пример → универсальная таблица с настройкой колонок',
      },
      {
        title: 'Архитектура и развитие продукта',
        description: 'Состояние, бизнес-логика, API, авторизация и развитие пользовательских сценариев.',
        example: 'Пример → Nuxt 3-продукт с нуля',
      },
      {
        title: 'Миграции и существующие системы',
        description: 'Vue 2 → Vue 3, TypeScript и рефакторинг с сохранением текущего поведения.',
        example: 'Пример → поэтапная миграция без остановки продукта',
      },
      {
        title: 'Качество интерфейса',
        description: 'UI-библиотеки, SSR, SEO, производительность, тесты и строгий Code Review.',
        example: 'Пример → переиспользуемые компоненты и критерии готовности',
      },
    ],
  },
  selectedWork: {
    eyebrow: '02 — РАБОТА',
    title: 'Selected Work',
    description: 'Два публичных продукта: решения, ограничения и способы проверить результат.',
    jobAiAssistant: {
      id: 'job-ai',
      status: 'PUBLIC · ACTIVE DEVELOPMENT',
      title: 'Job AI Assistant',
      url: 'https://github.com/Zorii4/job-ai-assistant',
      summary:
        'Публичное web-приложение для управляемого поиска работы: frontend, NestJS API, PostgreSQL / Prisma, авторизация, библиотека резюме, background worker и initial multi-agent workflow.',
      steps: [
        ['Задача', 'Собрать процесс работы с вакансиями и версиями резюме в одном продукте.'],
        ['Ограничения', 'Асинхронные операции, внешние LLM-ответы и необходимость проверяемого результата.'],
        ['Решение', 'Декомпозиция frontend → API → worker → agent workflow с явными границами.'],
        ['Проверка', 'Публичный репозиторий, рабочий сценарий и определённые критерии готовности.'],
      ],
      proof: ['frontend + NestJS API', 'PostgreSQL / Prisma', 'background worker', 'публичный репозиторий'],
      media: {
        main: 'JOB_AI_SCREEN_01_MAIN_UI',
        mainRatio: '16 / 10',
        secondary: 'JOB_AI_SCREEN_02_RESUME_LIBRARY',
        secondaryRatio: '16 / 10',
        diagram: 'JOB_AI_DIAGRAM_01_ARCHITECTURE',
      },
    },
    mealMemoryBot: {
      id: 'meal-memory-bot',
      status: 'DEPLOYED · PERSONAL PRODUCT',
      title: 'Meal Memory Bot',
      url: 'https://github.com/Zorii4/meal-memory-bot',
      summary: 'Telegram-бот для выбора блюда, где AI помогает принять решение, но не заменяет предсказуемую бизнес-логику.',
      steps: [
        ['Задача', 'Снизить бытовую нагрузку выбора и помнить историю подходящих блюд.'],
        ['Ограничения', 'LLM может вернуть невалидный или нестабильный ответ.'],
        ['Решение', 'Детерминированная логика → AI-клиент → validation → fallback.'],
        ['Проверка', 'Развёрнутый сценарий, автоматические тесты и обработка ошибок.'],
      ],
      proof: ['deployed', 'covered by tests', 'validation', 'fallback scenarios'],
      media: {
        main: 'MEAL_BOT_SCREEN_01_TELEGRAM',
        mainRatio: '9 / 16',
        secondary: 'MEAL_BOT_SCREEN_02_RECOMMENDATION',
        secondaryRatio: '9 / 16',
        diagram: 'MEAL_BOT_DIAGRAM_01_DECISION_FLOW',
      },
    },
    additional: [
      {
        title: 'Nebus Notes',
        description: 'Требования → реализация → внешнее ревью → анализ замечаний → улучшенная версия.',
        url: 'https://github.com/Zorii4/nebus-notes',
      },
      {
        title: 'Kafka UI / open source',
        description: 'React, Redux Toolkit, TypeScript, Jest и строгий Code Review в международном проекте.',
        url: undefined,
      },
      {
        title: 'GitHub',
        description: 'Остальные репозитории и инженерные эксперименты — github.com/Zorii4.',
        url: 'https://github.com/Zorii4',
      },
    ],
  },
  impact: {
    eyebrow: '03 — ПРОФЕССИОНАЛЬНЫЙ ВКЛАД',
    title: 'Selected Professional Impact',
    description: 'Реальные типы коммерческих задач — без вымышленных screenshots закрытых продуктов.',
    items: [
      ['Универсальная таблица', 'filter → sort → pagination → column settings'],
      ['Канбан-доска', 'state transitions · optimistic UI · edge cases'],
      ['UI-библиотека', 'tokens → components → product screens'],
      ['Vue 2 → Vue 3 + TypeScript', 'migration boundaries · compatibility · controlled refactor'],
      ['Nuxt 3 с нуля', 'architecture · auth · API · SSR / SEO'],
      ['Legacy и качество', 'tests · Code Review · performance · preserved behavior'],
    ],
  },
  experience: {
    eyebrow: '04 — ОПЫТ',
    title: 'Почти 5 лет коммерческой разработки',
    description: 'Компактная timeline показывает контекст и один наиболее показательный вклад на каждой позиции.',
    items: [
      {
        period: '2024—2026',
        company: 'vcv.ru — Frontend-разработчик',
        contribution: 'HR-платформа · таблица · канбан · UI-библиотека · Vue 3 + TypeScript · менторство',
      },
      {
        period: '2023—2024',
        company: 'ИПС — Frontend-разработчик',
        contribution: 'Nuxt 3-продукт с нуля · архитектура · API · авторизация · Яндекс Карты · SSR / SEO',
      },
      {
        period: '2022—2023',
        company: 'BIK — Frontend-разработчик',
        contribution: 'Каталоги · интернет-магазины · конструктор страниц · адаптивность · производительность',
      },
      {
        period: '2021—2022',
        company: 'Provectus / Kafka UI — Software Engineer Trainee',
        contribution: 'Open source · React · Redux Toolkit · TypeScript · Jest · строгий Code Review',
      },
    ],
  },
  approach: {
    eyebrow: '05 — ПОДХОД',
    title: 'Как я работаю',
    description: 'От контекста и границ — к системе, реализации и проверке результата.',
    steps: [
      ['01', 'Понимаю задачу', 'Пользователь, бизнес-цель, контекст, ограничения и неопределённость.'],
      ['02', 'Определяю границы', 'Scope, non-goals, модель данных, риски и критерии готовности.'],
      ['03', 'Проектирую систему', 'Архитектура, состояния, API-контракты, edge cases и ошибки.'],
      ['04', 'Реализую и проверяю', 'Код, diff review, тесты, обработка ошибок и приёмка сценария.'],
    ],
    aiNote: {
      label: 'CONTROLLED AI-ASSISTED DEVELOPMENT',
      text: 'Использую LLM и coding agents для анализа, декомпозиции и реализации, но продуктовые решения, архитектурные компромиссы и приёмка результата остаются за мной.',
    },
  },
  personal: {
    eyebrow: '06 — НЕ ТОЛЬКО СТЕК',
    title: 'Профессиональная любознательность',
    description:
      'Мне интересны продукты, архитектура и граница между frontend и backend. Изучаю Node.js, NestJS и AI-инструменты не ради модного ярлыка, а чтобы лучше понимать систему целиком и принимать более сильные инженерные решения. Люблю разбирать требования, находить границы задачи и превращать неопределённость в проверяемый результат.',
    note: 'Текст основан только на подтверждённом профессиональном контексте — без искусственной личной легенды.',
  },
  contacts: {
    eyebrow: '07 — КОНТАКТЫ',
    title: 'Ищу сильную продуктовую команду',
    description: 'Рассматриваю frontend-роли уровня Middle+ / Strong Middle с основным стеком Vue, Nuxt и TypeScript.',
    actionLabel: 'Связаться по поводу позиции',
    resumeLabel: 'Скачать резюме',
    footer: 'Антон Зорин · Казань · удалённо или гибрид · 2026',
    items: [
      ['Telegram · @Zorin_4', '@Zorin_4', 'telegram'],
      ['Email · workzor@bk.ru', 'workzor@bk.ru', 'email'],
      ['GitHub · Zorii4', 'github.com/Zorii4', 'github'],
      ['Setka', 'Профиль в Setka', 'setka'],
      ['LinkedIn · Zori4', 'linkedin.com/in/zori4', 'linkedin'],
    ],
  },
  links: {
    github: 'https://github.com/Zorii4',
    jobAiAssistant: 'https://github.com/Zorii4/job-ai-assistant',
    mealMemoryBot: 'https://github.com/Zorii4/meal-memory-bot',
    nebusNotes: 'https://github.com/Zorii4/nebus-notes',
    telegram: 'https://t.me/Zorin_4',
    email: 'mailto:workzor@bk.ru',
    setka: 'https://setka.ru/users/019d2a46-457b-7482-96a3-912fb5ac6ee7',
    linkedin: 'https://www.linkedin.com/in/zori4/',
    resume: '/resume/anton-zorin-frontend-vue-nuxt-ts.pdf',
  },
  placeholders: {
    heroPhoto: 'PHOTO_01_HERO',
    heroPhotoSrc: '/images/anton-zorin-hero.jpg',
    heroPhotoAlt: 'Антон Зорин — Frontend Engineer',
    personalPhotoOne: 'PHOTO_02_PERSONAL',
    personalPhotoTwo: 'PHOTO_03_PERSONAL',
  },
} as const
