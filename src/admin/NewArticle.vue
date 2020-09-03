<template>
  <div>
    <div class="title-input">
      <a-input placeholder="Article title  here.." addonBefore="Title"/>
    </div>
    <quill-editor ref="quillEditor" v-model="content" />
    <br />
    <a-button primary @click="onSave">
      Save
    </a-button>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  data() {
    return {
      content: ""
    };
  },
  components: {
    quillEditor
  },
  methods: {
    onSave() {
      console.log(this.content);
    }
  }
};
</script>

<style lang="scss" scoped>
  .title-input{
    margin-bottom: 15px;
  }
</style>
