<template>
  <table>
    <tr>
      <th v-for="field in Object.keys(students[0])">
        {{ field }}
      </th>
      <th>合計</th>
    </tr>
    <tr v-for="stud in students">
      <td v-for="attr in Object.keys(stud)">
        <label v-if="attr == 'name'">{{ stud[attr] }}</label>
        <input type="number" v-model.number="stud[attr]" v-else></input>
      </td>
      <td>{{rowcounter(stud)}}</td>
    </tr>
    <tr>
      <td v-for="field in Object.keys(students[0])">
        <label v-if="field == 'name'">合計</label>
        <label v-else>{{colcounter(field)}}</label>
      </td>
      <td>{{totalcounter()}}</td>
    </tr>
    <tr>
      <td colspan="2">
        <facebook-login class="button"
          appId="1173502953133237"
          @login="getUserData"
          @logout="onLogout"
          @get-initial-status="getUserData"
           >
        </facebook-login>
      </td>
    </tr>
  </table>
</template>
<script>
import facebookLogin from 'facebook-login-vuejs';
export default {
  data() {
    return {
      students: [
        { name: "bill", scoreA: 60, scoreB: 70, scoreC: 85 },
        { name: "tom", scoreA: 50, scoreB: 20, scoreC: 66 },
        { name: "pen", scoreA: 90, scoreB: 80, scoreC: 88 },
      ],
    };
  },
  methods: {
      rowcounter(_stud){
        let total = 0;
        Object.keys(_stud).forEach((k)=>{
            if(typeof _stud[k] == 'number') total += _stud[k];
        })
        return total;
      },
      colcounter(_key){
        let total = 0;
        this.students.forEach((stud)=>{
          total += stud[_key];
        })
        return total;
      },
      totalcounter(){
        let that = this;
        let total = 0;
        this.students.forEach((stud)=>{
          total += that.rowcounter(stud);
        })
        return total;
      },
      getUserData(r){
        FB.api("/me?fields=name,id,email", function(res){
          debugger;
        })
        debugger;
      },
      onLogout(r){
        debugger;
      }     

  },
  components:{
    facebookLogin
  }
};
</script>
