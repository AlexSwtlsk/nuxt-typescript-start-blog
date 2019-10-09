export * from "./state";

export interface Author {
  name: string;
}

export interface BlogRaw {
  [lang: string]: ArticleRaw[];
}

export interface ArticleRaw {
  slug: string;
  date: string;
  path: string;
}

export interface ArticleData {
  attributes: Article;
  body: object;
  html: string;
}

export interface Article {
  slug: string;
  date: Date;
  title: string;
  author: Author;
  description: string;
  image: string;
  category: string;
}
