<template>
    <div>
        <img
            class="user-poster"
            src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"
        >
        <div class="user-links" flex="box:mean">
            <div flex="cross:center main:center">
                <van-icon name="pending-payment"/>待付款
            </div>
            <div flex="cross:center main:center">
                <van-icon name="records"/>待接单
            </div>
            <div flex="cross:center main:center">
                <van-icon name="tosend"/>待发货
            </div>
            <div flex="cross:center main:center">
                <van-icon name="logistics"/>已发货
            </div>
        </div>

        <van-cell-group class="user-group">
            <van-cell  to="/cart" icon="records" title="全部订单" is-link/>
        </van-cell-group>

        <van-cell-group>
            <van-cell to="/cart" icon="points" title="购物车" is-link/>
            <van-cell to="/goods" icon="gift-o" title="商品详情" is-link/>
            <van-cell icon="gold-coin-o" title="我的优惠券" is-link/>
        </van-cell-group>
    </div>
</template>

<script>
import { Icon, Cell, CellGroup } from "vant";
import Vue from "vue";

Vue.use(Icon).use(Cell).use(CellGroup);

export default {

};
</script>

<style lang="scss">
.user-poster {
    width: 100%;
    height: 53vw;
    display: block;
}

.user-group {
    margin-bottom: 15px;
}

.user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .user-van-icon {
        display: block;
        font-size: 24px;
    }
}
</style>
