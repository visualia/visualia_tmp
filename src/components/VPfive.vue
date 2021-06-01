<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { p5i } from "p5i";
import type { P5I } from "p5i";

function setup(p: P5I) {
  p.createCanvas(400, 400);
  p.fill(255);
  p.rect(0, 0, 400, 400);
  p.fill(255, 0, 0);
  p.rect(100, 100, 200, 200);
}

const el = ref(null);
const { mount, unmount } = p5i();
onMounted(() => mount(el.value!, { setup }));
onUnmounted(() => unmount());
</script>

<template>
  <div ref="el" />
</template>
