<template>
  <section>
    <h1 class="header">Nuxt TypeSckkript Starter</h1>
    
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import { State } from "vuex-class";
// import { Person } from "~/types";

@Component({
  components: {
  }
})
export default class extends Vue {
  // @State people!: Person;
}
</script>
