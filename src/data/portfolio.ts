export type ProjectType = "side" | "company" | "portfolio";

export interface Project {
  name: string;
  description: string;
  image?: string;
  youtube?: string; // YouTube video ID (if set, replaces image with embed)
  techs: string[];
  type: ProjectType;
  github?: string;
  demo?: string;
  appStore?: string;
  playStore?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const profile = {
  name: "Crystal Zeng",
  nameZh: "曾詠晶",
  title: "Flutter Engineer",
  bio: "Passionate about clean code and elegant interfaces. I thrive at the intersection of design and engineering, turning ideas into products people enjoy using.",
  email: "k23055456@gmail.com",
  photo: "/portfolio/images/avatar.png"
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "Flutter",
      "Dart",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Next.js",
      "Vite",
      "HTML / CSS"
    ]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "REST API", "GraphQL", "Prisma"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "GitHub Actions", "Linux", "Figma", "VS Code"]
  }
];

export const projects: Project[] = [
  {
    name: "Store Ease 商店輕鬆理",
    description:
      "A full-stack task management app with real-time collaboration, drag-and-drop boards, and team workspaces.",
    youtube: "8_l8sXE4EpE",
    techs: ["React", "TypeScript", "Node.js", "Socket.io", "PostgreSQL"],
    type: "side",
    github: "https://github.com/YJZeng1120/store_ease_demo",
    demo: "https://youtu.be/8_l8sXE4EpE"
  },
  {
    name: "Realtime Chat App",
    description:
      "An e-commerce platform featuring a headless CMS, Stripe payment integration, and a responsive storefront.",
    youtube: "ApJwXJoxOUQ",
    techs: ["Next.js", "TailwindCSS", "Stripe", "Sanity"],
    type: "side",
    github: "https://github.com/YJZeng1120/realtime_chat_demo",
    demo: "https://youtu.be/ApJwXJoxOUQ"
  },
  {
    name: "Expense Manager App",
    description:
      "An interactive data visualization dashboard transforming complex datasets into clear, animated charts.",
    youtube: "V1HvQEdIZ74",
    techs: ["React", "D3.js", "Python", "FastAPI"],
    type: "side",
    github: "https://github.com/YJZeng1120/expense_manager_demo",
    demo: "https://youtu.be/V1HvQEdIZ74"
  },
  {
    name: "Portfolio Website",
    description:
      "This portfolio site — a single-page React application with dark/light mode, smooth scroll, and responsive layout.",
    image: "https://placehold.co/800x450/181818/e4e4e7?text=Portfolio",
    techs: ["React", "TypeScript", "TailwindCSS", "Vite"],
    type: "portfolio",
    github: "https://github.com/YJZeng1120/portfolio"
  },
  {
    name: "CMS車隊管理 App",
    description:
      "Internal enterprise platform for workflow automation and cross-department data integration.",
    image: "/portfolio/images/projects/cms_app.png",
    techs: ["Flutter", "Dart", "Firebase"],
    type: "company",
    appStore: "https://apps.apple.com/tw/app/cms%E8%BB%8A%E9%9A%8A%E7%AE%A1%E7%90%86/id6752555957",
    playStore: "https://play.google.com/store/apps/details?id=com.shanloong.cmsapp"
  },
  {
    name: "CMS車隊管理網站",
    description:
      "Customer-facing mobile web app for real-time order tracking and support ticket management.",
    image: "/portfolio/images/projects/cms_website.png",
    techs: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "TanStack Table",
      "Zustand",
      "Zod",
      "React Hook Form",
      "TailwindCSS"
    ],
    type: "company"
  }
];
