<template>
    <div class="login">
        <img
            class="user-poster"
            src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"
        >
        <div class="l-from">
            <van-cell title="手机号：" :required="true" flex="box:first">
                <input 
                    type="text" 
                    v-validate="'required|mobile'" 
                    name="手机号" 
                     v-model="params.phone" 
                    :class="{'s-error': errorBags.first('手机号')}"
                    placeholder="请输入手机号"/>
            </van-cell>
            <van-cell title="会员账号：" :required="true" flex="box:first">
                <input 
                    type="text" 
                    v-validate="'required|alpha_num|min:6|max:15'" 
                    name="会员账号" 
                     v-model="params.userName" 
                    :class="{'s-error': errorBags.first('会员账号')}"
                    placeholder="6-15位数字英文组合"/>
            </van-cell>
            <van-cell title="会员密码：" :required="true" flex="box:first">
                <input 
                    type="password" 
                    v-validate="'required|alpha_num|min:6|max:20'" 
                    name="会员密码" 
                    v-model="params.password" 
                    ref="会员密码"
                    :class="{'s-error': errorBags.first('会员密码')}"
                    placeholder="6-20位数字英文组合"/>
            </van-cell>
            <van-cell title="确认密码：" :required="true" flex="box:first">
                <input 
                    type="password" 
                    v-validate="'required|confirmed:会员密码'" 
                    name="确认密码" 
                    v-model="rePassword" 
                    data-vv-as="确认密码"
                    :class="{'s-error': errorBags.first('确认密码')}"
                    placeholder="6-20位数字英文组合"/>
            </van-cell>
        </div>
            
        <div class="error-info">
            {{errorBags.all()[0]? '*'+errorBags.all()[0] : ''}}
        </div>
        <van-button class="l-btn" type="primary" @click="send" size="large">注册并登陆</van-button>

    </div>
</template>

<script>
import { Icon, Cell, CellGroup, Field } from "vant";
import Vue from "vue";
import { setTimeout } from 'timers';

Vue.use(Icon).use(Cell).use(CellGroup).use(Field);

export default {
    data(){
        return {
            params:{
                phone:'',
                userName:'',
                password:''
            },
            rePassword:'',
            newPage:null
        }
    },
    methods:{
        submit() {
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.$router.push("/user");
                }   
            });
        },
        send(){
            if(!this.newPage) this.newPage = window.open(location.origin + '/mobile.html#/user');
            setTimeout(()=> {
                this.newPage.postMessage("updata", location.origin)
            },1000)
        }
    }
};
</script>

<style lang="scss">
.user-poster {
    width: 100%;
    height: 53vw;
    display: block;
}

.login{
    .l-from{
        background: #fff;
        padding: 50px 30px 20px;
        .van-cell:last-child::after {
            position: absolute;
            box-sizing: border-box;
            content: ' ';
            pointer-events: none;
            right: 0;
            bottom: 0;
            left: 15px;
            border-bottom: 1px solid #ebedf0;
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
        }
    }
    .l-btn{
        margin:  0 5%;
        width: 90%;
    }
}
</style>
