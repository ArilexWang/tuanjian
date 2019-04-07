
<template>
    <div class="contentBox" style="background: #f5f5f5;">
        <div class="contentCon">
            <div class="topic_con">
                <a :href="linkTo(item)" class="topic" v-for="(item,index) in themes" :key="index" v-bind:style="getThemeStyle(item)" target="_blank">
                    <div class="tjchoose">
                        <!--<p>
                                            <span class="num">19</span>
                                            <span class="tit">团建<br> 选择
                                            </span>
                                        </p>-->
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { Hostname } from "../../api/api";
export default {
    data() {
        return {
            themes: [],
        };
    },
    methods: {
        getThemeStyle(item) {
            return 'background: url(' + item.avatar + ') no-repeat; background-size: 100% 100%';
        },
        linkTo(item) {
            return '#qfxxq/' + item.id
        }

    },
    mounted() {
        this.$http
            .get(`${Hostname}/GroupBuilding/get_all_themes`)
            .then(function(response) {
                console.log(response.body.data);
                this.themes = response.body.data
            });
    }
};
</script>

<style scoped>
.contentBox {
    background: #f5f5f5;
    padding-bottom: 50px;
}

.contentCon {
    width: 1200px;
    margin: 0 auto;
}

.topic_con .topic {
    display: block;
    width: 1200px;
    height: 375px;
    display: inline-block;
    margin-top: 30px;
    position: relative;
}
</style>