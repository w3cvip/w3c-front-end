<template>
    <div class="login">
        <div class="login_content">
            <div class="login_logo">
                <img src="~/static/images/logo/logo.png" alt="" srcset="">
            </div>
            <div class="login_form">
                <el-form :model="regForm" :rules="regRules" ref="regRules" class="demo-ruleForm">
                    <el-form-item prop="email">
                        <el-input placeholder="请输入邮箱地址" v-model="regForm.email"><i slot="prefix" class="iconfont icon-mail"></i></el-input>
                    </el-form-item>
                    <el-form-item prop="login">
                        <el-input placeholder="请输入用户名,可用于登录" v-model="regForm.login"><i slot="prefix" class="iconfont icon-icon-"></i></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="请输入至少6位密码" v-model="regForm.password" pwssword><i slot="prefix" class="iconfont icon-mima"></i></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('regRules')">立即注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="login_links">
                <nuxt-link to="/login">登录</nuxt-link> | 
                <nuxt-link to="/forgat">忘记密码？</nuxt-link>
            </div>
            <div class="login_title">
                <p>使用其他平台的帐号登录到社区</p>
            </div>
            <div class="login_third">
                <nuxt-link to="/"><i class="iconfont icon-GitHub"></i></nuxt-link>
                <nuxt-link to="/"><i class="iconfont icon-weixin"></i></nuxt-link>
                <nuxt-link to="/"><i class="iconfont icon-weibo"></i></nuxt-link>
                <nuxt-link to="/"><i class="iconfont icon-twitter"></i></nuxt-link>
            </div>
            <div class="reg_needknow">
                注册即代表您同意《<nuxt-link to="/">w3c社区用户需知</nuxt-link>》
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
            title: '注册',
            regForm: {
                email: '',
                login:'',
                password:''
            },
            regRules: {
                email: [
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' }
                ],
                login: [
                    { required: true, message: '请输入用户名,可用于登录', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, message: '至少6个字符', trigger: 'blur' }
                ]
            }
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
                    this.$router.push({
                        name: 'register-verification',
                        params: {
                            email: this.regForm.email
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
   
}
</script>
