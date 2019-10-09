# nuxt-typescript-start-blog
Nuxt Typescript template and markdown blog

## Content management

You need to run this script every time you add or delete an article from `./blog/{en, fr, …}`.

This will auto-generates the `blogs.json` file which is read by `nuxt.config.ts` and the `ContentHelper.js`


``` bash
# generate json with blog slug & file path by languages
$ npm run blog

```


## Build Setup


``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

