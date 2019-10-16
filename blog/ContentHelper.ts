import { fr, en } from "./blogs.json";
import { ArticleRaw, BlogRaw, ArticleData, Article } from "~/types/index.js";

export default class ContentHelper {
  private static instance: ContentHelper;
  private list: BlogRaw;

  static getInstance() {
    if (!ContentHelper.instance) {
      ContentHelper.instance = new ContentHelper();
    }
    return ContentHelper.instance;
  }

  constructor() {
    this.list = { fr, en };
  }

  getBlogs(lang: string): ArticleRaw[] {
    return this.list[lang];
  }

  async getBlogBySlug(lang: string, slug: string): Promise<ArticleData | null> {
    const articleRaw = this.getBlogs(lang).find(
      (x: ArticleRaw) => x.slug === slug
    );
    if (!articleRaw) {
      return null;
    }

    const articleData = await this.asyncImport(articleRaw.path);
    return articleData;
  }

  async getBlogsByAuthor(
    lang: string,
    author: string,
    currentPage: number,
    perPage: number
  ): Promise<ArticleData[]> {
    const list = await this.getArticles(lang);
    const filtered = list.filter(
      (x: ArticleData) => x.attributes.author === author
    );
    return this.getPaginated(filtered, currentPage, perPage);
  }

  async getBlogsByCategory(
    lang: string,
    category: string,
    currentPage: number,
    perPage: number
  ): Promise<ArticleData[]> {
    const list = await this.getArticles(lang);
    const filtered = list.filter(
      (x: ArticleData) => x.attributes.category === category
    );
    return this.getPaginated(filtered, currentPage, perPage);
  }

  async getCategories(lang: string): Promise<string[]> {
    const list = await this.getArticles(lang);
    return list
      .map(x => x.attributes.category || "untyped")
      .filter(function(elem, pos, arr) {
        return arr.indexOf(elem) == pos;
      });
  }

  async getAuthors(lang: string): Promise<string[]> {
    const list = await this.getArticles(lang);
    return list
      .map(x => x.attributes.author || "anonyme")
      .filter(function(elem, pos, arr) {
        return arr.indexOf(elem) == pos;
      });
  }

  async getPaginated(
    list: ArticleData[],
    currentPage: number,
    perPage: number
  ): Promise<ArticleData[]> {
    if (!(list && list.length)) {
      return [];
    }

    const length = list.length;
    const modulo = length % perPage;
    const division = Math.trunc(length / perPage);
    const lastIndex = modulo ? division + 1 : division;

    if (currentPage > lastIndex) {
      return [];
    }

    const start = (currentPage - 1) * perPage;
    let end = currentPage * perPage;

    if (currentPage === lastIndex && modulo) {
      end = (currentPage - 1) * perPage + modulo;
    }

    return list.slice(start, end);
  }

  async getBlogsByPage(
    lang: string,
    currentPage: number,
    perPage: number
  ): Promise<ArticleData[]> {
    const list = await this.getArticles(lang);
    return this.getPaginated(list, currentPage, perPage);
  }

  getArticles(lang: string): Promise<ArticleData[]> {
    const list = this.list[lang].sort(
      (a: ArticleRaw, b: ArticleRaw) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return Promise.all(this.getPromisesImport(list));
  }

  getPromisesImport(list: ArticleRaw[]): ArticleData[] {
    return (list as any).map((blog: ArticleRaw) => {
      return this.asyncImport(blog.path);
    });
  }

  async asyncImport(path: string): Promise<ArticleData> {
    const { attributes, body, html } = await import("@/blog" + path);
    return { attributes, body, html } as ArticleData;
  }
}
