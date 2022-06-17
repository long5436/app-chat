<script setup>
import {
  reactive,
  computed,
  watch,
  getCurrentInstance,
  onUpdated,
  ref,
} from "vue";
const props = defineProps(["src"]);
const { proxy } = getCurrentInstance();
const imgList = reactive({ data: [] });
const list = computed(() => props.src);

const arr = [];
arr.push(props.src);
imgList.data = arr;

watch(list, (n) => {
  // console.log(n);
  const arr = [];
  arr.push(n);
  imgList.data = arr;
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
      <button v-if="index === 0" class="classBtn"></button>
    </photo-consumer>
  </photo-provider>
</template>
<style>
.classBtn {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: calc(100% - 50px);
  border: 0;
  background: transparent;
}
</style>
