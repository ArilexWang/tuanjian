<style lang="less" scoped>
.login-msg {
  padding: 50px;
  text-align: center;
}
.msg {
  padding: 50px;
  text-align: center;
  font-size: 20px;
  color: red;
}
</style>
<template>
  <div>

  </div>
</template>
<script>
import { mapState } from "vuex";
import logo from "../../assets/logo.png";
export default {
  data() {
    return {
      logo
    };
  },
  // computed: mapState({ user: state => state.user })
};
</script>