<template>
    <div class="footer">
        <div class="footer_content">
            <el-row :gutter="20">
                <el-col :span="3">
                    <div class="footer_logo">
                        <img src="https://ypy.w3cvip.org/logo/footer.png" alt="" srcset="">
                    </div>
                </el-col>
                <el-col :span="21">
                    <div class="footer_desc">
                        <div class="links">
                            <a href="/about">社区关于</a>/
                            <a href="/about">活跃用户</a>/
                            <a href="/about">w3c组织</a>/
                            <a href="/about">w3c反馈</a>/
                            <a href="/about">API</a>/
                            <a href="/about">w3c贡献者</a>/
                            <a href="/about">酷站</a>
                        </div>
                        <div class="links">
                            <a href="/about">用户需知</a>/
                            <a href="/about">免责申明</a>/
                            <a href="/about">友情链接</a>/
                            <a href="/about">联系我们</a>/
                            <a href="/about">商务合作</a>
                        </div>
                        <div class="desc">
                            <p>w3c 是一个具有专业性、前瞻性、综合性的前端技术社区，致力于促进前端开发领域知识与技术创新的传播。</p>
                        </div>
                        <div class="desc">
                            <p>CDN由 <a href="http://"></a>赞助。</p>
                        </div>
                    </div>
                </el-col>
        
            </el-row>
        </div>
    </div>
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
<style>

</style>
