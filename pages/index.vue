<template>
  <section>
    <h1 class="header">Home</h1>

    <nuxt-link
      v-for="b in blogs" 
      :key="b.attributes.slug"
      :to="`/blog/${b.attributes.slug}`"
    >
      {{ b.attributes.title }}
    </nuxt-link>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { ArticleRaw } from "../types";

import ContentHelper from "../blog/ContentHelper";

import Card from "~/components/Card.vue";

@Component({
  components: {
    Card
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
