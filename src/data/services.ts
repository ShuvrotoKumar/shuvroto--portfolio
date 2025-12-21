import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    icons: [
      "/skills/redux.svg",
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "I build visually stunning and user-friendly websites.",
    description:
      "I deliver stunning, user-friendly websites to establish your online presence. From simple sites to complex e-commerce platforms, I provide tailored solutions using the latest frameworks and technologies for a seamless, responsive, and SEO-friendly browsing experience. Enhance your online identity with quality.",
  },
  {
    id: 2,
    title: "Product Strategy",
    icons: [
      "/skills/git.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
      "/skills/ubuntu.png",
    ],
    shortDescription: "I define goals, target audiences, and roadmap for success.",
    description:
      "I collaborate to define clear goals, target audiences, and a success roadmap. My expertise in product ideation and market analysis ensures your product meets user needs and aligns with your business strategy for long-term growth and full potential realization. Drive your product's success with strategic planning.",
  },
  {
    id: 3,
    title: "API Integration",
    icons: [
      "/skills/rest.png",
      "/skills/graph.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/awss.png",
    ],
    shortDescription: "I connect your applications with powerful APIs.",
    description:
      "I specialize in integrating various APIs to enhance your application's functionality. Whether it's REST, GraphQL, or WebSockets, I ensure seamless communication between your frontend and backend services. My expertise includes third-party API integrations, custom API development, and optimizing API performance for better user experiences.",
  },
  {
    id: 4,
    title: "Frontend Development",
    icons: [
      "/skills/typescript.svg",
      "/skills/react.svg",
      "/skills/redux.svg",
      "/skills/nextjs.png",
      "/skills/html.svg",
    ],
    shortDescription: "I create engaging and responsive user interfaces.",
    description:
      "I craft beautiful, responsive, and accessible user interfaces that deliver exceptional user experiences. Using modern frameworks like React and Next.js, I build fast, SEO-friendly, and maintainable frontend applications. My focus is on creating intuitive interfaces that work seamlessly across all devices and screen sizes.",
  },
];

export default services;
