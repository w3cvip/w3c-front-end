<template>
    <div class="topics">
        <div class="topics_header">
            <div class="topics_hcontent">
                <div class="topics_allnode">
                    <b @click="allNode">所有节点</b><i class="iconfont icon-iconfont16"></i>
                </div>
                <div class="topics_nodetype">
                    <Menu mode="horizontal" active-name="1">
                        <MenuItem name="1">
                            默认
                        </MenuItem>
                        <MenuItem name="2">
                            精华帖子
                        </MenuItem>
                        <MenuItem name="3">
                            最新回复
                        </MenuItem>
                        <MenuItem name="4">
                            最新发布
                        </MenuItem>
                        <MenuItem name="5">
                            无人问津
                        </MenuItem>
                    </Menu>
                    <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                        <el-menu-item index="1">默认</el-menu-item>
                        <el-menu-item index="2">精华帖子</el-menu-item>
                        <el-menu-item index="3">最新回复</el-menu-item>
                        <el-menu-item index="4">最新发布</el-menu-item>
                        <el-menu-item index="5">无人问津</el-menu-item>
                    </el-menu> -->
                </div>
            </div>
        </div>
        <div class="topics_content"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'topics',
            activeIndex:'1'
        };
    },
    methods:{
        allNode(){
            console.info("sss")
        }
    }
}
</script>
<style>
.topics{
    width: 100%;
}
.topics_hcontent{
    width: 1200px;
    margin: 0 auto;
    display: flex;
}
.topics_header{
    margin-top: -10px;
    background-color: #f9f9f9;
    width: 100%;
    height: 50px;
    line-height: 50px;
}
.topics_allnode{
    width: 100px;
    font-size: 14px;
    cursor: pointer;
}
.topics_nodetype{
    flex: 1;
}
.topics_nodetype .ivu-menu{
    position: static;
    margin-top: 8px;
}

.topics_nodetype .ivu-menu-horizontal{
    height: 35px;
    line-height: 35px;
}
.topics_nodetype .el-menu--horizontal>.el-menu-item{
    height: 35px;
    line-height: 35px;
}
.topics_nodetype .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px dotted #409EFF;
    color: #303133;
    background-color: #f9f9f9;
}
.el-menu--horizontal>.el-menu-item{
    border: none;
}
.el-menu--horizontal>.el-menu-item:hover{
    background-color: #f9f9f9;
}
.topics_nodetype .el-menu--horizontal{
    border: none;
}
.topics_nodetype .el-menu{
    background-color: #f9f9f9;
    margin-top: 8px;
}
.topics_nodetype .el-menu li:hover{
    background-color: #f9f9f9;
}
.topics_nodetype .ivu-menu-light{
    background-color: #f9f9f9;
}
.topics_nodetype .ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu {
    float: left;
    padding: 0 5px;
    margin: 0 10px;
    position: relative;
    cursor: pointer;
    z-index: 3;
    transition: all .2s ease-in-out;
}
.topics_nodetype .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
    color: #2d8cf0;
    border-bottom: 2px dotted #2d8cf0!important;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
    border: none;
}
.topics_allnode i{
    margin-left: 10px;
}
@media screen and (max-width: 1200px){
    .topics_hcontent{
        width: 100%;
    }
}
</style>
