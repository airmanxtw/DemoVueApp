<template>
  <div>
    <vue-editor v-model="content" :editor-toolbar="customToolbar"></vue-editor>
    <textarea v-model="content" style="width: 900px" rows="80"></textarea>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  data() {
    return {
      content: "<h1>test</h1>",
      customToolbar: [
        [{ font: ["新細明體"] }, { size: ["small", false, "large", "huge"] }],
      ],
    };
  },
  components: {
    VueEditor,
  },
};
</script>
