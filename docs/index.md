---
title: Docs with VitePress
nav: true
---

# Second

<client-only>
  <p-five />
</client-only>

`{{ get('y') }}`

<v-slider @update="(y) => set('y', y)" />
