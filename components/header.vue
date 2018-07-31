<template>
    
</template>

<script>
export default {
    data () {
        return {
            title: 'Hello World!'
        }
    },
    head () {
        return {
            title: this.title,
            meta: [
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
        }
    },
}
</script>
