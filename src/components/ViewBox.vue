<script setup>
import {
  reactive,
  computed,
  watch,
  getCurrentInstance,
  onUpdated,
  onMounted,
  ref,
} from "vue";
const props = defineProps(["src"]);
import { v4 as uuidv4 } from "uuid";

const { proxy } = getCurrentInstance();
const imgList = reactive({ data: [] });
const list = computed(() => props.src);
const classBtn = ref("");
let rd = uuidv4();
rd = rd.replace("-", "");
classBtn.value = rd.replace("-", "");
console.log(rd);

watch(list, (n) => {
  console.log(n);
  const arr = [];
  arr.push(n);
  imgList.data = arr;
});

onUpdated(() => {
  const el = document.querySelector(`.${classBtn.value}`)?.click();
  console.log(el);
  el.click();
});
</script>

<template>
  <photo-provider>
    <photo-consumer
      v-for="(src, index) in imgList.data"
      :intro="src"
      :key="src"
      :src="src"
    >
      <button v-if="index === 0" :class="classBtn" ref="op">okkko</button>
    </photo-consumer>
  </photo-provider>
</template>
