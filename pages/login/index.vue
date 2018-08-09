<template>
    <div class="login" v-if="html === ''">
        <div class="login_content">
            <div class="login_logo">
                <img src="~/static/images/logo/logo.png" alt="" srcset="">
            </div>
            <div class="login_form">
                <el-form :model="loginForm" :rules="loginRules" ref="loginRules" class="demo-ruleForm">
                    <el-form-item prop="login">
                        <el-input placeholder="请输入社区账户名" v-model="loginForm.login"><i slot="prefix" class="iconfont icon-icon-"></i></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input placeholder="请输入你的账户密码" v-model="loginForm.password"><i slot="prefix" class="iconfont icon-mima"></i></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('loginRules')">立即登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="login_links">
                <nuxt-link to="/register">注册社区账号</nuxt-link> | 
                <nuxt-link to="/forgat">忘记密码？</nuxt-link>
            </div>
            <div class="login_title">
                <p>使用其他平台的帐号登录到社区</p>
            </div>
            <div class="login_third">
                <el-button type="text" @click.native="loginGithub()"><i class="iconfont icon-GitHub"></i></el-button>
                <el-button type="text" @click.native="loginWeixin()"><i class="iconfont icon-weixin"></i></el-button>
                <el-button type="text" @click.native="loginWeibo()"><i class="iconfont icon-weibo"></i></el-button>
                <el-button type="text" @click.native="loginTwitter()"><i class="iconfont icon-twitter"></i></el-button>
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
            html:'',
            title: '登录',
            loginForm: {
                login: '',
                password: ''
            },
            loginRules: {
                login: [
                    { required: true, message: '请输入社区账户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入你的账户密码', trigger: 'blur' },
                ]
            },
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
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        loginGithub(){
            // let self = this
            // self.$axios.$get('/login/oauth/authorize',{
            //     params:{
            //         client_id:'f147bfdd6085b8b13fa5',
            //         scope:'user,email,public_repo',
            //         state:'a23d34ar23a23e2da212s'
            //     },
            // }).then(function (response) {
            //     self.html = response
            // }).catch(function (error) {
            //     console.log(error);
            // })
            window.open("https://github.com/login/oauth/authorize?client_id=f147bfdd6085b8b13fa5&&scope=user,email,public_repo&&state=a23d34ar23a23e2da212s",'_blank');
        },
        loginWeixin(){

        },
        loginWeibo(){
            
        },
        loginTwitter(){
            
        }
    }
   
}
</script>
