<template>
    <div class="sites">
        <div class="sites_content">
            <div class="sites_list">
                <el-card shadow="hover">
                    这里都是一些有趣的网站，你可以体验一番。如果你知道还有不在此列表的，请帮忙补充<el-button type="success" round>成功按钮</el-button>
                </el-card>
                <el-card shadow="hover">
                    <div slot="header">
                        <span>技术社区</span>
                    </div>
                    <el-row :gutter="20">
                        <el-col :span="4" v-for="o in 50" :key="o">
                            <el-tooltip class="item" effect="dark" content="Bootstrap 中文网" placement="top-start">
                                <a href="http://" target="_blank" >
                                    <img src="https://favicon.b0.upaiyun.com/ip2/www.bootcss.com.ico" alt="" srcset="">Bootstrap 中文网
                                </a>
                            </el-tooltip>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card shadow="hover">
                    <div slot="header">
                        <span>技术社区</span>
                    </div>
                    <el-row :gutter="20">
                        <el-col :span="4" v-for="o in 50" :key="o">
                            <el-tooltip class="item" effect="dark" content="Bootstrap 中文网" placement="top-start">
                                <a href="http://" target="_blank" >
                                    <img src="https://favicon.b0.upaiyun.com/ip2/www.bootcss.com.ico" alt="" srcset="">Bootstrap 中文网
                                </a>
                            </el-tooltip>
                        </el-col>
                    </el-row>
                </el-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'sites',
        };
    },
   
}
</script>