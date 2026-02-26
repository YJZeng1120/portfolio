export type ProjectType = 'side' | 'company' | 'portfolio'

export interface Project {
  name: string
  description: string
  image: string
  techs: string[]
  type: ProjectType
  github?: string
  demo?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export const profile = {
  name: 'Crystal Zeng',
  nameZh: '曾詠晶',
  title: 'Flutter Developer',
  tagline: 'I build thoughtful digital experiences.',
  bio: 'Passionate about clean code and elegant interfaces. I thrive at the intersection of design and engineering, turning ideas into products people enjoy using.',
  email: 'k23055456@gmail.com',
  photo: 'https://placehold.co/200x200/e0d5c8/7a6040?text=Photo',
  summary: `I'm a passionate developer who loves crafting performant, accessible, and beautiful web applications. I thrive at the intersection of design and engineering — turning ideas into products that people genuinely enjoy using.\n\nWhen I'm not writing code, I'm exploring emerging technologies, contributing to open source, and pushing the boundaries of what the web can do.`,
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['Flutter', 'Dart', 'React', 'TypeScript', 'TailwindCSS', 'Next.js', 'Vite', 'HTML / CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'REST API', 'GraphQL', 'Prisma'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Docker', 'GitHub Actions', 'Linux', 'Figma', 'VS Code'],
  },
]

export const projects: Project[] = [
  {
    name: 'Project Alpha',
    description:
      'A full-stack task management app with real-time collaboration, drag-and-drop boards, and team workspaces.',
    image: 'https://placehold.co/800x450/181818/e4e4e7?text=Project+Alpha',
    techs: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL'],
    type: 'side',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Project Beta',
    description:
      'An e-commerce platform featuring a headless CMS, Stripe payment integration, and a responsive storefront.',
    image: 'https://placehold.co/800x450/181818/e4e4e7?text=Project+Beta',
    techs: ['Next.js', 'TailwindCSS', 'Stripe', 'Sanity'],
    type: 'side',
    github: 'https://github.com',
  },
  {
    name: 'Project Gamma',
    description:
      'An interactive data visualization dashboard transforming complex datasets into clear, animated charts.',
    image: 'https://placehold.co/800x450/181818/e4e4e7?text=Project+Gamma',
    techs: ['React', 'D3.js', 'Python', 'FastAPI'],
    type: 'side',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Portfolio Website',
    description:
      'This portfolio site — a single-page React application with dark/light mode, smooth scroll, and responsive layout.',
    image: 'https://placehold.co/800x450/181818/e4e4e7?text=Portfolio',
    techs: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    type: 'portfolio',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Company Project A',
    description:
      'Internal enterprise platform for workflow automation and cross-department data integration.',
    image: 'https://placehold.co/800x450/181818/e4e4e7?text=Company+Project+A',
    techs: ['Vue.js', 'TypeScript', 'Spring Boot', 'MySQL'],
    type: 'company',
  },
  {
    name: 'Company Project B',
    description:
      'Customer-facing mobile web app for real-time order tracking and support ticket management.',
    image: 'https://placehold.co/800x450/181818/e4e4e7?text=Company+Project+B',
    techs: ['React', 'Redux', 'Node.js', 'MongoDB'],
    type: 'company',
  },
]
