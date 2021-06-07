<template>
  <suspense>
    <div>
      <h1>Hello</h1>
      <v-slider set="y" />
      {{ get("y") }}
    </div>
  </suspense>
</template>

<script setup lang="ts">
import { watch } from "vue";

import { get, set, state } from "../dist/visualia2.es";

// import { get, set } from "../src";
// import VSlider from "../src/components/VSlider.vue";

setTimeout(() => set("y", 100), 1000);

// const test = ref(50);
// watch(state, () => console.log(state), { immediate: true });
// watch(test, () => console.log(test.value), { immediate: true });
// const on = (o: number) => console.log(o);
</script>
