<template>
    <div id="app">
        <transition tag="div">
            <loading v-model="isLoading"></loading>
        </transition>
        <el-container class="app-container" flex="dir:top box:justify">
            <el-header style="height:100px">数据管理系统</el-header>
            <el-container flex="box:first">
                <el-aside width="200px">
                    <nav-menu />
                </el-aside>
                <el-main>
                    <div class="router" flex="dir:top box:first">
                        <div class="nav-h" v-if="$route.path != '/login'"></div>
                        <keep-alive>
                            <router-view v-if="$route.meta.keepAlive" class="router-view"></router-view>
                        </keep-alive>
                        <router-view  v-if="!$route.meta.keepAlive" class="router-view"></router-view>
                    </div>
                </el-main>
            </el-container>
            <el-footer style="height:100px">创信科技</el-footer>
        </el-container>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import Loading from './components/Loading'
import NavMenu from './components/NavMenu'
import { Header, Aside, Main, Footer } from 'element-ui'
import Vue from 'vue'
import  "./style/reset.scss";
import  "./style/style.scss";

Vue.use(Header)
.use(Aside)
.use(Main)
.use(Footer)

export default {
    name: 'HelloWorld',
    data () {
        return {
            aaa: '111'
        }
    },
    components:{
        Loading, NavMenu
    },
    computed:{
        ...mapState(['isLoading'])
    },
    mounted(){
        // 接口请求测试
        // this.$http.get("/user/info.do").then(res=>{
        //     console.log(res)
        // })
    }

};
</script>

<style lang="scss">
@import url("./style/flex.css");
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 16px;
    overflow: auto;
    height: 100%;
    .router-view{
        border: 1px solid #ccc;
        background: #fff;
    }
    .el-header, .el-footer {
        text-align: center;
        line-height: 100px;
        height: 100px;
        background: -webkit-linear-gradient(270deg, rgba(0, 74, 152, 1) 0%, rgba(0, 74, 152, 1) 0%, rgba(0, 74, 152, 1) 82%, rgba(2, 64, 132, 1) 100%, rgba(2, 64, 132, 1) 100%);
        background: -moz-linear-gradient(180deg, rgba(0, 74, 152, 1) 0%, rgba(0, 74, 152, 1) 0%, rgba(0, 74, 152, 1) 82%, rgba(2, 64, 132, 1) 100%, rgba(2, 64, 132, 1) 100%);
        background: linear-gradient(180deg, rgba(0, 74, 152, 1) 0%, rgba(0, 74, 152, 1) 0%, rgba(0, 74, 152, 1) 82%, rgba(2, 64, 132, 1) 100%, rgba(2, 64, 132, 1) 100%);
        font-weight: 400;
        color: #FFFFFF;
        font-weight: 700;
    }
    .el-header{
        font-size: 30px;
        text-align: left;
        padding-left: 15px;
      
    }
    .app-container{
        height: 100%;
    }
    .el-aside {
        background-color: rgba(242, 242, 242, 1);
        text-align: center;
        border-right: 1px solid rgba(204, 204, 204, 1);
    }
    
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
  
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>
