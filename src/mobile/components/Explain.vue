<template>
    <div class="explain">
        <div v-if="!$route.meta.expNav">
            <div class="bubble" flex="main:center cross:center" @click="update('activity', true)">活动<br/>说明</div>
            <div class="bubble" flex="main:center cross:center" @click="update('store', true)">联系<br/>商家</div>
        </div>
        <div class="activity" v-if="activity">
            <div class="name" flex="main:justify">
                <div flex="cross:center">活动说明</div>
                <span @click="update('activity', false)" flex="cross:center" class="van-icon van-icon-cross"></span>
            </div>
            <div class="list">
                <div class="item" v-for="(item, index) in list" :key="index">
                    <span>{{ item.name }}</span>
                    <p v-html="item.text"></p>
                </div>
            </div>
        </div>  
        <div class="activity store" v-if="store" flex="main:center cross:center">
            <div class="box">
                <div class="close van-icon van-icon-cross" @click="update('store', false)" flex="main:center cross:center"></div>
                <div class="item"><span>主办单位：</span>水胭脂产后恢复健康管理中心</div>
                <div class="item" flex="main:justify cross:center">
                    <div><span>商家地址：</span>重庆重庆市开县九龙路</div> 
                    <span class="address"> | <span class="van-icon van-icon-map-marked"></span></span>
                </div>
                <div class="item"><span>客服电话：</span><a href="tel://13896976374">13896976374</a></div>
            </div>
        </div>      
        <el-amap vid="amapDemo" :zoom="zoom" :center="center">
        </el-amap>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            zoom: 12,
            center: [121.59996, 31.197646],
            list: [
                {
                    name: '活动商品',
                    text: '商品一：水胭脂产后恢复全面体验特价卡'
                },
                {
                    name: '活动时间',
                    text: '2019年09月01日 00:00 - 2019年09月31日 23:59'
                },
                {
                    name: '主办单位',
                    text: '<span>水胭脂产后恢复健康管理中心</span>'
                },
                {
                    name: '活动说明',
                    text: '选择商品，进行开团或参与拼团，提交订单成功后邀请好友拼团，达到人数即为拼团成功'
                }
            ]
        };
    },
    methods:{
        ...mapMutations(['UPDATE']),
        tab(index, item){
            this.active = index;
            this.activeCode = item.navs[0].code;
        },
        update(key, val){
            this.UPDATE({key: key, val: val})
        }
    },
    computed:{
        ...mapState(['activity', 'store'])
    },
    watch:{
        '$route'(){
            this.update('activity', false)
            this.update('store', false)
        }
    }
};
</script>
<style lang="scss">
.explain{
    .bubble{
        position: fixed;
        background-color: rgba(#fff, .3);
        width: 1rem;
        height: 1rem;
        color: #fff;
        right: .2rem;
        top: .2rem;
        font-size: .9em;
        border-radius: 50%;
        line-height: 1.2;
        &:last-child{
            top: 1.5rem;
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
        color: #fff;
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
                .item{
                    color: #000;
                    text-align: left;
                    line-height: 2;
                    span{
                        color: #999;
                    }
                    .address{
                        font-size: 1.5em;
                        color: #aaa;
                        span{
                            color:#aaa;
                        }
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
        .list{
            text-align: left;
            padding: 0 .6em;
            .item{
                >span{
                    background: #fff;
                    color: #000;
                    padding: .2em .5em;
                }
                p{
                    padding: 1em 0 1.5em; 
                    span{
                        color: yellow;
                    }
                }
            }
        }
    }
}
</style>
