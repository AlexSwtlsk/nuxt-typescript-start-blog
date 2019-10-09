<template>
  <section>
    <h1 class="header">{{ blog.attributes.title }}</h1>
    <div>
      Posted on
      <nuxt-link
        :to="{name: 'blog-category-category', params: { category: blog.attributes.category }}"
      >{{ blog.attributes.category }}</nuxt-link>
    </div>

    <div class="content" v-html="blog.html" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import { State } from "vuex-class";
import ContentHelper from "../../blog/ContentHelper";
// import { Person } from "~/types";

@Component({
  components: {},
  async asyncData({ params }) {
    const blog = await new ContentHelper().getBlogBySlug("fr", params.name);
    return { blog };
  }
})
export default class extends Vue {}
</script>
