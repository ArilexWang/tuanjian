
<template>
  <div class="content">
    <div class="projectBox">
      <div class="box_tit">
        <span style="float:left">选方案</span>
        <ul class="project_list">
          <li
            v-for="(item,index) in types"
            :key="index"
            v-bind:class="[ index === chosenTypeIndex ? 'chosen' : ''  ]"
            @click="typeClick(index)"
          >{{item}}</li>
        </ul>
        <a class="more" href target>更多</a>
      </div>
      <div class="box_con">
        <ul
          v-for="(item,index) in casesByType"
          :key="index"
          v-bind:class="[ index === chosenTypeIndex ? '' : 'notShow' ]"
        >
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { Hostname } from "../../api/api";

export default {
  data() {
    return {
      types: [],
      cases: [],
      casesByType: [],
      chosenTypeIndex: 0
    };
  },
  mounted() {
    this.$http
      .get(`${Hostname}/GroupBuilding/get_all_cases`)
      .then(function(response) {
        console.log(response.body.data);
        let cases = response.body.data;
        let types = [];
        for (var index in cases) {
          let case_type = cases[index].case_type;
          let typeIndex = types.indexOf(case_type);
          if (typeIndex === -1) {
            types.push(case_type);
            this.casesByType.push(new Array());
          }
        }
        this.cases = cases;
        this.types = types;
        this.chosenType = 0;
        for (var index in cases) {
          let tempCase = cases[index];
          let tempCaseType = tempCase.case_type;
          let typeIndex = types.indexOf(tempCaseType);
          if (typeIndex !== -1) {
            this.casesByType[typeIndex].push(tempCase);
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });

    this.$http
      .get(`${Hostname}/GroupBuilding/get_all_themes`)
      .then(function(response) {
        console.log(response);
      });
  },
  methods: {
    typeClick(index) {
      this.chosenTypeIndex = index;
      console.log(this.casesByType[index]);
    }
  }
};
</script>

<style>
.content {
  width: 100%;
  background: #f5f5f5;
  position: relative;
}
.projectBox {
  padding-top: 50px;
  width: 1200px;
  margin: 0 auto;
  font-size: 0;
}
.box_tit {
  height: 20px;
  line-height: 20px;
  color: #000;
  background: #fff;
  border-bottom: 1px solid #dadada;
  font-size: 22px;
  padding: 20px;
}
ul {
  margin: 0;
  padding: 0;
}
.project_list {
  display: inline-block;
  margin-left: 10px;
}
.project_list li {
  display: inline-block;
  font-size: 14px;
  line-height: 28px;
  padding: 0 20px;
  margin-right: 10px;
  cursor: pointer;
}
.project_list li.chosen {
  color: #fff;
  background: #ff7b34;
  border-radius: 5px;
}
.more {
  font-size: 12px;
  color: #999;
  float: right;
}
.box_con {
  background: #fff;
  padding: 20px;
  font-size: 0;
}
.notShow {
  display: none;
}
</style>