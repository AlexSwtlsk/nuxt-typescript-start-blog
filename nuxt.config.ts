import { BlogRaw } from "./types";

const { fr, en } = require("./blog/blogs.json");
import { head } from "./config/head";

export default {
  env: {},
  head,
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {},
  buildModules: ["@nuxt/typescript-build"],
  modules: ["@nuxtjs/axios"],
  axios: {},
  generate: {
    routes: ["404"]
      .concat(fr.map((w: BlogRaw) => `/blog/${w.slug}`))
      .concat(en.map((w: BlogRaw) => `/blog/en/${w.slug}`))
  }
};
