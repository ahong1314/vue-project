<template>
    <div class="home">
        <van-swipe class="goods-swipe" :autoplay="3000">
            <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                <img :src="thumb">
            </van-swipe-item>
        </van-swipe>
        <p class="title">全部商品</p>
        <div class="list">
            <router-link tag="div" to="/goods" class="item"  flex="box:first">
                <div class="imgbox">
                    <img :src="good.imgUrl"/>
                </div>
                <div class="info">
                    <p class="c-red"><span>¥ {{good.price}} </span>  {{good.people}}人团</p>
                    <p class="price">原价 ¥{{good.oldPrice}} | 库存{{good.stock}}</p>
                    <p>{{good.name}}</p>
                </div>
            </router-link>
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
        <Qrshore/>
    </div>
</template>

<script>
import Vue from 'vue';
import Qrshore from "../../components/Qrshore"
import {
    Swipe,
    SwipeItem,
    Tabbar,
    TabbarItem
} from "vant";
Vue.use(Swipe).use(SwipeItem).use(Tabbar).use(TabbarItem)
import { mapState, mapActions, mapMutations } from 'vuex';


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
    components:{ Qrshore },
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
    },
    computed:{
        ...mapState(['good'])
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

    }
}

</style>
