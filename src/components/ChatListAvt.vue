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
  <div></div>
  <div :class="$style.avt">
    <img
      v-if="userData.data?.photoURL"
      :src="userData.data.photoURL || av2"
      alt=""
      :class="$style.avtImg"
    />
    <div
      v-else
      :class="$style.avtText"
      :style="{
        background: userData.data?.theme.backgroundColor,
        color: userData.data?.theme.textColor,
      }"
    >
      <span>{{ createAvtString(userData.data?.displayName).name }} </span>
    </div>
  </div>
</template>
<style lang="scss" module>
.avt {
  width: 46px;
  height: 46px;
  margin-right: 10px;
  .avtImg {
    border-radius: 50em;
    width: inherit;
    height: inherit;
  }

  .avtText {
    display: inline-flex;
    // justify-content: ce;
    background: #ddd;
    border-radius: 50em;
    width: inherit;
    height: inherit;

    span {
      margin: auto;
      font-size: 1.3rem;
    }
  }
}
</style>
