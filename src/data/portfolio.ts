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
  bio: "專注於 Flutter 跨平台開發，具備 iOS/Android 完整上架與 GitLab CI/CD 自動化發版經驗，並以 React/Next.js、TanStack 與 Zustand 開發網頁前端。",
  email: "k23055456@gmail.com",
  photo: "/portfolio/images/avatar.JPG"
};

export const skills: SkillGroup[] = [
  {
    category: "Mobile",
    items: ["Flutter", "Dart", "MVVM", "Riverpod", "BLoC", "Flavorizr", "Background Location"]
  },
  {
    category: "Web",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack (Query, Table, Virtual)",
      "Zustand",
      "React Hook Form",
      "Zod"
    ]
  },
  {
    category: "UI & Testing",
    items: ["TailwindCSS", "shadcn/ui", "Storybook", "Vitest"]
  },
  {
    category: "API & Integration",
    items: ["RESTful API", "Dio & Retrofit", "MQTT", "App / Universal Links"]
  },
  {
    category: "DevOps & Tools",
    items: [
      "Firebase (Auth, Firestore, FCM, Crashlytics, App Distribution)",
      "GitLab CI/CD",
      "GitHub Actions",
      "Fastlane",
      "TestFlight",
      "iOS / Android 商店上架管理",
      "Git Flow"
    ]
  }
];

export const projects: Project[] = [
  {
    name: "Store Ease 商店輕鬆理",
    description:
      "Flutter 跨平台商店管理 App，採 BLoC 狀態管理，串接 RESTful API，整合 Firebase Auth 及 FCM 推播通知。",
    youtube: "8_l8sXE4EpE",
    techs: ["Flutter", "Dart", "BLoC", "RESTful API", "Firebase (Auth / FCM)"],
    type: "side",
    github: "https://github.com/YJZeng1120/store_ease_demo",
    demo: "https://youtu.be/8_l8sXE4EpE"
  },
  {
    name: "Realtime Chat App",
    description:
      "以 SwiftUI + MVVM 架構開發的 iOS 即時通訊 App，使用 Firebase Auth 登入、Firestore 儲存訊息、Cloud Storage 管理媒體。",
    youtube: "ApJwXJoxOUQ",
    techs: ["SwiftUI", "MVVM", "Firebase (Auth, Firestore, Cloud Storage)"],
    type: "side",
    github: "https://github.com/YJZeng1120/realtime_chat_demo",
    demo: "https://youtu.be/ApJwXJoxOUQ"
  },
  {
    name: "Expense Manager App",
    description: "Flutter 個人記帳 App，以 BLoC 管理狀態並以 SQLite 本地儲存收支紀錄。",
    youtube: "V1HvQEdIZ74",
    techs: ["Flutter", "Dart", "BLoC", "SQLite"],
    type: "side",
    github: "https://github.com/YJZeng1120/expense_manager_demo",
    demo: "https://youtu.be/V1HvQEdIZ74"
  },
  {
    name: "Portfolio Website",
    description:
      "以 React 開發的個人作品集，支援深色/淺色模式切換，並以 GitHub Actions CI/CD 自動部署至 GitHub Pages。",
    image: "/portfolio/images/projects/portfolio_website.png",
    techs: ["React", "TypeScript", "TailwindCSS", "Vite", "GitHub Actions", "GitHub Pages"],
    type: "portfolio",
    github: "https://github.com/YJZeng1120/portfolio"
  },
  {
    name: "CMS 車隊管理 App",
    description:
      "上架雙平台的企業車隊管理 App，採 MVVM + Riverpod 架構，整合 MQTT、Background Location 及 Firebase 生態系（FCM、Crashlytics、App Distribution），並以 GitLab CI/CD + Flavorizr 建立多環境自動化發布流程。",
    image: "/portfolio/images/projects/cms_app.png",
    techs: [
      "Flutter",
      "Dart",
      "Riverpod",
      "MVVM",
      "Dio / Retrofit",
      "MQTT",
      "Firebase (FCM, Crashlytics, App Distribution)",
      "Background Location",
      "App / Universal Links",
      "GitLab CI/CD",
      "Flavorizr"
    ],
    type: "company",
    appStore: "https://apps.apple.com/tw/app/cms%E8%BB%8A%E9%9A%8A%E7%AE%A1%E7%90%86/id6752555957",
    playStore: "https://play.google.com/store/apps/details?id=com.shanloong.cmsapp"
  },
  {
    name: "CMS 車隊管理網站",
    description:
      "企業車隊管理後台。以 Next.js + Zustand 建構，實作 Google Maps 座標插值與幀動畫控制，並運用 TanStack 生態系處理複雜數據；搭配 Storybook 與 Vitest 確保開發規範與品質。",
    image: "/portfolio/images/projects/cms_website.png",
    techs: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "TanStack Table",
      "Zustand",
      "React Hook Form",
      "Zod",
      "TailwindCSS",
      "Google Maps API"
    ],
    type: "company"
  }
];
