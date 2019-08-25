import $router from '../router';
import $cookie from 'vue-cookie';
import axios from 'axios';

export default {
    // 设置用户信息
    setUser(store){
        return axios.get('/user/info.do',{ noAlert:true }).then(({data})=>{
            let userinfo = {
                userId: data.ext.userId,
                userName: data.ext.userName,
                email: data.email,
                phone: data.phone,
                fullName: data.ext.fullName,
                money: data.ext.money,
                userType: data.ext.userType,
                loginIp: data.ext.loginIp,
                lastLoginTime: data.ext.lastLoginTime,
                lastloginIp: data.ext.lastloginIp,
                updatePw: data.ext.updatePw,
                roleId: data.ext.roleId,
                menu: data.menu
            };
            $cookie.set('x-session-token',data.token);
            store.commit("UPDATE",{key:'user',val:userinfo});
            store.dispatch("loadMsg");
            store.dispatch("getInfo");
            // 获取用户权限菜单
            let authMap =  (Object.values(data.menu) || []).reduce((obj, i) => {
                return i.reduce((obj, j) => {
                    obj[j.code] = j.name
                    return obj
                },obj)
            }, {})
            store.commit("UPDATE",{key: 'authMap',val: authMap})
            // 消息定时器
            let msg_timer = setInterval(function() {
                store.dispatch("loadMsg");
            }, 10000)
            store.commit("UPDATE",{key: 'msg_timer',val: msg_timer});

            return true;
        }).catch(err=>{
            store.dispatch("removeUser");
            return false;
        })
    },
    // 移除用户信息
    removeUser(store){
        $cookie.delete('x-session-token');
        clearInterval(store.state.msg_timer);
        store.commit("UPDATE",{key: 'user',val: {}});
        $router.push("/bet");
    }
}
