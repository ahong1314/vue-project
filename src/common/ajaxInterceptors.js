import qs from 'qs'
// import { AlertModule } from '@/mobile/vux';
import store from '../store/store';
import { Dialog } from 'vant'
// 全局处理ajax请求
export default function(axios, Vue) {
    axios.interceptors.request.use(function(request) {
        if(!request.json && request.data && !request.data.append && typeof request.data == 'object' /* ducktype for FormData */) {
            // 该项目默认使用urlencoding类型的post，除非json == true
            request.data = qs.stringify(request.data)
        }
        if (!request.supressLoading) {
            callSetLoadingFn(true)
        }
        let tokenInfoInSession = sessionStorage.getItem("tokenInfo");
        if (tokenInfoInSession) {
            let token = JSON.parse(tokenInfoInSession).token;
            if (token) {
                request.headers.common["x-session-token"]= token;
            }
        }
        if (request.url && request.url.match(/\.(do|json)/)) {
            request.params = Object.assign((request.params || {}), {
                t: (new Date).getTime()
            });
        }
        return request
    })
    axios.interceptors.response.use(function (response) {
        if (!response.config.supressLoading) {
            callSetLoadingFn(false)
        }
        if(!response.config.noAlert && response.data.code && response.data.code !=200 && response.data.msg) {
            Dialog({
                title: '出错啦',
                message:response.data.msg
            })
            return Promise.reject(response.data);
        }else{
            return response;
        }
       
    }, function (error) {
        
        if (!error.config.supressLoading) {
            callSetLoadingFn(false)
        }
        const respStatus =error.response.status;
        switch (respStatus) {
            case 504:
                error.response.msg = "当前网络状况不佳, 请留意操作的情况，如果还无法操作请重新登录！"
                error.response.data.msg = "当前网络状况不佳, 请留意操作的情况，如果还无法操作请重新登录！"
                break;
            default:
                break;
        }
        let msg = error.response.data.msg || error.response.data;
        if (respStatus === 403  && msg !='访问权限异常!') { // 登录失效
            Dialog({
                title: '出错啦',
                message:"因您长时间未操作，系统自动退出，请重新登录系统"
            });
            store.dispatch("removeUser");
        } else if(!error.config.noAlert && msg !='访问权限异常!'){
            Dialog({
                title: '出错啦',
                message:error.response.data.msg || error.response.data
            });
        }
        return Promise.reject(error);
    })
    
}

function callSetLoadingFn(is_loading) {
    let curCount = is_loading ? ++store.state.loadingCount: --store.state.loadingCount;
    store.commit("UPDATE", { key: 'loadingCount', val:curCount });
}
