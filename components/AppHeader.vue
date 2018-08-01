<template>
    <div class="header">
        <div class="header_content">
            <div class="header_info">
                <el-row type="flex" class="row-bg">
                    <el-col :span="16" class="header_menu">
                        <!-- <div class="header_logo">
                            <nuxt-link to="/">w3cvip</nuxt-link>
                        </div> -->
                        <el-menu class="el-menu-demo" mode="horizontal" router :default-active="activeIndex" @select="handleSelect">
                            <el-menu-item index="/">w3cvip</el-menu-item>
                            <el-menu-item index="/topics">社区</el-menu-item>
                            <el-menu-item index="/posts">头条</el-menu-item>
                            <el-menu-item index="/jobs">招聘</el-menu-item>
                            <el-menu-item index="/wiki">Wiki</el-menu-item>
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
            activeIndex: '/topics',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>


<style>
.header{
    position: fixed;
    top: 0;
    background-color: #FFFFFF;
    color: #9CA4A9;
    font-size: 14px;
    z-index: 1;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
}
.header_info{
    width: 1200px;
    margin: 0 auto;
    height: 55px;
}
.header_content{
    
    
    
    
}
.header_man{
    height: 55px;
}
.header_menu{
    display: flex;
}
.header_menu .el-menu--horizontal{
    border: none;
}
.header_menu .el-menu--horizontal>.el-menu-item:nth-child(1).is-active {
    border: none;
}
.header_menu .el-menu--horizontal>.el-menu-item:nth-child(1){
    border: none;
    color: #409EFF;
    font-size: 20px;
    font-weight: 700;
}
.header_logo{
    text-align: left;
    color: #409EFF;
    display: inline-block;
    width: 80px;
    color: #356DD0;
    font-weight: 700;
    font-size: 20px;
    vertical-align: middle;
    line-height: 100%;
    line-height: 55px;
}
.el-menu{
    flex: 1;  
}

.header_search{
    display: flex;
}
.header_search .iconfont{
    display: inline;
    width: 20px;
    font-size: 16px;
    line-height: 55px;
    color: #000000;
    font-weight: 700;
}
.header_search input{
    display: inline;
    flex: 1;
    border: 0px;
    outline: none;
    padding: 0px 5px!important;
    margin-top: 8px;
}
.header_notice,.header_create,.header_userinfo{
    text-align: center;
    width: 100%;
    display: inline-block;
    line-height: 55px;
}
.header_notice .iconfont,.header_create .iconfont,.header_userinfo .iconfont{
    color: #000000;
}
</style>

