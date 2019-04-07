
<template>
    <div>
        <div v-if="isPc">
            <div id="design_popup0" class="popupBox designBox" style="display: block;" v-if="popUpShow">
                <img class="close" src="../../assets/close_popup.png" alt="" @click="popUpCloseClick">
                <dl style="padding: 20px 0;">
                    <dd>
                        <span>公司</span>
                        <input type="text" style="width: 200px;" id="txtCustomerName">
                    </dd>
                    <dd>
                        <span>时间</span>
                        <input type="text" id="txtDemandStartDate" style="width: 80px;">

                    </dd>
                    <dd>
                        <span>地点</span>
                        <input type="text" readonly id="txtDemandStartDate" style="width: 80px;" value="上海">
                    </dd>
                    <dd>
                        <span>人数</span>
                        <input type="text" style="width: 217px;" id="txtPersonNumber">
                    </dd>
                    <dd>
                        <span>团建预算</span>
                        <select id="drpBudget" name="Budget" style="width: 239px; background: url(../../assets/arrow_g.png) 96.5% 50% no-repeat;">
                            <option value="">请选择团建预算</option>
                            <option value="2">300以下</option>
                            <option value="3">300～500</option>
                            <option value="4">500～1000</option>
                            <option value="5">1000以上</option>
                            <option value="6">预算待定</option>
                        </select>
                    </dd>
                </dl>
                <p class="buttonBox">
                    <button>完成</button>
                </p>
            </div>

            <div class="contentBox">
                <div class="content">
                    <div class="contentL">
                        <router-link v-for="(item,index) in cases" :key="index" :to="linkTo(item.id)" @click="caseClick">
                            <div class="planBox">
                                <div class="plan_img" v-bind:style="getBackGround(item)"></div>
                                <div class="plan_intro">
                                    <p class="tit">
                                        <span>
                                            {{item.case_name}}
                                        </span>
                                    </p>
                                    <p class="city">
                                        <span>{{item.case_city}}</span>
                                        <span></span>
                                    </p>
                                    <p class="time">
                                        <span>
                                            {{item.stroke}}
                                        </span>
                                    </p>
                                    <p class="tag">
                                        <span>
                                            {{item.experience_form}}
                                        </span>
                                    </p>
                                    <span class="price">
                                        {{item.price}}
                                    </span>
                                </div>
                            </div>
                            <!--</a>-->
                        </router-link>
                    </div>
                    <div class="contentR">
                        <!--定制-->
                        <div class="customization">
                            <p>快速定制</p>
                            <p>一键提交&nbsp;&nbsp;&nbsp;&nbsp;快速响应</p>
                            <a style="cursor: pointer" @click="showPopup">开始定制</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cover" style="display: block;" v-if="popUpShow"></div>
        </div>
        <div v-else>
            <div class="wellChosen_recommend">
                <div class="classificationBox" id="productBox">
                    <div class="con" v-for="(item,index) in cases" :key="index">
                        <a class="pic" :href="linkTo2(item.id)" v-bind:style="getThemeStyle(item)" target="_blank"></a>
                        <div class="info">
                            <p>{{item.case_name}}</p>
                            <p>
                                <span class="price">{{item.price}}</span>
                                <span class="location">{{item.case_city}}</span>
                                <span class="time">{{item.stroke}}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Hostname } from "../../api/api";
export default {
    data() {
        return {
            cases: [],
            backgroundSize: 'background-size: 100% 100%',
            notshowRouter: true,
            popUpShow: false,
            isPc: true,
        };
    },
    methods: {
        getBackGround(item) {
            return 'background: url(' + item.avatar + ') no-repeat; background-size: 100% 100%';
        },
        linkTo(id) {
            return '/xfaxq/' + id
        },
        linkTo2(id) {
            return '#xfaxq/' + id
        },
        caseClick() {
            this.notshowRouter = false
        },
        popUpCloseClick() {
            this.popUpShow = false
        },
        showPopup() {
            this.popUpShow = true
        },
        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        },
        getThemeStyle(item) {
            return 'background: url(' + item.avatar + ') no-repeat; background-size: 100% 100%';
        },
    },
    mounted() {
        if (this._isMobile()) {
            this.isPc = false
        } else {
            this.isPc = true
        }
        console.log(this.$route)
        if (this.$route.path !== '/xfa') this.notshowRouter = false
        this.$http.get(`${Hostname}/GroupBuilding/get_all_cases`)
            .then(function(response) {
                let cases = response.body.data;
                this.cases = cases;
                console.log(cases)
            })
    },
    computed: {

    }

};
</script>
<style scoped>
dd,
div,
p,
span {
    margin: 0;
    padding: 0;
    text-decoration: none;
}

.contentBox {
    background: #f5f5f5;
    padding-bottom: 50px;
}

.content {
    width: 1200px;
    margin: 0 auto;
}

.contentL {
    display: inline-block;
    width: 900px;
}

.planBox {
    width: 860px;
    height: 240px;
    background: #fff;
    box-shadow: 2px 3px 20px 3px #ddd;
    padding: 15px 20px;
    margin-top: 30px;
}

.plan_img {
    display: inline-block;
    width: 425px;
    height: 240px;
}

.plan_intro {
    display: inline-block;
    width: 400px;
    height: 230px;
    vertical-align: top;
    padding-left: 30px;
    margin-top: 10px;
    position: relative;
}

.tit {
    color: black;
    font-size: 18px;
}

.city {
    display: inline-block;
    width: 120px;
    height: 18px;
    line-height: 18px;
    padding-left: 12px;
    background: url(../../assets/location.png) no-repeat left center;
    background-size: 12px 18px;
    margin: 20px 0;
}

.city span {
    font-size: 14px;
    padding-left: 10px;
    color: black;
}



.time {
    display: inline-block;
    width: 120px;
    height: 18px;
    line-height: 18px;
    padding-left: 17px;
    background: url(../../assets/clock.png) no-repeat left center;
    background-size: 17px 18px;
    margin: 20px 0;
}

.time span {
    font-size: 14px;
    padding-left: 10px;
    color: black;
}

.tag span {
    display: inline-block;
    font-size: 12px;
    color: #74c9ff;
    border: 1px solid #74c9ff;
    border-radius: 5px;
    padding: 3px 10px;
    margin-right: 20px;
    margin-bottom: 20px;
}

.price {
    color: #ff7b34;
    font-size: 18px;
}

.contentR {
    display: inline-block;
    width: 70px;
    vertical-align: top;
    margin-top: 30px;
    margin-left: 26px;
}

.customization {
    width: 270px;
    height: 160px;
    text-align: center;
    color: #fff;
    background: #ff7b34;
}

.contentR .customization p:first-child {
    font-size: 20px;
    padding-top: 20px;
}

.contentR .customization p:nth-child(2) {
    font-size: 14px;
    padding-top: 10px;
}

.contentR .customization a {
    display: inline-block;
    font-size: 20px;
    color: #fff;
    border: 1px solid #fff;
    padding: 5px 20px;
    margin-top: 25px;
}

.designBox {
    width: 500px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 3px 3px 20px 2px #999;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -185px;
    margin-left: -250px;
    z-index: 1002;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

.designBox dl {
    width: 325px;
    padding: 65px 0;
    margin: 0 auto;
}

.buttonBox {
    text-align: center;
    padding: 25px 0;
    border-top: 1px solid #ddd;
}

.buttonBox button {
    width: 180px;
    height: 35px;
    color: #fff;
    font-size: 16px;
    background: #ff7b34;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.designBox dl dd input {
    font-size: 14px;
    background: transparent;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px 10px;
    vertical-align: middle;
    display: inline-block;
}

.designBox dl dd span {
    display: inline-block;
    width: 60px;
    font-size: 14px;
    color: #666;
    text-align: left;
    vertical-align: middle;
}

.designBox dl dd {
    padding: 10px 0;
    font-size: 0;
}

.designBox dl dd select {
    font-size: 14px;
    background: transparent;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px 10px;
    vertical-align: middle;

    -moz-appearance: none;
    -webkit-appearance: none;
}

.cover {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.wellChosen_recommend .classificationBox .con .pic {
    display: block;
    width: 100%;
    height: 30vh;
    position: relative;
    overflow: hidden;
}

.wellChosen_recommend .classificationBox .con .info {
    padding: 2vw 4vw;
    position: relative;
}

.wellChosen_recommend .classificationBox .con .info p:first-child {
    font-size: 3.8vw;
    font-weight: bold;
    line-height: 4vw;
    margin-right: 6vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.wellChosen_recommend .classificationBox .con .info p:nth-child(2) {
    color: #999999;
    font-size: 3vw;
    line-height: 3.5vw;
    margin-top: 1vw;
}

.wellChosen_recommend .classificationBox .con .info .price {
    color: #f5722c;
    font-size: 35px
}

.wellChosen_recommend .classificationBox .con .info .location {
    background: url(../../assets/locate.png) no-repeat left;
    background-size: 3vw 3vw;
    padding-left: 3vw;
    margin-left: 0.3rem;
}

.wellChosen_recommend .classificationBox .con .info .time {
    background: url(../../assets/time.png) no-repeat left;
    background-size: 3vw 3vw;
    padding-left: 4vw;
    margin-left: 0.3rem;
}
</style>