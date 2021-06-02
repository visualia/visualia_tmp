import { ref } from "vue";

export const state = ref<Record<string, any>>({});

export function set(key: string, value: string | number | boolean) {
  state.value[key] = value;
}

export function get(
  key: string,
  def?: string | number | boolean
): string | number | boolean | null {
  return key ? state.value[key] : def ?? null;
}

export function print(val: any) {
  console.log(val);
}
