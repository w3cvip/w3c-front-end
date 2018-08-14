<template>
    <div class="index">
        <div class="index_content">
            <el-row type="flex" :gutter="20">
                <el-col :span="18">
                    <div class="content_list">
                        <div class="node_card">
                            <el-button type="text">所有节点</el-button>
                            <div class="node_title">
                                -(小程序)共有 114 个讨论主题
                            </div>
                            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleRouter">
                                <el-menu-item index="default">默认</el-menu-item>
                                <el-menu-item index="newest">最新</el-menu-item>
                                <el-menu-item index="popular">精选</el-menu-item>
                                <el-menu-item index="hotest">最热</el-menu-item>
                                <el-menu-item index="noreply">零回复</el-menu-item>
                            </el-menu>
                        </div>
                        <div class="index_topics">
                            <div class="topics_list" v-for="o in 20" :key="o">
                                <div class="user_avatar">
                                    <img src="https://ypy.w3cvip.org/user/avatar/1/1f59ef.jpg!md" alt="" srcset="">
                                </div>
                                <div class="topics_info">
                                    <div class="title">
                                        <nuxt-link to="topics/50">
                                            <span>微信开发</span>小程序网络请求封装 (Promise)
                                            <el-tooltip class="item" effect="dark" content="置顶帖" placement="top">
                                                <i class="iconfont icon-sendo"></i>
                                            </el-tooltip>
                                            <el-tooltip class="item" effect="dark" content="精华帖" placement="top">
                                                <i class="iconfont icon-diamond"></i>
                                            </el-tooltip>
                                        </nuxt-link>
                                    </div>
                                    <div class="info">
                                        <nuxt-link to="/"> es6china </nuxt-link>• 最后由 <nuxt-link to="/"> 519802806 </nuxt-link> 回复于 20 天前 
                                    </div>
                                </div>
                                <div class="topics_count">
                                    <span title="点赞数">15</span>/
                                    <span title="查看数">50</span>/
                                    <span title="评论数">1200</span>
                                </div>
                            </div>
                            <div class="index_pagination">
                                <el-pagination background @current-change="handleCurrentChange" :page-size="100" layout="prev, pager, next" :total="1000"></el-pagination>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="index_card">
                        <el-card shadow="hover">
                            <div class="text item">
                                <el-button type="primary" size="medium">登录</el-button>
                                <el-button type="primary" size="medium">注册</el-button>
                            </div>
                        </el-card>
                        <el-card shadow="hover">
                            <div slot="header">
                                <span>小帖士</span>
                            </div>
                            <div class="text item">
                               语不惊人,不如不说
                            </div>
                        </el-card>
                        <el-card shadow="hover" class="card_interested">
                            <div slot="header">
                                <span>你可能感兴趣的人</span>
                            </div>
                            <div v-for="o in 4" :key="o" class="text item">
                                <div class="card_interested_list">
                                    <div class="avatar">
                                        <img src="https://ypy.w3cvip.org/user/avatar/1/1f59ef.jpg!md" alt="" srcset="">
                                    </div>
                                    <div class="info">
                                        <span>googleChina</span>
                                        <span>Google开发者</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </el-card>
                        <el-card shadow="hover" class="card_info">
                            <div slot="header">
                                <span>热门话题</span>
                            </div>
                            <div v-for="o in 4" :key="o" class="text item">
                                <nuxt-link to="/">程序猿,你也配吃 10 元的盒饭?</nuxt-link>
                            </div>
                        </el-card>
                        <el-card shadow="hover" class="card_info">
                            <div slot="header">
                                <span>推荐资源</span>
                            </div>
                            <div v-for="o in 4" :key="o" class="text item">
                               <nuxt-link to="/">程序猿,你也配吃 10 元的盒饭?</nuxt-link>
                            </div>
                        </el-card>
                        <el-card shadow="hover">
                            <div slot="header">
                                <span>关注我们</span>
                            </div>
                            <div class="text item">
                                <img src="https://ypy.w3cvip.org/wxcode.jpg" style="width:48%;float:left；display:block">
			                    <img src="https://ypy.w3cvip.org/QQcode.png" style="width:48%;float:right；display:block">
                            </div>
                        </el-card>
                        <el-card shadow="hover">
                            <div slot="header">
                                <span>友情社区</span>
                            </div>
                            <div v-for="o in 4" :key="o" class="text item">
                                {{'社区 ' + o }}
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
            pagerCount:20,
            activeIndex: 'default',
            topicsList:[],
            nodesList:[],
            sourceMaps:{},
            nameMaps:{},
            name: '11111',
            currentPage:3,
            time: (new Date()).getTime() - 60 * 3 * 1000,

        };
    },
    filters:{
        topicsTitle:function(val){
            return val
        },
    },
    methods:{
        getTopics(){
            let self = this
            self.$axios.$get('/api/v3/topics',{
                params:{
                    limit:100
                },
            }).then(function (response) {
                let length = 0
                let obj = resp.data.topics
                for(let key in obj){
                    length ++
                    if(obj[key].excellent === 1 && obj[key].deleted === false){
                        if(length >20){
                            this.topicsList.splice(0,1,obj[key])
                        }else{
                            this.topicsList.push(obj[key])
                        }
                    }
                }
            }).catch(function (error) {
                console.log(error);
            })
        },
        getNodes(){
            let self = this
            self.$axios.$get('/api/v3/nodes',{
                params:{
                    limit:100
                },
            }).then(function (response) {
                
            }).catch(function (error) {
                console.log(error);
            })
            
        },
        handleRouter(key, keyPath) {
            // console.log(key);
            if(key === 'newest'){               //最新
                console.log('newest');
            }else if(key === 'popular'){        //精选
                console.log('popular');
            }else if(key === 'hotest'){         //最热
                console.log('hotest');
            }else if(key === 'noreply'){        //零回复
                console.log('noreply');
            }else{                              //默认
                console.log('default');
            }
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    created(){
        this.handleRouter()
    }
   
}
</script>
