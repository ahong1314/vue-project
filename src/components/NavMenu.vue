<template>
    <div class="sidebar">
        <div class="item" v-for="(item, index) in menu" :key="index">
            <div class="name" @click="tab(index, item)">{{item.name}}</div>
            <div class="navs slide" :class="{animate: active == index}">
                <div class="nav"  
                    :class="{active: activeCode == val.code}"  
                    @click="activeCode = val.code"
                    v-for="(val, key) in item.navs" 
                    :key="key">{{val.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu:[
                {
                    name: '数据管理',
                    active: 1,
                    navs:[
                        {name: '提交报表', path: '/', code: 1},
                        {name: '查询报表', path: '/', code: 2},
                    ]
                },
                {
                    name: '表报管理',
                    active: 2,
                    navs:[
                        {name: '数据源管理', path: '/', code: 3},
                        {name: '表报管理', path: '/', code: 4},
                    ]
                },
                {
                    name: '系统管理',
                    active: 3,
                    navs:[
                        {name: '平台管理', path: '/', code: 5},
                        {name: '角色管理', path: '/', code: 6},
                        {name: '用户管理', path: '/', code: 7},
                    ]
                },
            ],
            active: 0,
            activeCode: 1
        };
    },
    methods:{
        tab(index, item){
            this.active = index;
            this.activeCode = item.navs[0].code;
        }
    }
};
</script>
<style lang="scss" scoped>
.sidebar{
    font-size: 14px;
    .item{
        min-height: 45px;
        background: inherit;
        color: #fff;
        line-height: 45px;
        font-weight: 500;
        border-top: 1px solid #024084;
        .name{
            background-color: rgba(51, 102, 153, 1);
        }
        .nav{
            height: 45px;
            border-bottom: 1px solid rgba(204, 204, 204, 1);
            color: #1a1a1a;
            background-color: rgba(249, 249, 249, 1);
            &.active,&:hover{
                background-color: rgba(51, 153, 255, 0.2);
            }
        }
    }
    .slide {
        overflow: hidden;
        max-height: 0;
        transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
    }
    .animate {
        max-height: 9999px;
        transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
        transition-delay: 0s;
    }
}
</style>
