<template>
  <div>
    <a-row>
      <a-col :span="6">
        <a-input
          placeholder="Article title  here.."
          addonBefore="Title"
          v-model="title"
        />
      </a-col>
      <a-col :span="6">
        <a-input
          placeholder="Category name.."
          addonBefore="Category"
          v-model="category"
        />
      </a-col>
    </a-row>
    <a-row>
      <quill-editor ref="quillEditor" v-model="content" />
    </a-row>
    <a-row>
      <a-button primary @click="onSave">
        Save
      </a-button>
    </a-row>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import { createArticle } from "../services/api.service";

export default {
  data() {
    return {
      title: "",
      content: "",
      category: "",
      tags: ""
    };
  },
  components: {
    quillEditor
  },
  methods: {
    onSave() {
      const { title, content, category } = this;
      console.log(title, content, category, this.$store.state.user.userId);
      const authorId = this.$store.state.user.userId;
      this.$message.loading("Article creating...");
      createArticle(title, content, category, authorId)
        .then(() => this.$message.success("Article Successfully Created!"))
        .catch(err => this.$message.error(`Something went wrong: ${err}`));
    }
  }
};
</script>

<style lang="scss" scoped>
.title-input {
  margin-bottom: 15px;
}
</style>
