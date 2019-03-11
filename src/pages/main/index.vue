<style>

</style>
<template>
  <div>
    abcd
  </div>
</template>
<script>

import { get_case_by_condition, getAllVillas } from '../../api/api';

export default {
  mounted() {
    console.log("abc")
    // get_case_by_condition().then(function(res){
    //   console.log(res)
    // })
    // getAllVillas().then(function(res) {
    //   console.log(res.data);
    // }).catch(function(res) {
    //   console.log(res)
    // })
    this.$http.get("http://118.25.6.157:1226/GroupBuilding/get_all_cases", { headers: "Access-Control-Allow-Origin:*" }).then(function(response) {
				console.log(response)
			}).catch(function(error) {
				console.log(error)
			})
  }
};
</script>