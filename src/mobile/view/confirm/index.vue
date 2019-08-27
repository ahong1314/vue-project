<template>
    <div class="confirm">
        <van-nav-bar
            title="确认订单"
            left-text="返回"
            right-text="联系商家"
            left-arrow
            @click-left="$router.go(-1)"
            @click-right="UPDATE({key: 'store', val: true})"
        />
        <div class="address" flex="main:justify box:justify cross:center" >
            <span class="van-icon van-icon-map-marked"></span>
            <div class="txt">
                <div flex="main:justify box:justify">
                    <span>取货人：安慰法你</span>
                    <span>158347323434</span>
                </div>
                <div>取货地址：开州新世纪爱违反违反违反</div>
            </div>
            <span class="van-icon van-icon-arrow"></span>
        </div>
        <div class="info">
            <div class="imgtxt" flex="box:first">
                <div class="imgbox">
                    <img src="../../style/img/home1.jpg" alt="">
                </div>
                <div flex="dir:top main:justify">
                    <div style="color:#1a1a1a" >体验卡体验卡体验卡体验卡体验卡体验卡</div>
                    <span class="c-red" >¥ 780</span>
                </div>
            </div>
        </div>

        <van-cell-group>
            <van-cell title="购买数量">
                <van-stepper v-model="value" />
            </van-cell>
            <van-cell title="购买数量">
                <van-stepper v-model="value" />
            </van-cell>
        </van-cell-group>
        <div class="bay" flex="box:first">
            <div class="bus" flex="dir:top main:center cross:center">
                <span class="van-icon van-icon-shop"></span>
                <p>商家</p>
            </div>
            <div>
                ¥4.468 单买
            </div>
            <div>
                ¥780 开团
            </div>
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
    Field,
    Toast,
    SwipeItem,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    NavBar,
    CountDown,
    Stepper
} from "vant";
import { mapState, mapMutations } from 'vuex';

export default {
    components: {
        [Stepper.name]: Stepper,
        [Field.name]: Field,
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
        [GoodsActionButton.name]: GoodsActionButton
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
            store: false, 
            value: 1,
            parea:{

            }
        };
    },
    methods: {
        ...mapMutations(['UPDATE']),
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
    .confirm {
        text-align: left;
        min-height: calc( 100vh - 51px );
        overflow: auto;
        .info{
            border-top: 1px solid #ddd;
            padding: 1em;
            color: #999;
            background: #fff;
            margin-top: 1em;
            .imgtxt{
                height: 2.15rem;
                background-color: #f9f9f9;
                padding: .8em;
                .imgbox{
                    width:2rem;
                    margin-right: 1em;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .address{
            border-top: 1px solid #ddd;
            border-bottom:1px solid #ddd;
            padding: 1em;
            color: #999;
            background: #fff;
            .txt{
                padding-left: .7em;
                padding-right: .2em;
                line-height: 1.8;
                :first-child{
                    color: #000;
                }
            }
            .van-icon-map-marked{
                font-size: 1.3em;
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
        .c-red{
            color:#f85939
        }
    }
}
</style>
