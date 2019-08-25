<template>
    <div class="count-down">
        {{cest}}
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default{
    data(){
        return {
            _ticker:null,
            countdown:'--'
        }
    },
    props:['cest'],
    created() {
        setTimeout( ()=> {
            this.$emit("update:cest", 3)
        },2000)
    }
}
</script>
