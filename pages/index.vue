<template>
  <section>
    <h1 class="header">Home</h1>

    <ArticleList :blogs="blogs" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { ArticleRaw } from "~/types";

import ContentHelper from "~/blog/ContentHelper";

import ArticleList from "~/components/article/ArticleList.vue";

@Component({
  components: {
    ArticleList
  },
  async asyncData(ctx) {
    const blogs = await new ContentHelper().getBlogsByPage("fr", 1, 9);
    return { blogs };
  }
})
export default class extends Vue {
  blogs?: ArticleRaw[];
}
</script>
