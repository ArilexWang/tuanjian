
<template>
    <div class="main_box">
        <div class="proDetailBox">
            <el-carousel class="proDetailPic" indicator-position="none">
                <el-carousel-item v-for="(item,index) in currentCase.carousel_figs" :key="index">
                    <img :src="item.figure" alt="">
                </el-carousel-item>
            </el-carousel>
            <div class="proDetailR">
                <h2>{{currentCase.case_name}}</h2>
                <ul>
                    <li class="clr">
                        <p class="p_i1">
                            <i>团建行程：</i>
                            {{currentCase.stroke}}
                        </p>
                    </li>
                    <li class="clr">
                        <p class="p_i2">
                            <i>团建场地：</i>
                            {{currentCase.case_city}}-{{currentCase.case_region}}
                        </p>
                    </li>
                    <li class="clr">
                        <p class="p_i3">
                            <i>体验形式：</i>
                            {{currentCase.experience_form}}
                        </p>
                    </li>
                </ul>
                <div class="btnGroup clr">
                    <div class="price">
                        <span>{{currentCase.price}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="detailBox clr">
            <div class="tj_case_box pro_border leftBox">
                <div class="p_show_type cd_show_type">
                    <ul id="float_zzjs" class="float_zzjs fixed" style="top: 70px;">
                        <li class="" for="st_0">团建特色</li>
                        <li class="" for="st_1">行程介绍</li>
                        <li class="" for="st_5">费用说明</li>
                        <li class="" for="st_6">温馨提示</li>
                        <li class="" for="st_7">用户评价</li>
                    </ul>
                </div>
                <div class="line-detail-tabcot">
                    <span class="detail_tit chsl">团建特色</span>
                    <div for="st_0" id="div_productCon">
                        <ul class="p_show_jtte">
                            <li>
                                <div class="plotBox">
                                    <div class="titlecontent">
                                        <div class="titlecontent" v-for="(item,index) in tjtsInfoList" :key="index">
                                            <div class="twoPic clearfix">
                                                <span>
                                                    <img :src="tjtsInfoList[index].left_pic" width="400px" height="225px" alt="">
                                                </span>
                                                <span>
                                                    <img :src="tjtsInfoList[index].right_pic" width="400px" height="225px" alt="">
                                                </span>
                                            </div>
                                            <p>{{item.copywriting}}</p>
                                        </div>
                                    </div>
                                    <div class="titlecontent">
                                        <p class="subHead">团建价值</p>
                                        <div class="titlecontent" v-for="(item,index) in tjjzInfoList" :key="index">
                                            <div class="twoPic clearfix">
                                                <span>
                                                    <img :src="tjjzInfoList[index].left_pic" width="400px" height="225px" alt="">
                                                </span>
                                                <span>
                                                    <img :src="tjjzInfoList[index].right_pic" width="400px" height="225px" alt="">
                                                </span>
                                            </div>
                                            <p>{{item.copywriting}}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div style="clear: both;"></div>
                        <span class="detail_tit cdjs" v-if="cdjsInfoList.length">场地介绍</span>
                        <ul class="p_show_jtte">
                            <li class="geryBg">
                                <div class="titlecontent" v-for="(item,index) in cdjsInfoList" :key="index">
                                    <div class="twoPic clearfix">
                                        <span>
                                            <img :src="cdjsInfoList[index].left_pic" width="400px" height="225px" alt="">
                                        </span>
                                        <span>
                                            <img :src="cdjsInfoList[index].right_pic" width="400px" height="225px" alt="">
                                        </span>
                                    </div>
                                    <p>{{item.copywriting}}</p>
                                </div>
                            </li>
                        </ul>
                        <div style="clear: both;"></div>
                    </div>
                    <div for="st_1">
                        <span class="detail_tit xcjs">行程介绍</span>
                        <img :src="currentCase.itinerary_introduction" width="430px" style="display:block;margin:10px" alt="">
                        <div style="clear: both;"></div>
                    </div>
                    <div for="st_5" style="padding: 20px 0px;">
                        <span class="detail_tit fybj">费用报价</span>
                        <ul class="p_show_jtte">
                            <li>
                                <table style="margin: 0px 25px; border-collapse: separate; border-spacing: 0px 10px;">
                                    <tbody>
                                        <tr>
                                            <td style="font-weight: 900">费用包含：
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style="white-space: pre-line;margin-top:-30px;">
                                                    {{currentCase.cost_include}}
                                                </p>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-weight: 900">费用不包含：
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style="white-space: pre-line;margin-top:-30px;">
                                                    {{currentCase.cost_exclude}}
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-weight: 900">特殊说明：
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                        </ul>
                        <div style="clear: both;"></div>
                    </div>
                    <div for="st_6">
                        <span class="detail_tit wxts">温馨提示</span>
                        <ul class="p_show_jtte">
                            <li class="geryBg">
                                <div class="ReminderItem rich_text">
                                    <div style="text-align:justify;">
                                        <span>
                                            <strong>
                                                <span>★</span>
                                            </strong>
                                            <span>为保证
                                                <span>
                                                    <a href="http://www.etuanjian.com/" target="_blank">
                                                        <span>团建活动</span>
                                                    </a>
                                                </span>顺利，请认真阅读</span>
                                            <strong>
                                                <a href="http://m.etuanjian.com/home/safetymanual" target="_blank">
                                                    <span>《e团建安全手册》</span>
                                                </a>
                                            </strong>
                                            <span>并切实遵守。</span>
                                        </span>
                                    </div>
                                    <div style="text-align:justify;">
                                        <span>
                                            <span>
                                                <span></span><br>
                                            </span>
                                        </span>
                                        <span>
                                            <strong>★
                                                <a href="http://etuanjian.com" target="_blank">
                                                    <span>团建</span>
                                                </a>须知：</strong>
                                        </span><br>
                                        <span>
                                            <strong>关于健康：</strong>
                                        </span><br>
                                        <span>患有严重的心脏病、高血压、哮喘等易发突发性疾病者、孕妇；患有急性传染病及其他不适于参加公众活动的疾病者；近期做过大手术者；以及经医生叮嘱减少大量户外活动者，请您务必声明您的健康状况，如您具备上述情形，则您不被接受团建申请；</span><br>
                                        <span>
                                            <strong>关于着装：</strong>
                                        </span><br>
                                        <span>请着运动服或其它宽松服装及软底运动鞋，女性不要穿着裙装、佩戴戒指、项链、耳环等饰品；</span><br>
                                        <span>
                                            <strong>关于纪律：</strong>
                                        </span><br>
                                        <span>所有学员必须服从老师及教练的安排与指挥，未经许可，不得擅自离队，进行其他与
                                            <a href="http://www.etuanjian.com/" target="_blank">
                                                <span>团建</span>
                                            </a>无关的活动；</span><br>
                                        <span>
                                            <strong>关于环保：</strong>
                                        </span><br>
                                        <span>遵守各景区、基地规定，爱护环境及各类设施，不要乱丢垃圾；</span><br>
                                        <span>
                                            <strong>关于物品：</strong>
                                        </span><br>
                                        <span>请携带身份证及相关证明身份的证件，为保证个人财产安全，请避免携带大量现金及贵重物品。</span><br>
                                        <span>
                                            <strong>关于防火：</strong>
                                        </span><br>
                                        <span>
                                            <a href="http://www.etuanjian.com/" target="_blank">
                                                <span>团建活动</span>
                                            </a>中自觉遵守《消防安全管理规定》，禁止在室内吸烟；禁止在
                                            <a href="http://www.etuanjian.com/" target="_blank">
                                                <span>团建活动场地</span>
                                            </a>吸烟；禁止将未熄的烟头带入团建场地。</span>
                                    </div>
                                    <div style="text-align:justify;">
                                        <span>
                                            <span><br>
                                            </span>
                                        </span>
                                        <span>
                                            <strong>★预定须知：</strong>
                                        </span><br>
                                        <span>
                                            <span>1、请</span>
                                            <strong>
                                                <span>提前7天</span>
                                            </strong>
                                            <span>进行预订；</span>
                                        </span><br>
                                        <span>
                                            <span>2、此价格为20人核算价格，</span>
                                            <strong>
                                                <span>不满20人以20人核算价格</span>
                                            </strong>
                                            <span>，如有人数变动请联系客服；</span>
                                        </span><br>
                                        <span>
                                            <span>3、预定后请务必保持手机畅通。</span>
                                            <span></span>
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div style="clear: both;"></div>
                    </div>

                    <!--<div for="st_7">
                                <span class="detail_tit yhpj">用户评价</span>
                                <ul class="p_show_jtte">
                                    <li class="geryBg">
                                        <div class="discussBox" style="margin-top: 0px;">
                                            <div class="disLevel clr">
                                                <a style="cursor: pointer" class="active" val="0">
                                                    <span>好评</span>
                                                    <i class="checkIcon"></i>
                                                </a>
                                                <a style="cursor: pointer" val="1">
                                                    <span>中评</span>
                                                    <i class="checkIcon"></i>
                                                </a>
                                                <a style="cursor: pointer" val="2">
                                                    <span>差评</span>
                                                    <i class="checkIcon"></i>
                                                </a>
                                            </div>
                                            <div class="disTit">
                                                <span>填写评价</span>
                                            </div>
                                            <div class="editBox clr">
                                                <div class="editCon">
                                                    <textarea id="txtEvaluateContent" placeholder="请对我们的产品进行评价，您的评价对我们非常宝贵！谢谢！"></textarea>
                                                    <div class="addpicBox">
                                                        <span class="uploadPic" id="uploadBtn">
                                                            <input id="file1" name="file" type="file" class="upload" onchange="PageUI_Pro.FileAjaxFileUpload()">
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="javascript:PageUI_Pro.Evaluate();" class="discussBtn">提交评价</a>
                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>-->

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
            currentCase: {},
            tjtsInfoList: [],
            tjjzInfoList: [],
            cdjsInfoList: [],
        };
    },
    methods: {
        selectCaseInfo(currentCase) {
            let caseInfo = currentCase.case_info
            console.log(caseInfo)
            for (var index in caseInfo) {
                let infoType = caseInfo[index].case_info_type
                if (infoType === '团建特色') {
                    this.tjtsInfoList.push(caseInfo[index])
                } else if (infoType === '团建价值') {
                    this.tjjzInfoList.push(caseInfo[index])
                } else {
                    this.cdjsInfoList.push(caseInfo[index])
                }
            }
            console.log(this.tjtsInfoList)
            console.log(this.tjjzInfoList)
            console.log(this.cdjsInfoList)
        }
    },
    mounted() {
        console.log(this.$route.params)
        let para = this.$route.params
        this.$http.post(`${Hostname}/GroupBuilding/get_case`, JSON.stringify(para))
            .then(function(response) {
                let currentCase = response.body
                this.currentCase = currentCase
                console.log(currentCase)
                this.selectCaseInfo(currentCase)
            })
    }

};
</script>

<style scoped>
.main_box {
    background: #f5f5f5;
}

.proDetailBox {
    width: 1140px;
    border: none;
    font-size: 0;
    background: #fff;
    padding: 20px 30px;
    margin: 0 auto;
}

.proDetailPic {
    width: 700px;
    height: 393px;
    display: inline-block;
}

.proDetailPic img {
    width: 700px;
    height: 393px;
    display: block;
}

.el-carousel__container {
    position: relative;
    height: 100%;
}

.proDetailR {
    width: 400px;
    height: 393px;
    float: right;
    background: #fff;
    position: relative;
}

.proDetailR h2 {
    font-size: 24px;
    font-weight: normal;
    margin: 15px 0;
}

.p_i1 {
    background: url(../../assets/p_w_xc.png) left center no-repeat;
}

.p_i2 {
    background: url(../../assets/location.png) left center no-repeat;
}

.p_i3 {
    background: url(../../assets/p_w_xs.png) left center no-repeat;
}

.clr:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
    font-size: 0;
}

.proDetailR ul li p {
    float: left;
    padding: 6px 0 6px 25px;
}

.proDetailR ul {
    font-size: 14px;
}

p,
ul,
a {
    padding: 0;
    margin: 0;
    list-style-type: none;
    text-decoration: none;
    color: black;
}

.proDetailR ul li p i {
    font-style: normal;
    color: #ff7b34;
}

.btnGroup {
    width: 400px;
    position: absolute;
    bottom: 0;
}

.price {
    color: #ff7b34;
    text-align: right;
    font-size: 18px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ff7b34;
}

.proDetailR .price span {
    font-size: 24px;
    margin: 0 4px;
}

.detailBox {
    width: 1200px;
    margin: 0 auto;
}

.leftBox {
    width: 900px;
    float: left;
}

.pro_border {
    border: 1px solid #e8e8e8;
    margin-top: 30px;
}

.tj_case_box {
    width: 1200px;
    margin: -1px auto 0 auto;
    background: #fff;
    padding-bottom: 90px;
}

.p_show_type {
    width: 1202px;
    float: left;
    height: 140px;
    position: relative;
    margin: -51px 0 0 -1px;
    z-index: 1;
}

.p_show_type ul {
    width: 900px;
    height: 49px;
    float: left;
    border: 1px solid #e8e8e8;
    border-bottom: 2px solid #ed7a00;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50px;
    margin: 0 0 0 -601px;
}

.leftBox .p_show_type ul li {
    padding: 0 20px;
}

.p_show_type ul li {
    float: left;
    height: 49px;
    padding: 0 30px;
    line-height: 52px;
    color: #000;
    font-size: 16px;
    border-right: 1px solid #e8e8e8;
    cursor: pointer;
}

.p_show_type ul .active {
    color: #fff;
    background: #ed7a00;
}

.line-detail-tabcot {
    padding: 0 20px;
}

.detail_tit {
    font-size: 16px;
    padding-left: 25px;
}

.detail_tit.chsl {
    background: url('../../assets/chsl.png') left center no-repeat;
}

.p_show_jtte {
    width: 860px;
}

.p_show_jtte li {
    font-size: 14px;
    color: #565656;
    line-height: 30px;
}

.plotBox {
    padding: 15px;
    box-sizing: border-box;
}

.titlecontent {
    padding: 3px 0;
}

.subHead {
    font-size: 16px;
    color: #ff7b34;
    background: url(../../assets/i_jz.png) no-repeat center left;
    padding-left: 20px;
    margin-bottom: 15px;
}

.cdjs {
    background: url(../../assets/cdjs.png) left center no-repeat;
}

#div_productCon span {
    font-size: 14px !important;
    line-height: 30px!important;
}

.twoPic span {
    display: block;
    float: left;
    margin-right: 15px;
}

.twoPic {
    width: 100%;
}

.xcjs {
    background: url(../../assets/xcjs.png) left center no-repeat;
}

.fybj {
    background: url(../../assets/fybj.png) left center no-repeat;
}

.detail_tit.wxts {
    background: url(../../assets/wxts.png) left center no-repeat;
}

.ReminderItem {
    padding: 20px 0;
    border-bottom: 1px solid #BFBFBF;
    font-size: 14px;
    line-height: 25px;
}

.geryBg {
    padding: 15px;
}
</style>