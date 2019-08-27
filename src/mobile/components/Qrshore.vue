q<template>
    <div class="qr-shore">
        <div class="btn">
            <van-button type="primary" size="large" @click="open=true">关注我们</van-button>
        </div>
        <div class="guzhu" v-show="open" flex="main:center cross:center">
            <div class="box" flex="dir:top cross:center">
                <div class="qr">
                    <img src="../style/img/home3.jpg" alt="">
                </div>
                <img class="finger" src="../style/img/home2.jpg" alt="">
                <p>长按指纹识别二维码</p>
            </div>
            <div class="close"  @click="open=false"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            open: false
        };
    }
};
</script>
<style lang="scss" scoped>
.qr-shore{
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
</style>
