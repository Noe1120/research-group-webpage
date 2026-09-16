# 科研组官网

南京邮电大学计算机、软件、网络空间安全学院科协技术部门科研组静态官网。

## 本地预览

在项目目录运行：

```bash
python -m http.server 4173
```

然后打开 `http://localhost:4173/`。

## GitHub Pages

将所有 HTML 文件、`styles.css`、`multipage.css` 和 `site.js` 推送到仓库默认分支，在仓库 Settings → Pages 中选择 `Deploy from a branch`，分支选择默认分支和 `/ (root)` 即可。

站点采用多页面结构：首页负责导航与内容摘要，其余内容分别位于 `about.html`、`research.html`、`achievements.html`、`activities.html`、`members.html`、`join.html` 和 `contact.html`。图片目前使用 Unsplash 远程图，可替换为仓库内 `assets/` 路径。
