<template>
  <input type="button" @click="go()" value="button" />
</template>
<script>
const axios = require("axios");
export default {
  methods: {
    go() {
      axios
        .post("https://portal.stust.edu.tw/exteduapi/auth", {
          userid: "airmanx",
          password: "a6005600",
        })
        .then((res) => {
          debugger;
        })
        .catch((err) => {
          debugger;
        });
    },
  },
  created() {},
};
</script>
