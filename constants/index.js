export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Topex",
    position: "Shipment Company, Dubai",
    img: "assets/topex.jpg",
    review:
      "We partnered with Abdullah to modernize our shipment management system. He delivered a secure, scalable platform tailored to our logistics workflows. His ability to understand business needs and translate them into technical solutions was outstanding.",
  },
  {
    id: 2,
    name: "Ali Yasmeni",
    position: "Owner of Car Rental Business",
    img: "assets/ali.jpg",
    review:
      "Abdullah built a powerful car rental and listing platform for my business. From advanced booking features to AI-powered price evaluation, everything was implemented with precision. The platform made our operations smoother and improved customer trust.",
  },
  {
    id: 3,
    name: "Bashar Shekani",
    position: "Employee at International Organization",
    img: "assets/bashar.jpg",
    review:
      "I had the chance to work with Abdullah on a custom software project. He showed excellent problem-solving skills and delivered a reliable solution that met strict organizational requirements. His professionalism and dedication were clear from day one.",
  },
  {
    id: 4,
    name: "Brainshoring",
    position: "RPA Solutions Company",
    img: "assets/brain.jpg",
    review:
      "Abdullah collaborated with our team to integrate web apps with robotic process automation systems. His backend expertise and clean API design allowed us to scale faster and serve enterprise clients more effectively. A true asset for tech-driven companies.",
  },
];

export const myProjects = [
  {
    title: "Sentinel DevOps Monitor",
    desc: "A DevOps monitoring platform that detects Docker containers and Kubernetes pods, tracking performance metrics and real-time status updates.",
    subdesc:
      "Built with Nest.js, PostgreSQL, GraphQL, Redis Pub/Sub, Prisma ORM, and WebSocket in a microservices architecture. Integrated Gemini API for service insights.",
    href: "https://github.com/AbdullahBakouni/devops-monitor",
    texture: "/textures/project/devops.mp4",
    logo: "/assets/project-logo6.webp",
    logoStyle: {
      backgroundColor: "#0F172A",
      border: "0.2px solid #1E293B",
      boxShadow: "0px 0px 60px 0px #3B82F64D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "Nest.js", path: "/assets/Nest.js.png" },
      { id: 2, name: "GraphQL", path: "/assets/GraphQL.png" },
      { id: 3, name: "Redis", path: "/assets/Redis.png" },
      { id: 4, name: "Prisma ORM", path: "/assets/prisma.png" },
      { id: 5, name: "Docker", path: "/assets/Docker.png" },
      { id: 6, name: "K8S", path: "/assets/Kubernetes.png" },
    ],
  },
  {
    title: "Horizon Banking Platform",
    desc: "A modern online banking application enabling users to connect global bank accounts and manage secure real-time transactions.",
    subdesc:
      "Developed with Next.js, PostgreSQL, Docker, Plaid API, and Dwolla. Implemented secure transaction handling, role-based access, and audit logs with a responsive financial dashboard.",
    href: "https://github.com/AbdullahBakouni/Banking-App",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#172554",
      border: "0.2px solid #1E3A8A",
      boxShadow: "0px 0px 60px 0px #2563EB4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/Next.js.png" },
      { id: 2, name: "PostgreSQL", path: "/assets/postgress.png" },
      { id: 3, name: "Plaid API", path: "/assets/Plaid.png" },
      { id: 4, name: "Dwolla", path: "/assets/dwolla.svg" },
      { id: 5, name: "Docker", path: "/assets/Docker.png" },
    ],
  },
  {
    title: "StockPulse Market Tracker",
    desc: "A real-time stock monitoring platform providing live market data, personalized alerts, and detailed company insights.",
    subdesc:
      "Built with Next.js, MongoDB, Redis, and Docker. Used BullMQ and Inngest for background jobs and Gmail API with Gemini AI for dynamic, user-tailored email notifications.",
    href: "https://github.com/AbdullahBakouni/Stock-market",
    texture: "/textures/project/signalist.webm",
    logo: "/assets/project-logo8.svg",
    logoStyle: {
      backgroundColor: "#083344",
      border: "0.2px solid #164E63",
      boxShadow: "0px 0px 60px 0px #06B6D44D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/Next.js.png" },
      { id: 2, name: "MongoDB", path: "/assets/mongo.png" },
      { id: 3, name: "Redis", path: "/assets/Redis.png" },
      { id: 4, name: "BullMQ", path: "/assets/bullmq.png" },
      { id: 5, name: "Gemini AI", path: "/assets/gemini.png" },
    ],
  },
  {
    title: "Car Connect",
    desc: "A vehicle marketplace featuring AI-powered price prediction, secure escrow payments, and full rental scheduling with user/company verification.",
    subdesc:
      "Developed with Laravel and MySQL, integrated with Syriatel Cash, e-wallets, and admin dashboards to ensure safe transactions and dispute resolution.",
    href: "https://github.com/AbdullahBakouni/car-connect-backend",
    texture: "/textures/project/car.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "Laravel", path: "/assets/laravel.png" },
      { id: 2, name: "MySQL", path: "/assets/mysql.png" },
      { id: 3, name: "AI Regression", path: "/assets/ai.png" },
      { id: 4, name: "PHP", path: "/assets/php.png" },
    ],
  },
  {
    title: "X Motors",
    desc: "A bilingual car listing platform with advanced filters, optimized image handling, and responsive design for dealers and buyers.",
    subdesc:
      "Built with React.js, Laravel, and Inertia.js. Implemented caching, WebP conversion, and lazy loading to reduce load times by 60%.",
    href: "https://github.com/AbdullahBakouni/X-Motors",
    texture: "/textures/project/xmotors.mp4",
    logo: "/assets/xmotors-logo.jpg",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "Laravel", path: "/assets/laravel.png" },
      { id: 3, name: "Inertia.js", path: "/assets/js.png" },
      { id: 4, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
    ],
  },
  {
    title: "Screen Recording Platform",
    desc: "A full-stack web app enabling real-time screen recording, secure video sharing, and role-based access control.",
    subdesc:
      "Developed with Next.js and PostgreSQL (Xata). Features include dynamic iframe sharing, optimized video storage, and MediaStream API integration.",
    href: "https://github.com/AbdullahBakouni/Screen-Recording-Platform",
    texture: "/textures/project/snap-cast.mp4",
    logo: "/assets/logo2.svg",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/Next.js.png" },
      { id: 2, name: "PostgreSQL", path: "/assets/postgress.png" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
      { id: 4, name: "MediaStream API", path: "/assets/media.png" },
      { id: 5, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
    ],
  },
  {
    title: "Thread Scoute",
    desc: "A social networking platform with threads, communities, and personalized feeds powered by custom algorithms.",
    subdesc:
      "Built with Next.js, TypeScript, and MongoDB. Integrated Clerk for authentication and implemented CRUD features for dynamic content.",
    href: "https://github.com/AbdullahBakouni/Thread-Scoute",
    texture: "/textures/project/thread-scout.mp4",
    logo: "/assets/logo3.svg",
    logoStyle: {
      backgroundColor: "#60f5a1",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/Next.js.png" },
      { id: 2, name: "TypeScript", path: "/assets/typescript.png" },
      { id: 3, name: "MongoDB", path: "/assets/mongo.png" },
      { id: 4, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Topex",
    pos: "Team Leader, Full Stack Developer",
    duration: "2025 - Present",
    title:
      "Developed a shipment management system for a logistics company in Dubai. Built secure APIs, automated workflows, and integrated payment modules to streamline operations and improve efficiency.",
    icon: "/assets/topex.jpg",
    animation: "victory",
  },

  {
    id: 2,
    name: "Brainshoring",
    pos: "Full Stack Developer",
    duration: "2023 - 2025",
    title:
      "Collaborated with an RPA solutions company to integrate backend systems with robotic process automation workflows. Designed clean APIs and scalable architecture to support enterprise clients.",
    icon: "/assets/brain.jpg",
    animation: "clapping",
  },
];
