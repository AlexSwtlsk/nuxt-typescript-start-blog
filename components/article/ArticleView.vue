<template>
  <section>
    <h1 class="header">{{ blog.attributes.title }}</h1>
    <Meta :blog="blog" />

    <div class="content" v-html="blog.html" />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { ArticleData } from "~/types";
import Meta from "~/components/article/atoms/Meta.vue";

@Component({
  components: {
    Meta
  }
})
export default class Card extends Vue {
  @Prop() blog!: ArticleData;
}
</script>

<style scoped>
</style>
