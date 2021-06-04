<script lang="ts" setup>
import { ref } from "vue";
import { PDFDocument } from "pdf-lib";

const pdf = ref<PDFDocument | null>(null);
const src = ref("");

PDFDocument.create().then((pdfDocument) => {
  pdf.value = pdfDocument;
  pdf.value.addPage([100, 100]);
  pdf.value
    .saveAsBase64({ dataUri: true })
    .then((pdfSrc: string) => (src.value = pdfSrc));
});
</script>

<template>
  <slot />
  <iframe
    :height="100"
    :width="100"
    :src="src"
    frameborder="0"
    scrolling="no"
  />
</template>
