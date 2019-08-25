
<script>
export default{
    data(){
        return {
            _ticker:null,
            countdown:'--'
        }
    },
    created() {
        setTimeout( ()=> {
            console.log(555)
        },2000)
    }
}
</script>
