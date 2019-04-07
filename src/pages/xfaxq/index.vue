
<template>
    <div>
        <div class="main_box" v-if="isPc">
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
        <div v-else class="scroll-wrap">
            <div class="listBox clientTabCon">
                <div class="productDetail">
                    <div class="top_box">
                        <div style="position: relative;">
                            <el-carousel class="productDetailItem" indicator-position="none">
                                <el-carousel-item v-for="(item,index) in currentCase.carousel_figs" :key="index" style="height:28vh">
                                    <img :src="item.figure" alt="" width="100%" height="100%">
                                </el-carousel-item>
                            </el-carousel>
                            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.3);"></div>

                        </div>

                        <!-- 产品信息 -->
                        <div class="product_titleBox">
                            <p class="product_name">{{currentCase.case_name}}</p>
                            <p class="product_address">{{currentCase.case_city}}</p>
                            <p class="product_num"></p>
                            <p class="product_intro">
                                <!-- <img src="/resource/WAP/images/icon/product/time.png"> -->
                                <span>时间：
                                    <i>{{currentCase.stroke}}</i>
                                </span>
                                <!-- <img src="/resource/WAP/images/icon/product/renshu.png"> -->

                                <!-- <img src="/resource/WAP/images/icon/product/co.png"> -->

                            </p>
                            <p class="product_tag">
                                <span>{{currentCase.experience_form}}</span>

                            </p>
                        </div>
                        <!-- 推荐理由 -->
                        <div class="product_sendBox">
                            <div class="tit">
                                <img src="../../assets/tj.png" alt="">
                                <span>推荐理由</span>
                            </div>
                            <div class="con">
                                <p class="product_sendBoxR">
                                    {{currentCase.recommend_reason}}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="slide-box">
                        <div class="slide-item cur">
                            <a href="javascript:void(0);" for="fajs">方案介绍</a>
                        </div>
                        <div class="slide-item">
                            <a href="javascript:void(0);" for="fysm">费用说明</a>
                        </div>
                        <div class="slide-item">
                            <a href="javascript:void(0);" for="wxts">温馨提示</a>
                        </div>
                        <div class="slide-item">
                            <a href="javascript:void(0);" for="yhpj">用户评价</a>
                        </div>
                    </div>
                    <!--方案介绍-->
                    <div class="slide-itemCon" for="fajs">
                        <!--视频-->
                        <!-- 团建特色 -->
                        <div class="product_jiazhiBox" style="margin-top: 20px; padding: 10px">
                            <p class="jiazhi_tit">
                                <img src="../../assets/shu.png">
                                <span>团建特色</span>
                            </p>
                            <div class="jiazhi_con" style="text-align: left;" v-for="(item,index) in tjtsInfoList" :key="index">
                                <div class="jiazhi1" v-bind:style="getStyleWithUrl(item.left_pic)"></div>
                                <div class="jiazhi2" v-bind:style="getStyleWithUrl(item.right_pic)"></div>
                                <p class="txt">
                                    {{item.copywriting}}
                                </p>
                            </div>

                        </div>
                        <div class="blank_10"></div>
                        <!-- 团建价值 -->
                        <div class="product_jiazhiBox" style="padding: 10px">
                            <p class="jiazhi_tit">
                                <img src="../../assets/shu.png">
                                <span>团建价值</span>
                            </p>
                            <div class="jiazhi_con" style="text-align: left;" v-for="(item,index) in tjjzInfoList" :key="index">
                                <div class="jiazhi1" v-bind:style="getStyleWithUrl(item.left_pic)"></div>
                                <div class="jiazhi2" v-bind:style="getStyleWithUrl(item.right_pic)"></div>
                                <p class="txt">
                                    {{item.copywriting}}
                                </p>
                            </div>
                        </div>
                        <div class="blank_10"></div>
                        <!-- 团建场地 -->
                        <div class="product_jiazhiBox" style="padding: 10px">
                            <p class="jiazhi_tit">
                                <img src="../../assets/shu.png">
                                <span>团建场地</span>
                            </p>
                            <div class="jiazhi_con" style="text-align: left;" v-for="(item,index) in cdjsInfoList" :key="index">
                                <div class="jiazhi1" v-bind:style="getStyleWithUrl(item.left_pic)"></div>
                                <div class="jiazhi2" v-bind:style="getStyleWithUrl(item.right_pic)"></div>
                                <p class="txt">
                                    {{item.copywriting}}
                                </p>
                            </div>
                        </div>
                        <div class="blank_10"></div>
                        <!-- 体验流程 -->
                        <div class="product_teseBox">
                            <p class="productDetail_tit">
                                <img src="../../assets/shu.png">
                                <span>体验流程</span>
                            </p>
                            <img :src="currentCase.itinerary_introduction" width="100%" style="display:block;margin:10px" alt="">
                        </div>
                        <div class="blank_10"></div>
                        <!-- 推荐科目 -->
                        <div class="blank_10"></div>
                        <!-- 推荐场地 -->
                        <div class="blank_10"></div>
                        <!-- 推荐老师 -->
                        <div class="blank_10"></div>
                        <!-- 相关案例 -->
                    </div>
                    <!--费用说明-->
                    <div class="slide-itemCon" for="fysm">
                        <!-- 费用说明 -->
                        <div class="product_teseBox">
                            <p class="productDetail_tit">
                                <img src="../../assets/sanjiao.png">
                                <span>费用说明</span>
                            </p>
                            <div class="costBox">
                                <span class="tag">费用说明</span>
                                <p class="tit">费用包含：</p>
                                <p>
                                    1.培训师：根据培训人数提供相应的培训师人数&nbsp;<br>2.培训：方案的策划设计及培训费&nbsp;<br>3.物资：行程活动中所涉及的道具和物资&nbsp;<br>4.保险：代客购买专业活动保险&nbsp;<br>5.饮水：活动中所需的饮用水&nbsp;<br>6.摄像：活动过程提供相关的摄影服务&nbsp;<br> </p>
                                <p class="tit">费用不包含：</p>
                                <p>
                                    1.交通：按照预定预计人数确定乘坐车型（正规空调旅游巴士）&nbsp;<br>2.餐饮：标准餐标10人一桌（多餐标可选）<br>3.住宿：提供标准间或多人间住宿服务（住宿标准可选：农家院，1星-5星酒店或度假村）&nbsp;<br>4.场地：行程活动中所涉及的场地费及相关景区门票费用<br>5.各种私人消费及不可抗力因素所产生的额外费用；&nbsp;<br>6.活动期间内因违约、自身过错或自身疾病引起的人身和财产损失。&nbsp;<br>7.由天气、灾难、战争等不可抗力因素所造成的不能服务或延迟服务所发生的费用。 </p>
                                <p class="tit">预定须知：</p>
                                <!--后台没有编辑，谢金霄让写死-->
                                <p>
                                    1）请提前7天进行预订<br> 2）此价格为20人核算价格，不满20人以20人核算价格，如有人数变动请联系客服
                                    <br> 3）预定后请务必保持手机畅通
                                    <br> 4）活动期间内旅游者因违约、自身过错或自身疾病引起的人身和财产损失
                                    <br> 5）由天气、灾难、战争等不可抗力因素所造成的不能服务或延迟服务所发生的费用
                                </p>
                            </div>
                        </div>
                    </div>
                    <!--温馨提示-->
                    <div class="slide-itemCon" for="wxts">
                        <!-- 温馨提示 -->
                        <div class="product_teseBox">
                            <p class="productDetail_tit">
                                <img src="../../assets/sanjiao.png">
                                <span>温馨提示</span>
                            </p>
                            <div class="costBox rich_text" style="font-size:3vw">
                                <div style="text-align:justify;">
                                    <span style="">
                                        <strong>
                                            <span style="color:#E56600;">★</span>
                                        </strong>
                                        <span style="">为保证
                                            <span style="color:#000000;">
                                                <a href="http://www.etuanjian.com/" target="_blank">
                                                    <span style="color:#000000;">团建活动</span>
                                                </a>
                                            </span>顺利，请认真阅读</span>
                                        <strong>
                                            <a href="http://m.etuanjian.com/home/safetymanual" target="_blank">
                                                <span style="color:#E56600;">《e团建安全手册》</span>
                                            </a>
                                        </strong>
                                        <span style="">并切实遵守。</span>
                                    </span>
                                </div>
                                <div style="text-align:justify;">
                                    <span>
                                        <span style="">
                                            <span style=""></span><br>
                                        </span>
                                    </span>
                                    <span style="color:#E56600;">
                                        <strong>★
                                            <a href="http://etuanjian.com" target="_blank">
                                                <span style="color:#E56600;">团建须知：</span>
                                            </a>
                                        </strong>
                                    </span><br>
                                    <span style="color:#E56600;">
                                        <strong>关于健康：</strong>
                                    </span><br>
                                    <span style="">患有严重的心脏病、高血压、哮喘等易发突发性疾病者、孕妇；患有急性传染病及其他不适于参加公众活动的疾病者；近期做过大手术者；以及经医生叮嘱减少大量户外活动者，请您务必声明您的健康状况，如您具备上述情形，则您不被接受团建申请；</span><br>
                                    <span style="color:#E56600;">
                                        <strong>关于着装：</strong>
                                    </span><br>
                                    <span style="">请着运动服或其它宽松服装及软底运动鞋，女性不要穿着裙装、佩戴戒指、项链、耳环等饰品；</span><br>
                                    <span style="color:#E56600;">
                                        <strong>关于纪律：</strong>
                                    </span><br>
                                    <span style="">所有学员必须服从老师及教练的安排与指挥，未经许可，不得擅自离队，进行其他与
                                        <a href="http://www.etuanjian.com/" target="_blank">
                                            <span style="color:#000000;">团建</span>
                                        </a>无关的活动；</span><br>
                                    <span style="color:#E56600;">
                                        <strong>关于环保：</strong>
                                    </span><br>
                                    <span style="">遵守各景区、基地规定，爱护环境及各类设施，不要乱丢垃圾；</span><br>
                                    <span style="color:#E56600;">
                                        <strong>关于物品：</strong>
                                    </span><br>
                                    <span style="">请携带身份证及相关证明身份的证件，为保证个人财产安全，请避免携带大量现金及贵重物品。</span><br>
                                    <span style="color:#E56600;">
                                        <strong>关于防火：</strong>
                                    </span><br>
                                    <span style="">
                                        <a href="http://www.etuanjian.com/" target="_blank">
                                            <span style="color:#000000;">团建活动</span>
                                        </a>中自觉遵守《消防安全管理规定》，禁止在室内吸烟；禁止在
                                        <a href="http://www.etuanjian.com/" target="_blank">
                                            <span style="color:#000000;">团建活动场地</span>
                                        </a>吸烟；禁止将未熄的烟头带入团建场地。</span>
                                </div>
                                <div style="text-align:justify;">
                                    <span>
                                        <span style=""><br>
                                        </span>
                                    </span>
                                    <span style="color:#E56600;">
                                        <strong>★预定须知：</strong>
                                    </span><br>
                                    <span style="">
                                        <span style="">1、请</span>
                                        <strong>
                                            <span style="color:#E56600;">提前7天</span>
                                        </strong>
                                        <span style="">进行预订；</span>
                                    </span><br>
                                    <span style="">
                                        <span style="">2、此价格为20人核算价格，</span>
                                        <strong>
                                            <span style="color:#E56600;">不满20人以20人核算价格</span>
                                        </strong>
                                        <span style="">，如有人数变动请联系客服；</span>
                                    </span><br>
                                    <span style="">
                                        <span style="">3、预定后请务必保持手机畅通。</span>
                                        <span style=""></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--用户评价-->
                    <div class="product_contact">
                        <div class="product_contactR" style="width: 100%">
                            <a href="#main" class="Btn" style="background: #fff; color: #ff6930;" target="_blank">
                                <img src="../../assets/gw_icon01.png"><br> 返回首页
                            </a>

                            <a href="" class="Btn" style="background: #4abcfe">
                                <img src="../../assets/ljzd.png"><br> 立即致电
                            </a>
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
            currentCase: {},
            tjtsInfoList: [],
            tjjzInfoList: [],
            cdjsInfoList: [],
            isPc: false
        };
    },
    methods: {
        selectCaseInfo(currentCase) {
            let caseInfo = currentCase.case_info
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
        },
        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        },
        getStyleWithUrl(url) {
            return "height: 15vh; background: url('" + url + "') no-repeat; background-size: 100% 100%;"
        }

    },
    mounted() {
        if (this._isMobile()) {
            this.isPc = false

        } else {
            this.isPc = true

        }
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

.productDetail .productDetailItem {
    width: 100%;
    height: 28vh;
    position: relative;
}

.product_titleBox {
    /*width: 100%;*/
    background: #fff;
    padding: 3vw 4vw;
    margin-top: 0.25rem;
}

.product_titleBox p {
    font-size: 3vw;
    text-align: center;
    padding-bottom: 0.1rem;
}

.product_titleBox .product_name {
    font-size: 5vw;
}

.product_titleBox .product_address {
    font-size: 3.5vw;
    color: #666;
}

.product_intro span i {
    color: #ff6930;
    font-style: normal;
}

.product_tag span {
    display: inline-block;
    font-size: 3vw;
    line-height: 4vw;
    color: #fff;
    background: #ff6930;
    margin: 1vw;
    padding: 6px;
    border-radius: 10px;
    /* border: 1px solid #bebebe; */
}

.product_sendBox {
    /* width: 100%; */
    background: #fff;
    padding: 1px;
    margin-top: 20px;
    height: 300;
}

.product_sendBox .tit {
    border-bottom: 1px solid #ddd;
    padding: 0.3rem 0;
}

.product_sendBox .tit span {
    font-size: 5vw;
    margin-left: 3px;
    vertical-align: middle;
}

.product_sendBox .tit img {
    height: 40px;
    vertical-align: middle;
}

.product_sendBoxR {
    display: inline-block;
    width: 900px;
    font-size: 4vw;
    line-height: 7vw;
    color: #808080;
    padding-left: 0.2rem;
    vertical-align: top;
}

.slide-box {
    display: -webkit-box;
    width: 100%;
    font-size: 0;
    overflow-x: scroll;

    background: #fff;
    margin-top: 10px;
    z-index: 1;
}

.productDetail .slide-box .slide-item {
    width: 25%;
    line-height: 105px;
    text-align: center;
    font-size: 40px;

    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
}

.scroll-wrap {
    background: #f5f5f5;
}

.product_jiazhiBox {
    background: #fff;
    padding: 0 4vw 4vw 4vw;
    padding: 1px;
    margin-top: 20px;
}

.product_jiazhiBox .jiazhi_tit span {
    font-size: 4vw;
    padding-left: 2vw;
    vertical-align: middle;
}

.product_jiazhiBox .jiazhi_tit img {

    height: 5vw;
    vertical-align: top;
}

.product_jiazhiBox .jiazhi_con .jiazhi1 {
    width: 49%;
    padding-bottom: 2vw;
    float: left;
}

.product_jiazhiBox .jiazhi_con .jiazhi2 {
    width: 49%;
    padding-bottom: 2vw;
    float: right;
}

.txt {
    font-size: 4vw;
    color: #808080;
    line-height: 6vw;
    padding-bottom: 1vw;
}

.product_teseBox {
    background: #fff;
    padding: 2vw;
    margin-top: 20px;
}

.productDetail_tit {
    line-height: 5vw;
    color: #ff6930;
    border-bottom: 1px dashed #ddd;
    padding-bottom: 1vw;
    margin-bottom: 2vw;
}

.productDetail_tit img {
    height: 5vw;
    vertical-align: top;
}

.productDetail_tit span {
    font-size: 4vw;
    padding-left: 1vw;
    vertical-align: middle;
}

.costBox .tag {
    display: inline-block;
    line-height: 7vw;
    font-size: 3vw;
    color: #fff;
    background: #ff6930;
    padding: 0 3vw;
}

.costBox .tit {
    font-weight: bold;
    margin-top: 2vw;
}

.costBox p {
    font-size: 3vw;
    line-height: 6vw;
}

.product_contact {
    height: 8vh;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.product_contactR {
    display: table;
    height: 8vh;
    font-size: 0;
}

.product_contactR .Btn {
    display: table-cell;
    height: 50px;
    font-size: 30px;
    text-align: center;
    color: #fff;
    vertical-align: middle;
}

.product_contactR .Btn img {
    height: 3vh;
}
</style>