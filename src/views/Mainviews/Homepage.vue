<template>
    <div class="Homepage">
        <div class="banner-box">
           <van-swipe  indicator-color="#1d807b" :autoplay="3000">
                <van-swipe-item v-for="(item, index) in bannerImages" :key="index"> 
                    <img :src="item.bannerImg" v-if="index==0" />
                    <img v-lazy="item.bannerImg" v-else/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="menu-box">
            <div class="left-nav">
                <van-sidebar v-model="IsActiveKey.key" @change="getProducts">
                    <van-sidebar-item :title="item.typeDesc" v-for="(item,index) in sideNav" :key="index" />
                    <!-- <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" /> -->
                </van-sidebar>
            </div>
            <div class="right-list">
               <div class="right-list-box">
                   <ul >
                        <li :class="['list-item-box',index==products.length-1 && products.length%2!=0 ?'last-list-item':'']" v-for="(item,index) in products" :key=index @click="GoDetail(item)">
                            <div class="list-item">
                                <div class="img-box">
                                    <span :style="{background: 'url('+item.smallImg+') center center / cover no-repeat'}" ></span>
                                </div>
                                <div class="list-item-titleCn">{{item.name}}</div>
                                <div class="list-item-titleEn">{{item.enname}}</div>
                                <div class="list-item-price">¥{{item.price}}</div>
                            </div>
                        </li>
                    </ul> 
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../assets/css/HomepageCss.less';
import {createNamespacedHelpers} from 'vuex'
const {mapState, mapMutations} = createNamespacedHelpers('HomePageModule')

    export default {
        name: "Homepage",
         data() {
            return {
                // 轮播图
                bannerImages: [],
                // 侧边导航栏
                sideNav: [],
                // 商品
                products: [],

                // activeKey: 0

            };
        },
        created(){
            this. getBanner()
            this.getSide();
            
        },
        computed: {
            ...mapState(['bannerData', 'sideData', 'productsData','IsActiveKey']),

        },
        methods: {
            ...mapMutations(['saveData','saveProData']),
            // 获取轮播图
            getBanner(){

                // 查看state是否存在banner 数据有则直接使用
                if(this.bannerData.length>0){
                    this.bannerImages = this.bannerData;
                    
                }


                 //开启加载提示
                this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                    duration: 0
                });
                 this.axios({
                    method: 'GET',
                    url: '/banner',
                    params: {
                        appkey: this.appkey
                    }
                }).then(result =>{
                    this.$toast.clear();
                    if(result.data.code==300){
                        
                        this.bannerImages = result.data.result;
                        // console.log('this.banner>>>>>',this.bannerImages)
                         this.saveData({dataType: 'bannerData', dataValue: result.data.result});
                    }
                }).catch(err=>{
                   this.$toast.clear();
                    this.$toast.fail({
                        message: '轮播图加载失败...\n'+err,
                        forbidClick: true,

                        //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                        duration:1200
                          });
                    
                })
            },

            // 获取导航栏
            getSide(){
                 // 查看state是否存在side 数据有则直接使用
                if(this.sideData.length>0){
                    this.sideNav = this.sideData;
                    
                    this.getProducts(this.IsActiveKey.key)
                    
                    return;
                }

                 //开启加载提示
                this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    duration: 0
                });
                this.axios({
                    method: 'GET',
                    url: '/type',
                    params: {
                        appkey: this.appkey
                    }
                }).then(result =>{
                    
                    this.$toast.clear();
                    if(result.data.code==400){
                        // unshift 数组最前面添加元素
                        // 先在result处理想要的数据，载赋值给sideNav,否则先赋值再添加可能不管用
                        result.data.result.unshift({
                            id:0,
                            type: 'isHot',
                            typeDesc: '热销推荐'
                            // isActive
                        });

                        this.sideNav = result.data.result;
                        //  
                         this.saveData({dataType: 'sideData', dataValue: result.data.result});
                         
                         let ind = 0;
                         this.getProducts(ind)
                        // this.saveData({dataType: 'IsActiveKey', dataValue: {key:ind}});
                        //  this.activeKey = ind;
                         
                    }
                }).catch(err=>{
                   this.$toast.clear();
                    this.$toast.fail({
                        message: '商品类型加载失败...\n'+err,
                        forbidClick: true,

                        //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                        duration:1200
                          });
                    
                })
            },
            // 获取商品数据
            getProducts(index){
                // 每次先清空商品的数据
                // this.products =[];
                // this.activeKey = index;

                
                 this.saveData({
                     dataType: 'IsActiveKey', 
                     dataValue: {
                         key:index,
                         type:this.sideData[index].type
                         }
                    });

                let theType = this.IsActiveKey.type;
                
                
                if(this.productsData[theType]){
                    this.products = this.productsData[theType];
                    
                    return;
                }
                // this.IsActiveKey = index;
                //  

                 //开启加载提示
                this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    duration: 0
                });
                
                let key,value;
                if(index==0){
                    key = 'isHot';
                    value = 1;
                }else{
                    key = 'type';
                    value = this.sideNav[index].type;
                }
                this.axios({
                    method: 'GET',
                    url: '/typeProducts',
                    params: {
                        appkey: this.appkey,
                        key,
                        value
                    }
                }).then(result =>{
                    
                    this.$toast.clear();
                    
                   if(result.data.code==500){
                       this.products = result.data.result;
                   }
                    this.saveProData({
                        dataType: theType, 
                        dataValue: result.data.result
                    });
                //    
                    
                }).catch(err=>{
                   this.$toast.clear();
                    this.$toast.fail({
                        message: '商品类型加载失败...\n'+err,
                        forbidClick: true,

                        //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                        duration:1200
                          });
                    
                })
            },
            GoDetail(item){
                
                this.$router.push({
                    name:'Detail',
                    query:{
                        pid:item.pid
                    }
                })
            }
        },
    }
</script>