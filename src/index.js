import Vue from 'vue'
// import vuetify from 'plugins/vuetify' // path to vuetify export
// import store from "plugins/vuex";
import example1 from "component/example1";
import example2 from "component/example2";
//import {setprototype} from "methods/prototype";

//setprototype();

new Vue({
  render(){
    return (
      <div>
        <example1></example1>
        <example2></example2>
      </div>
    );
  },
  components: {
    example1,example2
  }
}).$mount('#app');