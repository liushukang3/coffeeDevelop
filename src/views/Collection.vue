<template>
    <div class="Collection">
         <div class="Collection-nav">
            <van-nav-bar title="我的收藏" left-text="返回" left-arrow @click-left="Goback" />
        </div>
        <div class="right-list">
               <div class="right-list-box" v-if="Collections.length>0">
                   <ul >
                        <li :class="['list-item-box',index==Collections.length-1 && Collections.length%2!=0 ?'last-list-item':'']" v-for="(item,index) in Collections" :key=index @click.stop="GoDetail(item)">
                            <div class="list-item">
                                <div class="img-box">
                                    <span :style="{background: 'url('+item.smallImg+') center center / cover no-repeat'}" ></span>
                                </div>
                                <div class="list-item-titleCn">{{item.name}}</div>
                                <div class="list-item-titleEn">{{item.enname}}</div>
                                <div class="list-item-price">¥{{item.price}}</div>
                            </div>
                            <div class="closeIcon" @click.stop="delCollection(item,index)">
                                <van-icon name="clear" color="#e4392c"/>
                            </div>
                        
                        </li>
                    </ul> 
               </div>
                <div class="collection" v-else>
                         <van-empty
                            class="custom-image"
                            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
                            description="还没有东东,赶紧去逛一下吧~"
                        />
                    </div>
            </div>
    </div>
</template>

<script>
    import '../assets/css/Collection.less'
    export default {
        name: 'Collection',

        data(){
            return{
                Collections:[]
            }
        },
        created() {
            this.getCollection()
        },
        methods: {
            Goback(){
                this.$router.go(-1);
            },
            getCollection(){
                this.$toast.loading({
                     message: '加载中',
                     forbidClick: true,
                     duration:2200,
                });
                this.IsLogin = false;
                let tokenString = localStorage.getItem('__Tk');
                 this.axios({
                    method: 'GET',
                    url: '/findAllLike',
                    params: {
                        appkey: this.appkey,
                        tokenString
                    }
                }).then(result =>{
                     this.$toast.clear();
                     
                     
                    if(result.data.code=='2000'){
                         this.$toast.success({
                            message: result.data.msg,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:1200,
                        });
                        this.Collections = result.data.result;


                    }else{
                        this.$toast.fail({
                            message: result.data.msg,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                        });
                    }
                }).catch(err=>{
                     this.$toast.clear();
                    
                     this.$toast.fail({
                            message: '失败\n'+err,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                        });
                })
            },
            GoDetail(item){
                
                this.$router.push({
                    name: 'Detail',
                    query: {
                        pid: item.pid
                    }
                })
            },
            delCollection(item,index){
                let tokenString = localStorage.getItem("__Tk");
                this.axios({
                    method: "POST",
                    url: "/notlike",
                    data: {
                    appkey: this.appkey,
                    tokenString,
                    pid: item.pid
                    }
                })
                    .then(result => {
                        this.$toast.clear();
                    
                        if (result.data.code == 900) {
                            this.$toast.success({
                                message: result.data.msg,
                                forbidClick: true,
                                //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                                duration:1000,
                            });
                            this.Collections.splice(index, 1);
                        }else{
                            this.$toast.fail({
                                message: '失败\n'+err,
                                forbidClick: true,
                                //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                                duration:2200,
                            });
                        }
                    })
                    .catch(err => {
                    this.$toast.clear();
                    
                    });
            }
        },
    }
</script>
