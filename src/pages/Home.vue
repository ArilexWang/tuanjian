<template>
    <div>
        <el-menu :default-active="$route.path" mode="horizontal" router>
            <el-menu-item v-for="(item,index) in $router.options.routes[0].children" :key="item.path" :index="item.path">
                {{item.name}}
            </el-menu-item>
        </el-menu>
       <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {

    },
    mounted() {
        console.log(this.$route.path)
        console.log(this.$router.options.routes[0].children[0].path)
    }
}
</script>

<style>

</style>