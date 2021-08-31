import Vue from 'vue'
// import vuetify from 'plugins/vuetify' // path to vuetify export
// import store from "plugins/vuex";
import example1 from "component/example1";
import example2 from "component/example2";
import example3 from "component/example3";
import example4 from "component/example4";
//import {setprototype} from "methods/prototype";

//setprototype();

new Vue({
  render(){
    return (
      <div>
        {/* <example1></example1>
        <example2></example2>
        <example3></example3> */}
        <example4></example4>
      </div>
    );
  },
  components: {
    example1,example2,example3,example4
  }
}).$mount('#app');