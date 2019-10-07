import { fr, en } from "./blogs.json";
import { ArticleRaw, BlogRaw } from "~/types/index.js";

export default class ContentHelper {
  list!: BlogRaw;

  private static instance: ContentHelper;

  static getInstance() {
    if (!ContentHelper.instance) {
      ContentHelper.instance = new ContentHelper();
    }
    return ContentHelper.instance;
  }

  constructor() {
    this.setList({ fr, en });
  }

  setList(blogRaw: BlogRaw) {
    this.list = blogRaw;
  }

  getBlogs(lang: string): ArticleRaw[] {
    return this.list[lang];
  }

  getBlogBySlug(lang: string, slug: string): ArticleRaw | undefined {
    return this.getBlogs(lang).find((x: ArticleRaw) => x.slug === slug)
  }
}
