<template>
  <h1>Hello</h1>
  <v-slider set="y" />
  {{ get("y") }}
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import { components, get, set, state } from "../dist/visualia.es";
import VSlider from "../dist/VSlider";

// import { get, set } from "../src";
// import VSlider from "../src/components/VSlider.vue";

setTimeout(() => set("y", 100), 1000);

// const test = ref(50);
watch(state, () => console.log(state), { immediate: true });
// watch(test, () => console.log(test.value), { immediate: true });
// const on = (o: number) => console.log(o);
</script>
