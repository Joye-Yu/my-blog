// theme.ts定义网站样式
import { hopeTheme } from "vuepress-theme-hope";  // 这是引入Hope主题的主方法

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({  // theme配置主入口
  hostname: "https://mister-hope.github.io",  // 网站部署地址，用于生成sitemap\SEO\OG等信息

  author: {
    name: "Joye_Yu",
    url: "https://github.com/Joye-Yu", // 全站默认作者信息，可以在文章卡片中显示
  },

  logo: "/blog_logo.png",   // 站点左上角Logo

  repo: "https://github.com/Joye-Yu",   // 配置仓库地址，会出现在页面编辑上“编辑此页”

  docsDir: "src",   // 根目录 src

  blog: {   // blog 博主配置
    medias: {
      GitHub: "https://github.com/Joye-Yu/",
      Wechat: "/wechat_qr.jpg",
    },
  },

  locales: {    // 多语言locales配置
    "/": {    // 英文站配置
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "One cannot step twice in the same river",

      displayFooter: true,

      blog: {
        description: "be A programmer.",  // 设置自己的一句话
        intro: "/intro.html",    // 跳转到个人介绍页
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",   // 编辑跳转
      },
    },

  
    "/zh/": {   // 中文站配置
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "One cannot step twice in the same river",

      displayFooter: true,

      blog: {
        description: "爱自己，爱他人",
        intro: "/zh/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {      // 页面加密功能：对特定的页面加密功能，多用户访问控制
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
      "/zh/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },


  markdown: {     // markdown功能增强
    align: true,  
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // uncomment these if you need TeX support
    // math: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install mathjax-full before enabling it
    //   type: "mathjax",
    // },

    // install chart.js before enabling it
    // chartjs: true,

    // install echarts before enabling it
    // echarts: true,

    // install flowchart.ts before enabling it
    // flowchart: true,

    // install mermaid before enabling it
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // install @vue/repl before enabling it
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },


  // 插件启用配置

  plugins: {
    blog: true,

    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
