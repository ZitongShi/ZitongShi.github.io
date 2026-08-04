# Zitong Shi Homepage Redesign

这是 `https://zitongshi.github.io/` 的独立重写工作目录。

## 当前阶段

- 已建立纯静态项目骨架并迁移正式主页内容。
- 页面底色固定为 `rgb(250, 250, 249)`。
- 淡蓝色用于侧栏、卡片、边框、链接和交互状态。
- 已迁移个人简介、研究方向、News、Publications、Experience、Service 和 Education。
- 后续继续校对内容，并优化主题切换、交互、SEO 和视觉细节。

## 目录结构

```text
.
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/
└── .nojekyll
```

## 本地预览

```powershell
cd E:\ZitongShi-homepage-redesign
python -m http.server 8000
```

打开 `http://localhost:8000/`。

## 迁移顺序

1. 校对论文链接、个人简介和学术经历。
2. 优化桌面端及移动端视觉细节。
3. 增加主题切换、SEO 和无障碍细节。
4. 审核后迁入正式 GitHub Pages 仓库。
