export * from "./state";

export interface Author {
  name: string;
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

export interface ArticleRaw {
  slug: string;
  date: Date;
  title: string;
}

export interface BlogRaw {
  [lang: string]: ArticleRaw[];
}
