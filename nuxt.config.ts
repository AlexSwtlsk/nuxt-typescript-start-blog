import { Configuration as WebpackConfiguration } from "webpack";
import { ArticleRaw } from "./types";
import { head } from "./config/head";
import { I18N } from "./i18n/i18n";

const { fr, en } = require("./blog/blogs.json");

export default {
  server: {
    port: 3003
  },
  env: {},
  head,
  loading: { color: "#3B8070" },
  css: ["~/assets/scss/main.scss"],

  build: {
    extend(config: WebpackConfiguration) {
      config.module!.rules.push({
        test: /\.md$/,
        loader: "frontmatter-markdown-loader"
      });
    }
  },
  buildModules: ["@nuxt/typescript-build"],

  modules: ["@nuxtjs/axios", ["nuxt-i18n", I18N]],

  axios: {},

  plugins: ["@/plugins/filters"],

  generate: {
    routes: ["/404"]
      .concat(fr.map((w: ArticleRaw) => `/blog/${w.slug}`))
      .concat(en.map((w: ArticleRaw) => `/blog/en/${w.slug}`))
  }
};
