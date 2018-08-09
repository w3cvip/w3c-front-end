<template>
    <div>1</div>
</template>
<script>
export default {
    middleware: 'auth',
    data() {
        return {
            title:'shouquan',
        };
    },
    head () {
        return {
            title: this.title,
            meta: [
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
        }
    },
    methods: {
        getToken(code){
            // let self = this
            // self.$axios.$get('/token',{
            //     params:{
            //         code:code
            //     },
            // }).then(function (response) {
            //     this.$router.push('/')
            // }).catch(function (error) {
            //     console.log(error);
            // })
            this.$router.push('/')
        }
    },
    created(){
        this.getToken(this.$route.query.code)
    }
}
</script>
