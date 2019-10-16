<template>
  <div>
    Posted on
    <nuxt-link
      :to="{name: 'blog-category-category', params: { category: blog.attributes.category }}"
    >{{ blog.attributes.category }}</nuxt-link>
    • {{ blog.attributes.date | formatDate("fr", "LL") }}

    <span v-if="blog.attributes.author">
      • by 
      <nuxt-link
        :to="{name: 'blog-author-author', params: { author: blog.attributes.author }}"
      >{{ blog.attributes.author }}</nuxt-link>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { ArticleData } from "~/types";

@Component({})
export default class Meta extends Vue {
  @Prop() blog!: ArticleData;
}
</script>

<style scoped>
</style>
