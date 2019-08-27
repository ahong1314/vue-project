<template>
    <div class="goods">
        <van-nav-bar
            title="商品详情"
            left-text="返回"
            left-arrow
            @click-left="$router.go(-1)"
        />
        <van-swipe class="goods-swipe" :autoplay="3000">
            <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                <img :src="thumb">
            </van-swipe-item>
        </van-swipe>
        <div class="centent" flex="box:last">
            <div class="price">
                <div>
                   ¥ <span class="num">780</span> <span class="tuan">5人团</span>
                </div> 
                <s>原价¥4，453</s>
            </div>
            <div class="time" flex="main:center dir:top">
                <div>距离结束仅剩6天</div> 
                <van-count-down class="count-down" :time="time">
                    <template v-slot="timeData">
                        <span class="item">{{ timeData.days }}</span>
                        <span class="item">{{ timeData.hours }}</span>
                        <span class="item">{{ timeData.minutes }}</span>
                    </template>
                </van-count-down>

            </div>
        </div>
        <h3 class="car-name">体验卡体验卡体验卡体验卡体验卡</h3>
        <div class="car-other" flex="box:mean">
            <div>已拼：34</div>
            <div>库存：531</div>
            <div>每人限购1件</div>
        </div>
        <dir class="play">
            <div>拼团玩法</div>
            <div flex="box:mean">
                <div> <span>1</span> 选择商品，开团或参团</div> 
                <div> <span>2</span> 邀请好友参团</div> 
            </div>
            <div  flex="box:mean">
                <div> <span>3</span> 结束前团满即开团成功</div> 
                <div> <span>4</span> 完成支付后，商家发货</div> 
            </div>
        </dir>
        <div class="team">
            <div flex="main:justify" class="more">
                <h3>以下用户正在开团，可直接参团</h3> 
                <span @click="store=true">查看更多 ></span>
            </div>
            <div class="list">
                <div class="item"  flex="main:justify cross:center">
                    <div class="user" flex="cross:center">
                        <div class="imgbox"><img src="../../style/img/home1.jpg" alt=""></div>
                        <span>hank**</span>
                    </div>
                    <div class="add" flex>
                        <div>还差<span>4人</span>成团</div>
                        <div class="btn">拼TA的团</div>
                    </div>
                </div>
               <div class="item"  flex="main:justify cross:center">
                    <div class="user" flex="cross:center">
                        <div class="imgbox"><img src="../../style/img/home1.jpg" alt=""></div>
                        <span>hank**</span>
                    </div>
                    <div class="add" flex>
                        <div>还差<span>4人</span>成团</div>
                        <div class="btn">拼TA的团</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail-img">
            <img src="../../style/img/detail1.jpg" alt="">
            <img src="../../style/img/detail2.jpg" alt="">
            <img src="../../style/img/detail3.jpg" alt="">
            <img src="../../style/img/detail4.jpg" alt="">
        </div>
        <Qrshore />
        <div class="bay" flex="box:first">
            <div class="bus" flex="dir:top main:center cross:center">
                <span class="van-icon van-icon-shop"></span>
                <p>商家</p>
            </div>
            <router-link to="/confirm?type=2" tag="div">
                ¥4.468 单买
            </router-link>
            <router-link to="/confirm?type=2" tag="div">
                ¥780 开团
            </router-link>
        </div>
        <div class="activity store" v-if="store" flex="main:center cross:center">
            <div class="box">
                <div class="close van-icon van-icon-cross" @click="store = false" flex="main:center cross:center"></div>
                <h3>正在拼团</h3>
                <div class="list">
                    <div class="item"  flex="main:justify cross:center">
                        <div class="user" flex="cross:center">
                            <div class="imgbox"><img src="../../style/img/home1.jpg" alt=""></div>
                            <span>hank**</span>
                        </div>
                        <div class="add" flex>
                            <div>还差<span>4人</span>成团</div>
                            <div class="btn">拼TA的团</div>
                        </div>
                    </div>
                    <div class="item"  flex="main:justify cross:center">
                        <div class="user" flex="cross:center">
                            <div class="imgbox"><img src="../../style/img/home1.jpg" alt=""></div>
                            <span>hank**</span>
                        </div>
                        <div class="add" flex>
                            <div>还差<span>4人</span>成团</div>
                            <div class="btn">拼TA的团</div>
                        </div>
                    </div>
                   <div class="item"  flex="main:justify cross:center">
                        <div class="user" flex="cross:center">
                            <div class="imgbox"><img src="../../style/img/home1.jpg" alt=""></div>
                            <span>hank**</span>
                        </div>
                        <div class="add" flex>
                            <div>还差<span>4人</span>成团</div>
                            <div class="btn">拼TA的团</div>
                        </div>
                    </div>
                   <div class="item"  flex="main:justify cross:center">
                        <div class="user" flex="cross:center">
                            <div class="imgbox"><img src="../../style/img/home1.jpg" alt=""></div>
                            <span>hank**</span>
                        </div>
                        <div class="add" flex>
                            <div>还差<span>4人</span>成团</div>
                            <div class="btn">拼TA的团</div>
                        </div>
                    </div>
                   <div class="item"  flex="main:justify cross:center">
                        <div class="user" flex="cross:center">
                            <div class="imgbox"><img src="../../style/img/home1.jpg" alt=""></div>
                            <span>hank**</span>
                        </div>
                        <div class="add" flex>
                            <div>还差<span>4人</span>成团</div>
                            <div class="btn">拼TA的团</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
</template>

<script>
import {
    Tag,
    Col,
    Icon,
    Cell,
    CellGroup,
    Swipe,
    Toast,
    SwipeItem,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    NavBar,
    CountDown
} from "vant";

import Qrshore from "../../components/Qrshore"
export default {
    components: {
        [CountDown.name]: CountDown,
        [NavBar.name]: NavBar,
        [Tag.name]: Tag,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [GoodsAction.name]: GoodsAction,
        [GoodsActionIcon.name]: GoodsActionIcon,
        [GoodsActionButton.name]: GoodsActionButton,
        Qrshore
    },

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
            time: 30 * 60 * 60 * 1000,
            store: false
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

<style lang="scss">

.router{
.goods {
    text-align: left;
    min-height: calc( 100vh - 51px );
    overflow: auto;
    background: #fff;
    .detail-img{
        overflow: auto;
        img{
            float: left;
            width: 100%;
        }
    }
    .activity{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color:rgba(#000, .8);
        z-index: 99;
        
        &.store{
            .box{
                background-color: #fff;
                border-radius: 4px;
                padding: 1em;
                width: 90%;
                position: relative;
                .close{
                    position: absolute;
                    width: .9rem;
                    height: .9rem;
                    right: 0;
                    top: -2.5em;
                    border: 2px solid #fff;
                    border-radius: 50%;
                    font-size: .5rem;
                    color: #fff;
                    &::after{
                        display: block;
                        content: '';
                        height: 2em;
                        width: 2px;
                        background-color: #fff;
                        position: absolute;
                        top: .85rem;
                        left: 50%;
                        transform: translateX(-50%)
                    }
                }
                h3{
                    color: #000;
                    text-align: center;
                    padding-bottom: .4em;
                    font-size: 1.3em;
                }
                .list{
                    max-height: 4.64rem;
                    .item:last-child{
                        border-bottom: 1px solid #aaa;
                    } 
                }
            }
        }
        .name{
            border-bottom: 1px solid rgba(#fff, .5);
            margin: .5rem .3rem;
            font-size: 1.2em;
            span{
                font-size: 2em;
                padding-bottom:.2em;
            }
        }
    }
    .bay{
        height: 50px;
        border-top: .5px solid #eee;
        background-color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: 50px;
        text-align: center;
        .bus{
            width: 2rem;
            line-height: 1;
            color: #777;
            span{
                font-size: 1.5em;
                margin-bottom: .05rem;
            }
        }
        >div:nth-child(2){
            background-color: #ffb3a6;
            color: #fff;
        }
        >div:nth-child(3){
            background-color: #ff553b;
            color: #fff;
        }
    }
    .team{
        padding-left: .3rem;
        border-bottom: 1px solid #aaa;
        .more{
            padding: .1rem .3rem .2rem 0;

            span{
                color: #aaa;
            }
        }
    }
    .list{
        overflow: auto;
        .item{
            height: 1.15rem;
            border-top: 1px solid #aaa;
            padding-right: .3rem;
            .user{
                .imgbox{
                    width: .7rem;
                    height: .7rem;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-right: .2rem;
                    img{
                        width: 100%;
                    }
                }
            }
            .add{
                div{
                    color: #666;
                    span{
                        color: #d95540;
                    }
                }
                .btn{
                    background: #4d4d4d;
                    color: #fff;
                    padding: .12rem .15rem;
                    border-radius: 4px;
                    line-height: 1;
                    margin-left: .2rem;
                }
            }
        }
    }
    .car-name{
        line-height: 3;
        padding-left: .3rem;
    }   
    .car-other{
        padding: 0 .3rem;
        text-align: center;
        line-height: 1;
        color: #aaa;
        >:first-child{
            text-align: left;
        }
        >:last-child{
            text-align: right;
        }
    }
    .play{
        background-color:#ffeeec;
        color: #d95540;
        padding: .2rem .3rem;
        line-height: 1.8;
        span{
            background-color: #f85939;
            color: #fff;
            border-radius: 50%;
            width: .35rem;
            display: inline-block;
            height: .35rem;
            line-height: .38rem;
            text-align: center;
        }
    }
    .centent{
        height: 1.5rem;
        color: #fff;
        background: -webkit-linear-gradient(left, #ff6144,#f6054f); /* Safari 5.1 - 6.0 */
        // background: -o-linear-gradient(bottom right, #ff6144,#f6054f); /* Opera 11.1 - 12.0 */
        // background: -moz-linear-gradient(bottom right, #ff6144,#f6054f); /* Firefox 3.6 - 15 */
        // background: linear-gradient(to bottom right, #ff6144,#f6054f); /* 标准的语法 */
        text-align: center;

        .price{
            text-align: left;
            padding-left: .4rem;
            >div{
                .num{
                    font-size: 2em;
                    font-weight: 900;
                }
                .tuan{
                    background-color: #fff;
                    color: #f6054f;
                    padding: .01rem .1rem;
                    line-height: 1;
                    border-radius: 4px;
                    margin-left: .2rem;
                }
            }
        }
        .time{
            width: 2.75rem;
            background: #ffede9;
            position: relative;
            color: #d95540;
            .count-down{
                margin-top: .1rem;
            }
            .item {
                display: inline-block;
                width: .5rem;
                height: .5rem;
                margin-right: .2rem;
                line-height: .5rem;
                font-weight: 900;
                color: #fff;
                border-radius: 4px;
                text-align: center;
                background-color: #f85939;
                position: relative;
                &:nth-child(1)::after,&:nth-child(2)::after{
                    display: block;
                    content: ":";
                    width: .2rem;
                    height: .5rem;
                    position: absolute;
                    right: -.2rem;
                    color: #f85939;
                    top: 0;
                }
            }
            &::after{
                display: block;
                content: '';
                width: 0;
                height: 0;
                border: .75rem solid transparent;
                border-right-color: #ffede9;
                position: absolute;
                left: -1.48rem;
                top: 0;
            }
        }
    }
    .goods-swipe {
        height: 5.5rem;
        overflow: hidden;
        img {
            width: 100%;
            display: block;
        }
    }
}
}
</style>
