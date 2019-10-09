import NuxtConfiguration from "@nuxt/config";
import { Configuration as WebpackConfiguration } from "webpack";

import { ArticleRaw } from "./types";

const { fr, en } = require("./blog/blogs.json");
import { head } from "./config/head";

export default {
  server: {
    port: 3003
  },
  env: {},
  head,
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {
    extend(config: WebpackConfiguration) {
      config.module!.rules.push({
        test: /\.md$/,
        loader: "frontmatter-markdown-loader"
      });
    }
  },
  buildModules: ["@nuxt/typescript-build"],
  modules: ["@nuxtjs/axios"],
  axios: {},
  generate: {
    routes: ["404"]
      .concat(fr.map((w: ArticleRaw) => `/blog/${w.slug}`))
      .concat(en.map((w: ArticleRaw) => `/blog/en/${w.slug}`))
  }
};
