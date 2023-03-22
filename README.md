<p align="center"><img src="./static/icon.png"
        alt="Logo" width="128" height="128" style="max-width: 100%;"></p>
<h1 align="center">Miku Tools</h1>
<p align="center">一个轻量的工具集合</p>
<p align="center">
    <a href="https://github.com/brusw/MikuTools/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/brusw/MikuTools.svg" alt="MIT License" />
    </a>
    <a href="https://vuejs.org">
        <img src="https://img.shields.io/badge/nuxt.js-v5.x-green.svg" alt="for Nuxt.js 5">
    </a>
    <a href="https://brusw.com">
        <img src="https://img.shields.io/badge/author-brusw-blue" alt="Author">
    </a>
    <a href="https://tools.brusw.com">
        <img src="https://img.shields.io/badge/%F0%9F%9A%80-open--in--browser-e10079.svg" alt="Live Demo">
    </a>
</p>

## 预览

![preview](./static/preview.jpg)

## 开发

```bash
pnpm install
pnpm dev
```

## 部署

```bash
docker build -t brusw/tools .
docker run --name=brusw-tools -p 8000:8000 -d brusw/tools
```

## 其他

Q：我应该如何添加新功能？
A：参考 `/pages/*.vue` 中的文件新建页面，善用 **CTRL+F** 进行相关模块的查找，然后在 `/tools/index.js` 里添加相关的工具信息。

Q：MikuTools 的主要技术栈是什么？
A：Vue 全家桶 + [Nuxt.js](https://zh.nuxtjs.org/)。

## License

[MIT](https://github.com/brusw/MikuTools/blob/master/LICENSE)
