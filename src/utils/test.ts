//@ts-ignore
import { compile } from "vue/dist/vue.esm-bundler.js";
import { mount } from "@cypress/vue";
import * as utils from "../utils";
import type { Component } from "vue";

export function mountComponent(
  components: Record<string, Component>,
  template: string
) {
  return mount({
    components,
    setup() {
      return utils;
    },
    render: compile(template),
  });
}
