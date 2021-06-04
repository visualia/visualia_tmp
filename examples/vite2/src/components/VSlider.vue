<script setup lang="ts">
import { ref, watch, defineEmit } from "vue";
import { set } from "../utils";

const input = ref(0);
const emit = defineEmit<(e: "update", value: number) => number>();

watch(
  input,
  () => {
    set("x", input.value);
    emit("update", input.value);
  },
  { immediate: true }
);

// const props =
//   defineProps<{
//     name?: string;
//     modelValue?: string;
//   }>();
</script>
<template>
  <input type="range" v-model.number="input" />
</template>
