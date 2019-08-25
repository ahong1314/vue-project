
<script>

import CountDown from './CountDown'
import TestDom from './test'
import mixin from './mixin'

export default {
    mixins:[mixin],
    data() {
        return {
            count: 6,
            curGameCL: null,
            rows: [
                {
                    "playId": 1733609,
                    "playName": "双",
                    "gameId": 17,
                    "count": 6,
                    "linkPlayId": 1733608,
                    "linkPlayName": "单",
                    "playCateId": 336,
                    "issue": "190718007",
                    "endtime": "2019-07-18 09:54:00",
                    "lotteryTime": "2019-07-18 09:56:00",
                    "play": {
                        "id": 1733609,
                        "name": "双",
                        "alias": null,
                        "code": "SHUAN",
                        "gameId": 17,
                        "playCateId": 336,
                        "odds": 2.04,
                        "rebate": 0.002,
                        "minMoney": 1.0,
                        "maxMoney": 100000.0,
                        "maxTurnMoney": 100000.0,
                        "agentOdds": false
                    },
                    "linkPlay": {
                        "id": 1733608,
                        "name": "单",
                        "alias": null,
                        "code": "DAN",
                        "gameId": 17,
                        "playCateId": 336,
                        "odds": 1.83,
                        "rebate": 0.002,
                        "minMoney": 1.0,
                        "maxMoney": 100000.0,
                        "maxTurnMoney": 100000.0,
                        "agentOdds": false
                    },
                    "playBetsRatio": 25,
                    "linkPlayIdBetsRatio": 75
                },
                {
                    "playId": 512810,
                    "playName": "大",
                    "gameId": 5,
                    "count": 6,
                    "linkPlayId": 512811,
                    "linkPlayName": "小",
                    "playCateId": 128,
                    "issue": "20190718006",
                    "endtime": "2019-07-18 09:53:00",
                    "lotteryTime": "2019-07-18 09:55:00",
                    "play": {
                        "id": 512810,
                        "name": "大",
                        "alias": null,
                        "code": "BIG",
                        "gameId": 5,
                        "playCateId": 128,
                        "odds": 1.993,
                        "rebate": 0.002,
                        "minMoney": 1.0,
                        "maxMoney": 500000.0,
                        "maxTurnMoney": 1000000.0,
                        "agentOdds": false
                    },
                    "linkPlay": {
                        "id": 512811,
                        "name": "小",
                        "alias": null,
                        "code": "SMALL",
                        "gameId": 5,
                        "playCateId": 128,
                        "odds": 1.993,
                        "rebate": 0.002,
                        "minMoney": 1.0,
                        "maxMoney": 500000.0,
                        "maxTurnMoney": 1000000.0,
                        "agentOdds": false
                    },
                    "playBetsRatio": 7,
                    "linkPlayIdBetsRatio": 93
                }
            ],
            gameMap:{},
            oldData:null,
            cest: 1
        };
    },
    components:{
        CountDown, TestDom
    },
    methods:{
    },
    created(){
        // this.queryLottery()
    },
    render( h ){
        return (
            <div class="33">
                 <TestDom cest="333" />
            </div>
        )
    }
};
</script>
<style lang="scss">
.cl-bet {
    .cl-bet {
        height: 64px;
        background: #edf4fd;
    }
    .cl-stage {
        .select {
        }
    }
    .cl-item {
        width: 368px;
        height: 172px;
        border-radius: 10px;
        background: #edf4fd;
        border: 1px solid #b9c2cb;
        margin: 10px;
        .name {
            line-height: 2.5;
            padding-right: 10px;
            margin-left: 10px;
            border-bottom: 1px solid;
        }
        .plays {
            height: 82px;
            padding: 10px;
            .time {
                color: red;
                font-size: 1.2em;
            }
            .play {
                width: 56px;
                height: 56px;
                border-radius: 3px;
                box-shadow: 0 0 5px #2161b3;
                margin-left: 10px;
                background: #fff;
                &.active {
                    color: red;
                }
            }
        }
        .step {
            height: 10px;
            width: 98%;
            background: #2161b3;
            margin: 5px 1%;
            .active {
                width: 50%;
                background: #ed3243;
                height: 100%;
                position: relative;
                span {
                    position: absolute;
                    background: #000;
                    color: #fff;
                    font-weight: bold;
                    line-height: 1;
                    font-size: 0.8em;
                    padding: 5px 2px;
                    bottom: 0;
                    right: -20px;
                }
            }
        }
        .other {
            padding: 0 10px;
            span {
                color: red;
                margin: 0 2px;
                &.play {
                    font-size: 0.9em;
                    border: 1px solid #ccc;
                    line-height: 1;
                    padding: 2px;
                }
            }
            .more {
            }
        }
    }
}
</style>
