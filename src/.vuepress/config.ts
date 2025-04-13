// config.ts定义网站行为，
import { defineUserConfig } from "vuepress"; 

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Joye-Yu.github.io/",  

  head: [ 
    ["link", { rel: "icon", href: "/favicon.png" }],    // xx.ico 后缀有bug，原因未知
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "What you believe",
      
      description: "Ordinary, the kind of beautiful, dangerous ordinary that you can't leave alone",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "蜕变",
      description: "你无法置之不理的迷人危险",
    },
  },

  theme,



  // Enable it with pwa
  // shouldPrefetch: false,
});
