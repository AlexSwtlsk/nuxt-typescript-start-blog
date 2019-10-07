<template>
  <section>
    <h1 class="header">Home</h1>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ContentHelper from "../blog/ContentHelper";

import { State } from "vuex-class";
// import { Person } from "~/types";
import Card from "~/components/Card.vue";

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  // @State people!: Person;
}
</script>
