<template>
    <div class="loading">
        <div v-if="$store.state.loadingCount > 0">
            <div class="mask"></div>
            <div class="animation">
                <div class="lds-css ng-scope">
                    <div style="width:100%;height:100%" class="lds-ellipsis">
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            _timer: null
        };
    },
    methods: {
        setTimer() {
            clearTimeout(this._timer);
            this._timer = setTimeout(() => {
                this.$vm.count = 0;
            }, 10 * 1000);
        }
    }
};
</script>
