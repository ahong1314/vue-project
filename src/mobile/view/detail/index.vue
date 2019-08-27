<template>
    <div class="home">
        <van-swipe class="goods-swipe" :autoplay="3000">
            <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                <img :src="thumb">
            </van-swipe-item>
        </van-swipe>
        <p class="title">全部商品</p>
        <div class="list">
            <div class="item" flex="box:first">
                <div class="imgbox">
                    <img src="../../style/img/home1.jpg"/>
                </div>
                <div class="info">
                    <p class="c-red"><span>¥780 </span>  5人团</p>
                    <p class="price">原价 ¥4,468 | 库存531</p>
                    <p>体验卡</p>
                </div>
            </div>
        </div>
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
        <div class="btn">
            <van-button type="primary" size="large" @click="open=true">关注我们</van-button>
        </div>
        <div class="guzhu" v-show="open" flex="main:center cross:center">
            <div class="box" flex="dir:top cross:center">
                <div class="qr">
                    <img src="../../style/img/home3.jpg" alt="">
                </div>
                <img class="finger" src="../../style/img/home2.jpg" alt="">
                <p>长按指纹识别二维码</p>
            </div>
            <div class="close"  @click="open=false"></div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

import {
    Swipe,
    SwipeItem,
    Tabbar,
    TabbarItem
} from "vant";
Vue.use(Swipe).use(SwipeItem).use(Tabbar).use(TabbarItem)
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
            active: 0,
            open: false
        };
    },

    methods: {
        formatPrice() {
            return "¥" + (this.goods.price / 100).toFixed(2);
        },

        onClickCart() {
            this.$router.push("cart");
        },

        sorry() {
            Toast("暂无后续逻辑~");
        }
    }
};
</script>

<style lang="scss" scope>

.router{
    .home {
        padding-bottom: 50px;
        height: calc( 100vh - 51px );
        background: #fff;
        .goods-swipe {
            height: 5.5rem;
            img {
                width: 100%;
                display: block;
            }
        }
        .title{
            padding: 1em 0 0.5em;
        }
        .item{
            height: 2.8rem;
            margin: 0 .3rem .3rem;
            border: 1px solid #efefef;
            box-shadow: 0 0 10px #eee;
            border-radius: 4px;
            padding: .2rem .2rem .3rem;
            font-size: .9em;
            .imgbox{
                height: 100%;
                width: 2.2rem;
                img{
                    height: 100%;
                }
            }
            .info{
                text-align: left;
                padding-left: .35rem;
                .c-red{
                    color: red;
                    span{
                        font-size: 1.6em;
                    }
                }
                .price{
                    color: #999;
                    margin-bottom: .3em;
                }
            }
        }
        .btn{
            margin:1rem 1.5rem; 
            >button{
                border-radius: 5px;
            }
        }
        .guzhu{
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color:rgba(#000, .8);
            z-index: 99;
            color: #fff;
            .close{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }
            .box{
                background-color:#fff;
                border-radius: 8px;
                width: 80%;
                padding: 1.5em;
                color: #666;
                position: relative;
                z-index: 99;
                img{
                    display: block;
                    width: 3rem;
                }
                p{
                    margin-top: 1.8em;
                }
                .finger{
                    width: 2.5rem;
                    margin-top: 1em;
                }
            }
        }
    }
}

</style>
