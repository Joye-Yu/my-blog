import { navbar } from "vuepress-theme-hope";


export const enNavbar = navbar([
  { text:"Home", icon:"home", link: "/"},

  {
    text: "Projects",
    icon: "folder-open",
    prefix: "/posts/",
    children: [
      {
        text: "OpenIELTS",
        icon: "file-lines",
        link: "openielts-log",    // 链接：openielts-log
      },
    ]
  },

  { text: "Books", icon: "book", link: "/articles/" },    // 链接：articles

  { text: "Habits", icon: "book", link: "/habits/" },
  
  { text: "Posts", icon: "book", link: "/posts"}


]);
