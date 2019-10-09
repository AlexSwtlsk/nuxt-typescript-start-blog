<template>
  <ArticleView :blog="blog" />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import { State } from "vuex-class";
import ContentHelper from "~/blog/ContentHelper";

import ArticleView from "~/components/article/ArticleView.vue";

@Component({
  components: {
    ArticleView
  },
  async asyncData({ params }) {
    const blog = await new ContentHelper().getBlogBySlug("fr", params.name);
    return { blog };
  }
})
export default class extends Vue {}
</script>
