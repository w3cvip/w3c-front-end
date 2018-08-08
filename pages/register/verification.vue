<template>
    <div class="login">
        <div class="login_content">
            <div class="login_logo">
                <img src="~/static/images/logo/logo.png" alt="" srcset="">
            </div>
            <div class="login_verification">
                <p>感谢您注册 w3c社区</p>
                <p>我们已经向您的邮箱：<nuxt-link to="/">{{email}}</nuxt-link> 发送了一封验证邮件。</p>
                <p>请进入邮箱查收邮件，完成邮箱验证。</p>
            </div>
        </div>
        <div class="login_footer">
                © 2017-2018   W3CVIP.ORG · 蜀ICP备14031517号-12 · ♥ w3c社区 & Design by W3CVIP.ORG.
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "注册验证",
            email:''
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
        getEmail(){
            this.email = this.$route.params.email
        }
    },
    created(){
        this.getEmail()
    }
   
}
</script>
<style>
.login_verification p:nth-child(1){
    padding: 30px 30px;
    font-size: 18px;
}
.login_verification p{
    font-size: 14px;
}
.login_verification p a{
    color:#515a6e;
}
</style>
