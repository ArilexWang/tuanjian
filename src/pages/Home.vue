<template>
    <div>
        <div v-if="_isMobile()">

        </div>
        <div class="search_con" v-else>
            <el-menu :default-active="$route.path" mode="horizontal" router active-text-color="#fd7b3f">
                <el-menu-item v-for="(item,index) in $router.options.routes[0].children" :key="item.path" :index="item.path">
                    {{item.name}}
                </el-menu-item>
            </el-menu>
            <div class="contact">
                <img class="tel" src="../assets/tel.png">
                <p>
                    客服电话<br> 400-666-6666
                </p>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        }
    },
    mounted() {
        console.log(this.$route.path)
        console.log(this.$router.options.routes[0].children[0].path)
    }
}
</script>

<style>
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 4px solid #fd7b3f;
}

.el-menu--horizontal>.el-menu-item {
    float: left;
    height: 60px;
    width: 90px;
    text-align: center;
    font-size: 16px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: black;
}

.el-menu.el-menu--horizontal {
    border-bottom: solid 1px #e6e6e6;
    display: inline-block;
}


.contact {
    position: relative;
    float: right;
}

.contact p {
    display: inline-block;
    font-size: 14px;
    color: #ff7b34;
    vertical-align: middle;
    padding: 0 20px 0 10px;
}

ul {
    margin: 0;
}

.search_con {
    width: 1200px;
    height: 40px;
    margin: 0 auto;
    position: relative;
    padding: 20px 0;
}
</style>