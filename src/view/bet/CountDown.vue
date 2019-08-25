<template>
    <div class="count-down">
        {{countdown}}
    </div>
</template>

<script>
import { mDate, dateToLocal, dateDiff, countdownFormat } from '@/common/util';
import { watch } from 'fs';
export default{
    data(){
        return {
            _ticker:null,
            countdown:'--'
        }
    },
    props:['play'],
    created() {
        this.init();
    },
    methods:{
        init(){
            let { endtime, lotteryTime} = this.play;
            endtime = mDate( endtime ).getTime();
            lotteryTime = mDate( lotteryTime ).getTime();
            this.countdown='--';
            clearInterval(this._ticker);
            if(this.play.status !=3){
                this._ticker = setInterval(()=>{
                    let curData = mDate();
                    let curtime = curData.getTime();
                    if(endtime > curtime){
                        this.play.status = 1;
                        this.countdown = countdownFormat(dateDiff( curData,  mDate( endtime )));
                    }if(endtime <= curtime && curtime <= lotteryTime){
                        this.countdown == '--';
                        this.play.status = 2;
                    }else if(curtime > lotteryTime){
                        this.countdown == '--';
                        this.play.status = 3;
                        this.$emit("queryLottery");
                        clearInterval(this._ticker);
                    }
                }, 1000);            
            } 
        }
    },
    destroyed() {
        clearInterval(this._ticker);
    },
    watch:{
        'play.status'(){
            this.init();
        }
    }
}
</script>
