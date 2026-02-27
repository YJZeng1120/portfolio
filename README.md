**Live Demo：** [yjzeng1120.github.io/portfolio](https://yjzeng1120.github.io/portfolio/)

## 技術架構

- **框架**：React 19 + TypeScript
- **建置工具**：Vite
- **樣式**：TailwindCSS v4
- **部署**：GitHub Pages（路徑 `/portfolio/`）

## 專案結構

```
src/
├── components/   # UI 元件（NavBar、Hero、Skills、Projects 等）
├── data/
│   └── portfolio.ts  # 所有內容資料（個人資訊、技能、專案）
├── assets/       # 靜態資源（圖片等）
├── App.tsx       # 根元件，管理深色/淺色模式
└── main.tsx
```

## 部署

推送至 `main` 分支後，GitHub Actions 會自動執行部署。
