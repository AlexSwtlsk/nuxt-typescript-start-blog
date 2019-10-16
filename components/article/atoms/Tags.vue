<template>
  <div>
    Tags
    <span 
      v-for="(tag, index) in blog.attributes.tags" 
      :key="tag"
      >
      <span v-if="index">,</span>
      <nuxt-link :to="{name: 'blog-tag-tag', params: { tag }}">{{ tag }}</nuxt-link>
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
