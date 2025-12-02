import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "social-media-app-flutter",
    title: "ConnectVerse - Social Networking Platform",
    description:
      "A full-featured social networking mobile application built with Flutter, featuring real-time updates, push notifications, and offline-first architecture using Hive for local data persistence.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShuvrotoKumar",
    url: "https://github.com/ShuvrotoKumar",
    tags: ["Flutter", "Dart", "GetX", "Firebase", "Hive", "State Management"],
  },
  {
    id: "e-commerce-app-mern",
    title: "ShopNest - E-commerce Platform",
    description:
      "A responsive e-commerce platform with product catalog, shopping cart, and secure checkout flow. Built with React.js, Redux for state management, and integrated with Stripe for payments.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShuvrotoKumar",
    url: "https://github.com/ShuvrotoKumar",
    tags: ["React.js", "Redux", "Material UI", "Stripe", "Responsive Design", "E-commerce"],
  },
  {
    id: "video-calling-app-flutter",
    title: "VidConnect - Real-time Video Calling",
    description:
      "A high-performance video conferencing solution with end-to-end encryption, screen sharing, and chat functionality. Built with Flutter and Agora SDK for seamless cross-platform communication.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShuvrotoKumar",
    url: "https://github.com/ShuvrotoKumar",
    tags: ["Flutter", "Dart", "WebRTC", "Agora SDK", "Real-time Communication", "Cross-platform"],
  },
  {
    id: "social-media-api-nodejs",
    title: "Social Media API",
    description:
      "A RESTful API developed using Node.js, Express.js, and MongoDB to integrate backend and frontend with ease.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShuvrotoKumar",
    tags: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
  },
  {
    id: "grocery-list-maker-app-flutter",
    title: "ShopSmart - Grocery List Manager",
    description:
      "An intelligent grocery shopping assistant that helps users create, manage, and share shopping lists. Features include barcode scanning, recipe integration, and PDF export for shopping lists.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShuvrotoKumar",
    url: "https://github.com/ShuvrotoKumar",
    tags: ["Flutter", "Dart", "BLoC", "Hive", "PDF Generation", "Barcode Scanning"],
  },
  {
    id: "e-commerce-api-nodejs",
    title: "E-commerce API",
    description:
      "A RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShuvrotoKumar",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  },
  {
    id: "flutter-carousel-widget-package",
    title: "Flutter Infinite Carousel Pro",
    description:
      "A highly customizable and performant carousel widget for Flutter with advanced features including infinite scrolling, auto-play, custom animations, and responsive layouts. Designed for building beautiful, interactive content sliders and image galleries.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShuvrotoKumar",
    tags: ["Flutter", "Dart", "UI Components", "Open Source", "Widget Library", "Responsive Design"],
  },
  {
    id: "get-time-ago-package",
    title: "GetTimeAgo Package",
    description:
      "A Dart package that converts and formats DateTime objects into human-readable 'time ago' strings, such as '20 seconds ago', 'a minute ago', or '7 hours ago'.",
    icon: "/skills/dart.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShuvrotoKumar",
    tags: ["Dart", "DateTime", "Formatting"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShuvrotoKumar",
    url: "shuvroto-portfolio-6gz8.vercel.app",
    tags: ["Next.js", "Sass", "Web Development"],
  },
  {
    id: "bus-reservation-system-management",
    title: "Bus Reservation System Management",
    description:
      "This repository contains the Bus Reservation System Management project developed using Object Oriented Programming (OOP) and File Handling concepts in C++.",
    icon: "/skills/cpp.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShuvrotoKumar",
    tags: ["C++", "OOP", "File Handling"],
  },
];
export default projects;
