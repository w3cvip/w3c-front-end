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