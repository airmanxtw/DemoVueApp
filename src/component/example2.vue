<template>
  <div>
    <input type="file" @change="getfile" />
    <img style="width: 300px" :src="dataurl" />
  </div>
</template>
<script>
import heic2any from "heic2any";
import * as blobUtil from "blob-util";
export default {
  data() {
    return {
      dataurl: "",
    };
  },
  methods: {
    getfile(event) {
      let that = this;
      var file = event.target.files[0];
      var fileReader = new FileReader();
      fileReader.onloadend = function (e) {
        var arrayBuffer = e.target.result;
        var blob = blobUtil.arrayBufferToBlob(arrayBuffer, file.type);
        var tofile = heic2any({ blob }).then((res) => {
          var fr = new FileReader();
          fr.onload = function (e) {
            that.dataurl = e.target.result;
          };
          fr.readAsDataURL(res);
        });
        console.log("here is a blob", blob);
        console.log("its size is", blob.size);
        console.log("its type is", blob.type);
      };
      fileReader.readAsArrayBuffer(file);
    },
  },
};
</script>
