<template>
    <section class="container">
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



</style>

