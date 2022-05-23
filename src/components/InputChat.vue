<script setup>
import { ref, getCurrentInstance, watch } from "vue";

//
const { proxy } = getCurrentInstance();
const input = ref("");
const textShow = ref("true");

function handleChange(event) {
  if (event.keyCode === 13) {
    event.target.innerText = "";
  }
  input.value = event.target.innerText;
}

function handleKeyDown(event) {
  if (event.keyCode === 13) {
    submit();
    event.target.innerText = "";
  } else if (event.keyCode >= 49 && event.keyCode <= 222) {
    textShow.value = false;
  }
}

function submit() {
  console.log(input.value);
}

//

watch(input, (n) => {
  if (n.length > 0) {
    textShow.value = false;
  } else {
    textShow.value = true;
  }
});
</script>

<template>
  <div :class="$style.box">
    <div :class="$style.input">
      <div :class="$style.inputText">
        <p
          contenteditable="true"
          role="textbox"
          spellcheck="true"
          tabindex="0"
          data-lexical-editor="true"
          @keydown="handleKeyDown"
          @keyup="handleChange"
          ref="iput"
        ></p>
        <p v-if="textShow" :class="$style.text">Tin nhắn</p>
      </div>
      <div :class="$style.actions">
        <button>
          <v-icon name="fa-regular-smile" />
        </button>
      </div>
    </div>
    <button>send</button>
  </div>
</template>
<style lang="scss" module>
.box {
  display: flex;
  width: 100%;
  //   justify-content: space-between;
  .input {
    flex: 1;
    width: 100px;
    // height: 40px;
    background: #fff;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    // flex-direction: row-reverse;
    user-select: text;
    white-space: pre-wrap;
    word-break: break-word;
    border: 1px solid #ddd;
    border-radius: 20px;

    .inputText {
      position: relative;
      // width: 100%;
      flex: 1;
      p {
        position: relative;
        z-index: 1;
        // display: inline-flex;
        // align-items: center;
        // width: inherit;
        min-height: 40px;
        outline: none;
        // line-height: 26px;
        transform: translateY(1px);
        padding: 8px 20px;
      }

      .text {
        z-index: 0;
        position: absolute;
        color: #888;
        top: 0;
      }
    }

    // text-align: right;

    .actions {
      //   text-align: right;
      //   width: 100%;
    }
  }
}
</style>
