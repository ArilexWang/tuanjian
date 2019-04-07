
<template>
  <div class="content">
    <div class="banner bannerTop has-dots" style="overflow: hidden; width: 1425px; height: 500px;">
      <!--定制需求-->
      <div class="designDemandBox">
        <div class="designDemand">
          <dl>
            <dd>
              <span>公司</span>
              <input type="text" style="width: 217px;" id="txtCustomerName">
            </dd>
            <dd>
              <span>时间</span>
              <input type="text" id="txtDemandStartDate" style="width: 80px; background: url() 92% 50% no-repeat;">
              <!--<i>至</i>
                                                <input type="text" readonly="readonly" id="txtDemandEndDate" style="width: 80px; background: url() 92% 50% no-repeat;">
                                                <input type="hidden" readonly="readonly" id="txtDays">-->
            </dd>
            <dd>
              <span>地点</span>
              <select data-val="true" data-val-number="字段 省 必须是一个数字。" data-val-required="省 字段是必需的。" id="drpDemandProvince" name="DemandProvince" style="width: 102px; background: url() 92% 50% no-repeat;">
                <option value="">请选择</option>
                <option value="9">上海</option>
                <option value="10">江苏</option>
              </select>
              <i>一</i>
              <!--<select style="width: 102px; background: url() 92% 50% no-repeat;" name="" id="drpDemandCity">
                                                      <option value="">选择地区</option>
                                                    </select>-->
            </dd>
            <dd>
              <span>人数</span>
              <input type="text" style="width: 217px;" id="txtPersonNumber">
            </dd>
            <dd>
              <span>团建预算</span>
              <select id="drpBudget" name="Budget" style="width: 239px; background: url(/Resource/Content/images/arrow_w.png) 96.5% 50% no-repeat;">
                <option value="">请选择团建预算</option>
                <option value="2">300以下</option>
                <option value="3">300～500</option>
                <option value="4">500～1000</option>
                <option value="5">1000以上</option>
                <option value="6">预算待定</option>
              </select>
            </dd>
            <dd>
              <button id="btnNext" class="nxetBtn">提交定制需求</button>
            </dd>
          </dl>
        </div>
      </div>

      <!--轮播图片-->
      <el-carousel style="margin: auto; width: 100%; position: relative; left: 0%; height: 500px;" indicator-position="none">
        <el-carousel-item style="height:500px">
          <img src="http://images.ferrariwang.cn/GPImages/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7_2019-01-12_%E4%B8%8A%E5%8D%8812.18.19.png" height="500px" width="100%" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="projectBox">
      <div class="box_tit">
        <span style="float:left">选方案</span>
        <ul class="project_list">
          <li v-for="(item,index) in types" :key="index" v-bind:class="[ index === chosenTypeIndex ? 'chosen' : ''  ]" @click="typeClick(index)">{{item}}</li>
        </ul>
        <a class="more" href="#xfa" target="_blank">更多</a>
      </div>
      <div class="box_con">
        <ul v-for="(item,index) in casesByType" :key="index" v-bind:class="[ index === chosenTypeIndex ? '' : 'notShow' ]">
          <li v-for="(subItem,subIndex) in item" :key="subIndex">
            <a :href="linkTo(subItem.id)" target="_blank">
              <img :src="casesByType[index][subIndex].avatar" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="topicBox">
      <p class="box_tit" style="margin:0">
        专题团建
        <a class="more" href="#qfx" target="_blank">更多</a>
      </p>

      <div class="topic_con">
        <a class="topic" href="" v-for="(item,index) in themes" :key="index" v-bind:style="getThemeStyle(item)"></a>
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
      chosenTypeIndex: 0,
      themes: [],
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
        console.log(this.casesByType)
      })
      .catch(function(error) {
        console.log(error);
      });

    this.$http
      .get(`${Hostname}/GroupBuilding/get_all_themes`)
      .then(function(response) {
        console.log(response.body.data);
        this.themes = response.body.data
      });
  },
  methods: {
    typeClick(index) {
      this.chosenTypeIndex = index;
      console.log(this.casesByType[index]);
    },
    getThemeStyle(item) {
      return 'background: url(' + item.avatar + ') no-repeat; background-size: 100% 100%';
    },
    linkTo(id) {
      // this.notshowRouter = false
      return '#xfaxq/' + id
    },
  }
};
</script>

<style scoped>
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

dd,
dl,
ul {
  margin: 0;
  padding: 0;
}

.project_list {
  display: inline-block;
  margin-left: 110px;
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

.projectBox .box_con ul li a>img {
  width: 369px;
  height: 208px;
}

.topicBox {
  padding-top: 50px;
  width: 1200px;
  margin: 0 auto;
}

.topic_con {
  font-size: 0;
  background: #fff;
  padding: 20px;
}

.topic {
  display: inline-block;
  width: 275px;
  height: 400px;
  display: inline-block;
  margin-left: 20px;
  position: relative;
}

.designDemandBox {
  width: 1200px;
  height: 343px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -171.5px;
  margin-left: -600px;
  z-index: 1001;
}

.designDemand {
  width: 319px;
  height: 313px;
  border-left: 5px solid #ff7b34;
  background: rgba(0, 0, 0, 0.5);
  padding: 15px 50px 15px 15px;
}

.designDemand dl dd {
  padding: 10px 0;
  font-size: 0;
  text-align: left;
}

.bannerTop {
  width: 100%!important;
  height: 500px!important;
  position: relative;
  overflow: hidden;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: rgba(255, 255, 255, .6);
  text-shadow: 0 0 1px rgba(0, 0, 0, .05), 0 1px 2px rgba(0, 0, 0, .3);
  /* box-shadow: 0 1px 2px rgba(0,0,0,.25); */
}

.designDemand dl dd input {
  font-size: 14px;
  color: #fff;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 10px;
  vertical-align: middle;
}

.designDemand dl dd span {
  display: inline-block;
  width: 65px;
  font-size: 14px;
  color: #fff;
  text-align: right;
  margin-right: 10px;
  vertical-align: middle;
}

.designDemand dl dd select {
  font-size: 14px;
  color: #fff;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 10px;
  vertical-align: middle;

  -moz-appearance: none;
  -webkit-appearance: none;
}

.designDemand dl dd button {
  width: 180px;
  height: 38px;
  line-height: 38px;
  font-size: 16px;
  color: #fff;
  background: #ff7b34;
  border: none;
  border-radius: 5px;
  margin-left: 75px;
  cursor: pointer;
}
</style>