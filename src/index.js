import Vue from 'vue'
// import vuetify from 'plugins/vuetify' // path to vuetify export
// import store from "plugins/vuex";
import example1 from "component/example1";
//import {setprototype} from "methods/prototype";

//setprototype();

new Vue({
  render(){
    return (
      <example1></example1>
    );
  },
  components: {
    example1
  }
}).$mount('#app');