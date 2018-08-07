<template>
    <div class="index">
        <div class="index_content">
            <div class="index_ad">
                <Card>
                    你终于找到了我。其实，我一直都在你身边...
                </Card>
            </div>
            
            <div class="index_guide">
                <el-row type="flex" class="row-bg" :gutter="20">
                    <el-col :span="6">
                        <div class="">
                            <Card>
                                <div class="index_item">
                                    <div class="index_icon">
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#icon-pinglun"></use>
                                        </svg>
                                    </div>
                                    <div class="text">
                                        <nuxt-link to="/topics">前端社区<i class="iconfont icon-jiantouarrow484"></i></nuxt-link>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="">
                            <Card>
                                <div class="index_item">
                                    <div class="index_icon">
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#icon-tubiaozhizuomobanyihuifu-"></use>
                                        </svg>
                                    </div>
                                    <div class="text">
                                        <nuxt-link to="/topics">技术文档<i class="iconfont icon-jiantouarrow484"></i></nuxt-link>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="">
                            <Card>
                                <div class="index_item">
                                    <div class="index_icon">
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#icon-drxx59"></use>
                                        </svg>
                                    </div>
                                    <div class="text">
                                        <nuxt-link to="/topics">招聘求职<i class="iconfont icon-jiantouarrow484"></i></nuxt-link>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="">
                            <Card>
                                <div class="index_item">
                                    <div class="index_icon">
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#icon-zuanshi"></use>
                                        </svg>
                                    </div>
                                    <div class="text">
                                        <nuxt-link to="/topics">精华帖子<i class="iconfont icon-jiantouarrow484"></i></nuxt-link>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="index_essence">
                <Card>
                    <p slot="title">社区精华帖</p>
                    <div class="topic_list">
                        <div class="topic_info" v-for="item in topicsList" :key="item.id">
                            <div class="topic_img">
                                <nuxt-link to="/users/es6china">
                                    <img :src="item.user.avatar_url" alt="" srcset="">
                                </nuxt-link>
                            </div>
                            <div class="topic_content">
                                <nuxt-link to="/topics" class="node_title">
                                    <div class="topic_title">
                                        <span class="node">{{item.node_name}}</span> {{item.title | topicsTitle}}
                                        <el-tooltip class="item" effect="dark" content="精华帖" placement="top">
                                            <i class="iconfont icon-zuanshi"></i>
                                        </el-tooltip>
                                    </div>
                                </nuxt-link>
                                <div class="topic_user">
                                    <nuxt-link to="/users/es6china">{{item.user.login}}</nuxt-link> • 1068 次阅读 • 最后由<nuxt-link to="/users/es6china">{{item.last_reply_user_login}}</nuxt-link>回复于 <Time :time="item.created_at"/>
                                </div>
                            </div>
                            <div class="topic_repcount">
                                <div class="badge">99</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div class="index_node">
                <Card :bordered="false">
                    <p slot="title">社区节点</p>
                    <div class="node_list">
                        <div class="node_info" v-for="item in nodesList" :key="item.id">
                            <div class="node_root">
                                {{item.section_name}}
                            </div>
                            <div class="node_content">
                                <span>
                                    <a href="http://">{{item.name}}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div class="index_city">
                <Card :bordered="false">
                    <p slot="title">热门城市</p>
                    <div class="city_list">
                        <span>
                            <a href="http://">北京</a>
                        </span>
                        <span>
                            <a href="http://">北京</a>
                        </span>
                        <span>
                            <a href="http://">北京</a>
                        </span>
                        <span>
                            <a href="http://">北京</a>
                        </span>
                        <span>
                            <a href="http://">北京</a>
                        </span>
                        <span>
                            <a href="http://">北京</a>
                        </span>
                        <span>
                            <a href="http://">北京</a>
                        </span>
                        <span>
                            <a href="http://">北京</a>
                        </span>
                        <span>
                            <a href="http://">北京</a>
                        </span>
                        <span>
                            <a href="http://">北京</a>
                        </span>
                        <span>
                            <a href="http://">北京</a>
                        </span>
                        <span>
                            <a href="http://">北京</a>
                        </span>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>
<script>
import api from '~/untils/api'
import axios from 'axios'
export default {
    data() {
        return {
            topicsList:[],
            nodesList:[],
            sourceMaps:{},
            nameMaps:{},
            name: '11111',
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
            api({
                url: '/api/v3/topics',
                data:{
                    limit:100
                }
            }).then((resp) => {
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

            })
        },
        getNodes(){
            api({
                url: '/api/v3/nodes',
            }).then((resp) => {
                // console.info(self.nodesList)
            })
        }
    },
    created(){
        this.getTopics()
        this.getNodes()
    }
   
}
</script>
<style scoped>
.icon {
    width: 80px;
    height: 100%;
    vertical-align: top;
    fill: currentColor;
    overflow: hidden;
}
.index_content{
    width: 1200px;
    margin: 0 auto;
}
.index_ad .ivu-card{
    background-color: #ffffff;
    padding: 15px;
    border-radius:2px; 
}
.index_guide{
    margin: 15px 0;
}
.ivu-card-bordered {
    border: none;
}
.ivu-card .ivu-card-body{
    padding: 0!important;
}
.index_item{
    position: relative;
}
.index_item .text {
    display: block;
    text-align: left;
    background: #F5F5F5;
    border-top: 1px solid #E9E9E9;
    font-size: 14px;
    font-weight: bold;
    border-radius: 0 0 3px 3px;
}
.index_item  .index_icon{
    text-align: center;
    height: 120px;
}
.index_item .text a{
    display: block;
    color: #666;
    padding: 6px 15px;
}
.index_item .text .iconfont{
    float: right !important;
}
.topic_list{
    width: 100%;
    /* display: flex; */
    overflow: hidden;
}
.topic_info{
    width: 50%;
    float: left;
    display: flex;
    min-height: 68px;
    border-bottom: 1px solid #F0F0F0;
    padding: 10px 15px;
    vertical-align: top;
}
.topic_info .topic_img{
    width: 48px;
    height: 48px;
    margin-right: 10px;
}
.topic_info .topic_img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.topic_content{
    vertical-align: top;
    flex: 1;
}
.topic_repcount{
    width: 100px;
}
.node_title .node{
    color: #777;
    margin-right: 3px;
}
.node_title{
    color: #222;
    font-weight: 400;
    line-height: 30px;
}
.topic_repcount{
    position: relative;
    width: 80px;
}
.topic_repcount .badge{
    top: 15px;
    width: 40px;
    text-align: center;
    border-radius: 10px;
    position: relative;
    background-color: #CFD3E6;
    left: 25px;
}
.topic_title{
    height: 30px;
    overflow:hidden;
}
.topic_title .iconfont{
    color:  #3BD54E;
}
.index_node{
    margin: 20px 0;
}
.node_list{
    padding: 20px 20px;
}
.node_info{
    display: flex;
}
.node_info .node_root{
    width: 120px;
    text-align: right;
    margin-right: 20px;
    color: #aaa;
}
.node_info .node_content{
    flex: 1;
}
.node_info .node_content span{
    margin-bottom: 10px;
    padding: 0px 30px;
    display: inline-block;
}
.node_info .node_content span a{
    color: #333;
}
.node_info .node_content span a:hover{
    border-bottom: 1px solid #333;
}
.city_list{
    padding: 20px 0px;
    text-align: center;
}
.city_list span{
    padding: 0px 15px;
}
</style>
