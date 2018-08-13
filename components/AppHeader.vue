<template>
    <div class="header">
        <div class="header_content">
            <div class="header_info">
                <el-row type="flex" class="row-bg">
                    <el-col :span="16" class="header_menu">
                        <el-menu class="el-menu-demo" mode="horizontal" router :default-active="activeIndex" @select="handleSelect">
                            <el-menu-item index="/">w3cvip</el-menu-item>
                            <el-menu-item index="/">首页</el-menu-item>
                            <el-menu-item index="/find">发现</el-menu-item>
                            <el-menu-item index="/square">广场</el-menu-item>
                            <el-menu-item index="/posts">专栏</el-menu-item>
                            <el-menu-item index="/sites">酷站</el-menu-item>
                        </el-menu>
                    </el-col>
                    <el-col :span="8" class="header_man">
                        <el-row type="flex">
                            <el-col :span="12">
                                <div class="header_search">
                                    <i class="iconfont icon-sousuo"></i>
                                    <el-input placeholder="搜索本站内容" v-model="search" clearable></el-input>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="header_notice">
                                    <i class="iconfont icon-nitification"></i>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="header_create">
                                    <i class="iconfont icon-weibiaoti37"></i>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="header_userinfo">
                                    <img src="" alt="" srcset="">
                                    <i class="iconfont icon-sanjiao"></i>
                                </div>
                            </el-col>
                        
                        </el-row>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search:'',
            activeIndex: '/',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
