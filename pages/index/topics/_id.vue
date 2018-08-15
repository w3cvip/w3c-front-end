<template>
    <div class="topics_id">
        <div class="">
            <div class="topics_share">
                <div class="options">
                    <el-badge :value="5" :max="9" class="item">
                        <span @click="optionsReply"><i class="iconfont icon-aixin"></i></span>
                    </el-badge>
                    <div class="">
                        <span @click="optionsReply"><i class="iconfont icon-comments"></i></span>
                    </div>
                </div>
                <div class="title">分享</div>
                <div class="share">
                    <span @click="optionsReply"><i class="iconfont icon-lianjie1"></i></span>
                    <span @click="optionsReply"><i class="iconfont icon-weibo"></i></span>
                    <span @click="optionsReply"><i class="iconfont icon-qq"></i></span>
                    <span @click="optionsReply"><i class="iconfont icon-twitter"></i></span>
                    <span @click="optionsReply"><i class="iconfont icon-facebook1"></i></span>
                </div>
            </div>
            <el-row type="flex" :gutter="20">
                <el-col :span="18">
                    <div class="topics_content">
                        <div class="topics_title">
                            <div class="title">
                                <span><nuxt-link to="/">来自前端小白的部分资料整理</nuxt-link></span>
                                <span><nuxt-link to="/"> es6china </nuxt-link> 发布于 20 天前 • 最后由 <nuxt-link to="/"> 519802806 </nuxt-link> 回复于 20 天前  · 179 次阅读</span>
                            </div>
                            <div class="avatar">
                                <img src="https://ypy.w3cvip.org/user/avatar/760/65dbc8.jpg!md" alt="" srcset="">
                            </div>
                        </div>
                        <div class="topics_text">
                            程序猿,你也配吃10元的盒饭?
                            “你也配吃10元的盒饭?”作者:yxixhdfqwe
                            又是一个阳光灿烂的中午,看了一上午的报纸,茶水也顺带喝了不少,肚子早已经咕咕作响了,今天中午吃点什么了,貌似楼下的新开张的盒饭还不错,于是我来到楼下准备买上一盒. 菜色还不错,价格有6元,8元,10元,12元,20元的,像哥这样的精英管理人才,怎么着也的吃最高级的才配合身份,就在我准备购买时,一个响亮的声音响起, "老板,给我一份10元的盒饭", 顺势撇了一眼,一个小伙子,眉开眼笑的靠近盒饭铺,今天是1号,看样子是发工资了.就当他走近时,看到了我,刚才的欢愉的表情瞬时黯淡下去,他知道我认出了他,靠,满头白里带一点黑的头发,永远没睡醒的眼神,以及那凌乱的胡渣子,都出卖了他的身份.我继续狠狠的盯着他,他越发的羞愧了,我犀利的眼神正在和他做着底层通信,我默默的向他传达一个信息, "你,也配吃10元的盒饭?". 他哀怜的眼神似乎在祈求我不要拆穿他的身份,可惜,哥这么有正义感的人,怎么能在这个时候放弃原则! "你不是隔壁公司的程序员么?" 就这一瞬间,他整个人似乎崩溃下去,刚才欢愉的表情彻底变为哭丧,周围的小摊贩以及路人甲乙丙丁,都纷纷投来了鄙视的眼光,他瘟鸡一样的双手抓着头发,痛苦的蹲了下去. 就在这时,人群中终于有人忍不住了,大声呵骂到, "呸,程序员也敢吃10元的盒饭,真不要脸" 一位老大娘好心的提醒到, "小伙子啊,你一个程序员,挣点钱不容易啊,怎么吃10元的盒饭啊" 一名打扮妖艳入时的姑娘说到, "人家当小姐的都才吃10元,你也敢要10元的?" 我义正言辞的给他说到, "我说一句话顶你写一万行代码,也才吃20元的盒饭,你竟敢吃10元的" 老板也发话了, "是程序员啊,太不好意思了,你吃6元的吧,不然人家知道我卖了你10元的,我这生意就做不了啊" 他终于发出颤抖的声音说到 "对不起,我刚才说错了,给我一份6元的". 这时人群中爆发出激烈的掌声,我知道,这是我又一次坚持原则,换来的荣誉的赞赏!

                            *******************************华丽的分割线*******************************
                            今天又是第一个解决那老头
                        </div>
                    </div>
                    <div class="topics_replay">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>回帖</span>
                            </div>
                            <el-tabs type="border-card">
                                <el-tab-pane label="编辑">
                                    <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 10}"  placeholder="请输入内容,使用Markdown格式" v-model="topicsreplay"></el-input>
                                </el-tab-pane>
                                <el-tab-pane label="预览">
                                </el-tab-pane>
                            </el-tabs>
                            <div class="replay_sumbit">
                                <el-button type="primary" size="small">提交回复</el-button>
                                <a href="http://">Markdown 语法指南</a>
                            </div>
                        </el-card>
                    </div>
                    <div class="replay_list">
                        <div class="title">共收到 44 条回复</div>
                        <div class="list" v-for="o in 4" :key="o">
                            <div class="user_repaly">
                                <div class="avatar">
                                    <img src="https://ypy.w3cvip.org/user/avatar/760/65dbc8.jpg!md" alt="" srcset="">
                                </div>
                                <div class="usercontent">
                                    <div class="info">
                                        <div class="name">
                                            <nuxt-link to="/">es6china </nuxt-link>· 2周前
                                        </div>
                                        <div class="options">
                                            <el-badge :value="5" :max="9" class="item">
                                                <span @click="optionsReply"><i class="iconfont icon-huifu"></i></span>
                                            </el-badge>
                                            <el-badge :value="5" :max="9" class="item">
                                                <span @click="optionsGive"><i class="iconfont icon-zan1"></i></span>
                                            </el-badge>
                                            <el-badge :value="5" :max="9" class="item">
                                                <span @click="optionsStep"><i class="iconfont icon-zan1"></i></span>
                                            </el-badge>
                                        </div>
                                    </div>
                                    <div class="markdown">
                                        <nuxt-link to="/">@es6china</nuxt-link>哈哈，挺喜欢RC 的排版的，就弄了这个。也想过作为前端为主题的社区设计方面可以大胆点，但是就是喜欢RC 现有的排版格式，啊哈哈哈哈哈😏 😏
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="topics_card">
                        <el-card shadow="hover">
                            <div class="card_userinfo">
                                <div class="avatarinfo">
                                    <img src="https://ypy.w3cvip.org/user/avatar/760/65dbc8.jpg!md" alt="" srcset="">
                                    <nuxt-link to="/">@es6china</nuxt-link>
                                    <span>Keep calm and coding.</span>
                                </div>
                                <div class="social">
                                    <nuxt-link to="/" title="个人网站"><i class="iconfont icon-wangzhan"></i></nuxt-link>
                                    <nuxt-link to="/" title="github"><i class="iconfont icon-GitHub"></i></nuxt-link>
                                    <nuxt-link to="/" title="微博"><i class="iconfont icon-weibo"></i></nuxt-link>
                                    <nuxt-link to="/" title="twitter"><i class="iconfont icon-twitter"></i></nuxt-link>
                                    <nuxt-link to="/" title="dribbble"><i class="iconfont icon-dribbble"></i></nuxt-link>
                                    <nuxt-link to="/" title="instagram"><i class="iconfont icon-instagram"></i></nuxt-link>
                                    <nuxt-link to="/" title="facebookfacebook52"><i class="iconfont icon-facebookfacebook52"></i></nuxt-link>
                                </div>
                                <div class="buttons">
                                    <el-button type="success" size="mini"><i class="iconfont icon-guanzhu"></i>关注</el-button>
                                    <el-button type="warning" size="mini"><i class="iconfont icon-blacklist"></i>屏蔽</el-button>
                                </div>
                            </div>
                        </el-card>
                        <el-card shadow="hover" class="common_card">
                            <div slot="header">
                                <span>热门帖子</span>
                            </div>
                            <div class="text">
                                <nuxt-link to="/" v-for="o in 4" :key="o">程序猿,你也配吃 10 元的盒饭?</nuxt-link>
                            </div>
                        </el-card>
                        <el-card shadow="hover" class="common_card">
                            <div slot="header">
                                <span>相关帖子</span>
                            </div>
                            <div class="text">
                                <nuxt-link to="/" v-for="o in 4" :key="o">程序猿,你也配吃 10 元的盒饭?</nuxt-link>
                            </div>
                        </el-card>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'sites',
            topicsreplay:''
        };
    },
    methods:{
        optionsReply(){

        },
        optionsGive(){

        },
        optionsStep(){

        }
    }
   
}
</script>