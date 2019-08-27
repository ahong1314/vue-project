<template>
    <div class="order">
        <van-tabs v-model="active2">
            <van-tab v-for="(item, index) in navs" :key="index" :title="item.name">
                <div class="item">
                    <p>订单号：121892831921397192378123</p>
                    <div class="imgtext" flex="box:first">
                        <div class="imgbox">
                            <img src="../../style/img/home1.jpg" alt="">
                        </div>
                        <div class="text" flex="dir:top main:justify">
                            <div>体验卡</div>
                            <div flex="main:justify">
                                <div>¥780 <s style="color:#ccc">¥4468</s></div>
                                <div>x1</div>
                            </div>
                        </div>
                    </div>
                    <div class="status" flex="dir:right">
                        <div>未领取 | <span class="c-red">拼团中</span></div>
                    </div>
                   <div class="total" flex="dir:right cross:center">
                        <div flex="cross:center">合计 :  <span  class="c-red">  ¥780 </span>  <div class="btn">去分享</div></div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
        <van-tabbar v-model="active">
            <van-tabbar-item 
                replace
                to="/home"
                icon="van-icon van-icon-point-gift">首页</van-tabbar-item>
            <van-tabbar-item 
                replace
                to="/order"
                icon="van-icon van-icon-todo-list">订单</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import Vue from 'vue';

import {
    Tab,
    Tabs, 
    Tabbar,
    TabbarItem
} from "vant";
Vue.use(Tabbar).use(TabbarItem).use(Tab).use(Tabs)
export default {

    data() {
        return {
            goods: {
                title: "美国伽力果（约680g/3个）",
                price: 2680,
                express: "免运费",
                remain: 19,
                thumb: [
                    "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
                    "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
                ]
            },
            active: 1,
            active2: 0,
            open: false,
            navs: [
                {name: '全部', status: 0 },
                {name: '待支付', status: 1 },
                {name: '拼团中', status: 2 },
                {name: '交易成功', status: 3 },
            ]
        };
    },

    methods: {
        formatPrice() {
            return "¥" + (this.goods.price / 100).toFixed(2);
        }
    }
};
</script>

<style lang="scss" scope>

.router{
    .order {
        padding-bottom: 50px;
        height: calc( 100vh - 51px );
        background: #f9f9f9;
        .van-tabbar{
            border-top: .5px solid #ddd;
        }
        .tabs__wrap{
            border-bottom: .5px solid #ddd;
        }
        .item{
            width: 6.85rem;
            height: 4.7rem;
            background-color: #fff;
            margin: .5rem auto;
            border: 1px solid #ddd;
            border-radius: 4px;
            text-align: left;
            padding: 0 .3rem;
            >p{
                height: .8rem;
                line-height: .8rem;
            }
            .imgtext{
                background: #f9f9f9;
                padding: .26rem;
                .text{
                    padding-left: .4rem;
                }
            }
            .imgbox{
                height: 1.6rem;
                img{
                    height: 100%;
                }
            }
            .c-red{
                color: red;
            }
            .status{
                height: .8rem;
                line-height: .8rem;
                border-bottom: 1px dashed #ccc;
            }
            .total{
                height: .9rem;
                span{
                    margin: 0 .2rem;
                }
                .btn{
                    background: #4d4d4d;
                    color: #fff;
                    padding: .12rem .15rem;
                    border-radius: 4px;
                    line-height: 1;
                }
            }
        }
    }
}

</style>
