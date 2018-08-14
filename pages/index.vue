<template>
    <section class="container">
        <BackTop :height="100" :bottom="80">
            <i class="iconfont icon-jiantouarrow492"></i>
        </BackTop>
        <div class="">
            <app-header/>
        </div>
        <div class="">
            <nuxt-child/>
        </div>
        <div class="">
            <app-footer/>
        </div>
    </section>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
    data () {
        return {
            title: 'w3cool - 高品质的开发者社区'
        }
    },
    components: {
        AppHeader,
        AppFooter
    },
    head () {
        return {
            title: this.title,
            meta: [
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
        }
    },
    created(){
        console.info(process.env)
    }
}
</script>

<style scoped>
.ivu-back-top {
    z-index: 10;
    position: fixed;
    cursor: pointer;
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    transition: .3s;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    z-index: 5;
}
.ivu-back-top i {    
    color: #409eff;
    display: block;
    text-align: center;
    font-size: 18px;
}
</style>

