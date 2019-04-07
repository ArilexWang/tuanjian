
<template>
    <div>
        <div class="contentBox">
            <div class="content">
                <div class="topic_banner" v-bind:style="getBannerStyle()"></div>
                <div class="contenL">
                    <router-link v-for="(item,index) in cases" :key="index" :to="linkTo(item.id)">
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
                                <div class="recommend">
                                    <span>推荐理由：</span>
                                    <p>{{item.recommend_reason}}</p>
                                </div>
                                <span class="price">
                                    {{item.price}}
                                </span>
                            </div>
                        </div>
                    </router-link>
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
            theme: {},
        };
    },
    methods: {
        linkTo(id) {
            return '/xfaxq/' + id
        },
        getBackGround(item) {
            return 'background: url(' + item.avatar + ') no-repeat; background-size: 100% 100%';
        },
        getBannerStyle() {
            return 'background: url(' + this.theme.avatar + ') no-repeat; background-size: 100% 100%';
        }
    },
    mounted() {
        console.log(this.$route.params)
        let para = { "case_theme_id": this.$route.params.id }
        this.$http.post(`${Hostname}/GroupBuilding/get_case_by_condition`, JSON.stringify(para))
            .then(function(response) {
                console.log(response)
                this.cases = response.body.data
            })
        this.$http
            .get(`${Hostname}/GroupBuilding/get_all_themes`)
            .then(function(response) {
                console.log(response.body.data);
                let themes = response.body.data
                for (var index in themes) {
                    if (themes[index].id === para.case_theme_id) {
                        this.theme = themes[index]
                    }
                }
                console.log(this.theme)
            });

    }
};
</script>

<style scoped>
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
    display: block;
    width: 1160px;
    height: 240px;
    border: 1px solid #e5e5e5;
    box-shadow: 4px 3px 12px 0px #ddd;
    background: #fff;
    margin: 15px 0;
    margin-top: 40px;
    position: relative;
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

.plan_intro .price {
    color: #ff3737;
    font-size: 18px;
    position: absolute;
    top: 0;
    right: 0;
}

.topic_banner {
    width: 1200px;
    height: 358px;
    margin: 0 auto;
    background: url() no-repeat;
    background-size: 100% 100%;
}

.recommend {
    font-size: 14px;
    color: #000;
    width: 700px;
}

.recommend span {
    display: inline-block;
    width: 70px;
}

.recommend p {
    display: inline-block;
    width: 630px;
    vertical-align: top;
}
</style>