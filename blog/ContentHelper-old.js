import { fr, en } from '@/blog/blogs.json'

class ContentHelper {
  constructor() {
    this.setBlogs({fr, en})
  }

  static getInstance() {
    if (!ContentHelper.instance) {
      ContentHelper.instance = new ContentHelper()
    }
    return ContentHelper.instance
  }

  static dropInstance() {
    ContentHelper.instance = null
  }

  setBlogs(blogs) {
    this.list = blogs
  }

  getBlogs(lang) {
    this.blogs = this.getPromisesImport(this.list[lang])
    console.log('this.blogs', this.blogs)
    return this.blogs
  }

  async getBlogsByPage(currentPage, perPage) {
    if (!(this.list && this.list.length)) {
      return []
    }

    const modulo = this.list.length % perPage
    const division = Math.trunc(this.list.length / perPage)
    const lastIndex = modulo ? division + 1 : division

    if (currentPage > lastIndex) {
      return []
    }

    const start = (currentPage - 1) * perPage
    let end = currentPage * perPage

    if (currentPage === lastIndex && modulo) {
      end = (currentPage - 1) * perPage + modulo
    }

    const list = this.list
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(start, end)

    return this.getArticles(list).then(blogs => blogs)
  }

  getBlogBySlug(slug) {
    return this.list.find(x => x.slug === slug)
  }

  getBlogByPath(path) {
    return this.list.find(x => x.path === path)
  }

  getLatestOne() {
    return this.blogs.sort((a, b) => new Date(b.attributes.date) - new Date(a.attributes.date))[0]
  }

  getArticles(blogs) {
    return Promise.all(this.getPromisesImport(blogs)).then(res => {
      return {
        blogs: res
      }
    })
  }

  getPromisesImport(list) {
    return list.map(async blog => {
      const imported = await this.asyncImport(blog.path)
      return imported
    })
  }

  async asyncImport(path) {
    const { attributes, body, html } = await import('@/blog' + path)
    return { attributes, body, html }
  }

  getArticleBySlug(slug) {
    const article = this.getBlogBySlug(slug)

    return Promise.all(this.getPromisesImport([article])).then(res => {
      return { blog: res }
    })
  }
}

export default new ContentHelper()
