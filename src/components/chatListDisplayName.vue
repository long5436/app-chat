<script setup>
import createAvtString from "@/plugins/createAvtString";
import { useUserStore } from "@/stores/user";
import { reactive, computed } from "vue";

const userStore = useUserStore();
const userInfo = computed(() => userStore.getUserinfo);
const userData = reactive({ data: {} });
const props = defineProps(["data"]);

// console.log(props.data);

if (props.data.membersInfo[0].uid === userInfo.uid) {
  userData.data = props.data.membersInfo[1];
} else {
  userData.data = props.data.membersInfo[0];
}
</script>

<template>
  <h3 :class="$style.displayName">{{ userData.data?.displayName }}</h3>
</template>
<style lang="scss" module>
.displayName {
  font-size: 1.05rem;
}
</style>
