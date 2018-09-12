<template>
    <div class="posts">
        <div class="posts_content">
            <div class="post_gallery">
                <el-row :gutter="15">
                    <el-col :span="6" v-for="o in 4" :key="o">
                        <div class="post_gallery_info">
                            <article class="postgrid">
                                <figure>
                                    <a href="https://yfdxs.com/morning-glory.html" title="阳光下的牵牛花" target="_blank">
                                        <img class="thumb" src="https://yfdxs.com/wp-content/themes/lensnews/includes/timthumb.php?src=https://pic.salongweb.com/sites/2/gallery/qianniuhua/qianniuhua_001.jpg&amp;h=338&amp;w=600" data-original="https://yfdxs.com/wp-content/themes/lensnews/includes/timthumb.php?src=https://pic.salongweb.com/sites/2/gallery/qianniuhua/qianniuhua_001.jpg&amp;h=338&amp;w=600" alt="阳光下的牵牛花" style="display: block;">                    </a>
                                </figure>
                                <h2><a href="" title="开发自己的前端工具库" target="_blank">开发自己的前端工具库</a></h2>
                                <div class="homeinfo">
                                    <span class="category"><a href="" rel="category tag">琴歌</a></span>
                                    <span class="date">2013-09-30</span>
                                    <span title="请先浏览本文章，再确定是否点赞！" class="like"><i class="icon-thumbs-up"></i><span class="count">13</span></span>                </div>
                            </article>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="posts_info">
                <el-row :gutter="20">
                    <el-col :span="16">
                        <div class="posts_list">
                            <div class="list" v-for="o in 4" :key="o">
                                <div class="info">
                                    <div class="avatr">
                                        <img src="https://ypy.w3cvip.org/user/avatar/1/1f59ef.jpg!md" alt="" srcset="">
                                    </div>
                                    <div class="berif">
                                        <b>Mqlis sql</b>
                                        <span>我只是一个小前端</span>
                                    </div>
                                    <div class="date">5分钟前</div>
                                </div>
                                <div class="text">
                                    <h3>来自前端小白的部分资料整理</h3>
                                    <p>在我准备购买时,一个响亮的声音响起, "老板,给我一份10元的盒饭", 顺势撇了一眼,一个小伙子,眉开眼笑的靠近盒饭铺,今天是1号,看样子是发工资了.就当他走近时,看到了我,刚才的欢愉的表情瞬时黯淡下去,他知道我认出了他,靠,满头白里带一点黑的头发,永远没睡醒的眼神,以及那凌乱的胡渣子...</p>
                                </div>
                                <!-- <div class="option">
                                    <div class="item">
                                        <i class="iconfont icon-aixin">119</i>
                                    </div>
                                    <div class="item">
                                        <i class="iconfont icon-comments">199</i>
                                    </div>
                                    <div class="item">
                                        <el-popover placement="top" width="80" v-model="visible2">
                                            <div class="">
ww
                                            </div>
                                            <i class="iconfont icon-huifu" slot="reference">分享</i> 
                                        </el-popover>
                                    </div>
                                    <div class="item">
                                        <el-popover placement="top" width="80" v-model="visible2">
                                            <el-button type="text">举报</el-button>
                                            <i class="iconfont icon-huifu" slot="reference"></i>
                                        </el-popover>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="posts_panel">
                            <el-card class="common_card">
                                <div slot="header">
                                    <span>热门头条</span>
                                </div>
                                <div class="item">
                                    <el-carousel indicator-position="outside" arrow="never" height="120px">
                                        <el-carousel-item v-for="item in 4" :key="item">
                                            <h3>开发自己的前端工具库 (二)：函数式编程</h3>
                                            <p>本系列文章将通过自己的一个开发工具库的实战经验(踩过的坑)教大家如何开发属于自己的一个工具库，在这里你可以学到Git的使用规范，基础项目的搭建，代码编写的规范，函数式编程思想，TypeScript实战，单元测试，编写文档和发布NPM包等等知识。</p>
                                        </el-carousel-item>
                                    </el-carousel>
                                </div>
                            </el-card>
                        </div>
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
            name: 'posts',
        };
    },
   
}
</script>