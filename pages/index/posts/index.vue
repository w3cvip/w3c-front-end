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
                                <h2><a href="https://yfdxs.com/morning-glory.html" title="阳光下的牵牛花" target="_blank">阳光下的牵牛花</a></h2>
                                <div class="homeinfo">
                                    <!--分类-->
                                    <span class="category"><a href="https://yfdxs.com/go-wild/photography" rel="category tag">摄影作品</a></span>
                                    <!--时间-->
                                    <span class="date">2013-09-30</span>
                                    <!--点赞-->
                                    <span title="请先浏览本文章，再确定是否点赞！" class="like"><i class="icon-thumbs-up"></i><span class="count">13</span></span>                </div>
                            </article>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="posts_info">
                <el-row :gutter="20">
                    <el-col :span="18">
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
                                    <h2>来自前端小白的部分资料整理</h2>
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
                    <el-col :span="6">
                        <div class="posts_panel">
                            
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