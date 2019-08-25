import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import VueI18n from 'vue-i18n';
import vueCookie from 'vue-cookie'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ajaxInterceptors from './common/ajaxInterceptors'

import { Dialog, Container } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

//element-ui UI
Vue.use(Dialog)
.use(Container)

Vue.use(vueCookie)


//验证插件
Validator.extend('mobile', {
    messages: {
      en:field => field + '必须是11位手机号码',
    },
    validate: value => {
      return value.length == 11 && /^((11|12|13|14|15|16|17|18|19)[0-9]{1}\d{8})$/.test(value)
    }
});
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'zh_CN',
})
Vue.use(VeeValidate, {
    events: 'blur',
    errorBagName: 'errorBags',
    i18n,
    i18nRootKey: 'validations',
    dictionary: {
        zh_CN
    }
});


//axios
ajaxInterceptors(axios, Vue)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

/*  设置REM(100PX=>1REM) */
(function () {
    let docEl = document.documentElement;
    let setRem = function () {
        let screenWidth = docEl.clientWidth || window.screen.width || 360;
        docEl.style.fontSize = (100 * screenWidth / 750) + 'px';
    };
    window.addEventListener('resize', setRem, false);
    document.addEventListener('DOMContentLoaded', setRem, false);
    setRem();
})();

//路由跳转加载动画
router.beforeEach((to, from, next) => {
    store.commit("UPDATE", { key: 'isLoading', val: true });
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
})
router.afterEach(function (to) {
    store.commit("UPDATE", { key: 'isLoading', val: false })
})



// 刷新操作需检测，并恢复登录数据
if(Vue.cookie.get('x-session-token')){
    store.dispatch("setUser").finally(data=>{
        startVue();
    })
}else{
    startVue();
}

function startVue(){
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
}
