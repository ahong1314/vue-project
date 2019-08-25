<template>
    <div id="app">
        <transition tag="div">
            <loading v-model="isLoading"></loading>
        </transition>
        <div class="router" flex="dir:top box:first">
            <div class="nav-h" v-if="$route.path != '/login'"></div>
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" class="router-view"></router-view>
            </keep-alive>
            <router-view  v-if="!$route.meta.keepAlive" class="router-view"></router-view>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import Loading from '../components/Loading'
import  "../style/reset.scss";
import  "../style/style.scss";

export default {
    name: 'HelloWorld',
    data () {
        return {
            aaa: '111'
        }
    },
    components:{
        Loading
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
@import url("../style/flex.css");
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 16px;
    max-width: 1200px;
    margin:  0 auto;
    
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
