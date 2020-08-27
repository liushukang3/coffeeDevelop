<template>
    <div class="Order">
        <div class="Order-nav">
            <van-tabs v-model="navActive" sticky swipeable animated title-active-color="rgb(64, 187, 181)" color="#1d807b8a" @change="SelectTag">
                <van-tab :title="item.title" :name="item.ind" v-for="(item,index) in navData" :key=index>
                    <div class="Order-body">
                        <div class="cartEmpty" v-if="JSON.stringify(orderData) == '{}'">
                            <van-empty
                            class="custom-image"
                            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
                            description="还没有订单,赶紧去逛一下吧~"
                            />
                        </div>
                        <div class="haveOrder" v-else>
                            <div class="order-item" v-for="(va,ind) in orderData" :key="ind">
                                <div class="order-item-start clearfix">
                                    <div class="clearfix">
                                        <span class="order-id fl">{{ind}}</span>
                                        <div class="order-tool fr" v-if="va[0].status==2">
                                            <span class="order-style">已收货</span>
                                            <span class="order-del" @click="delOrder(va,ind)">删除</span>
                                        </div>
                                        <div v-else class="fr">
                                            <span @click="getProduct(va,ind)" style="color:#333">确定收货</span>
                                        </div>
                                    </div>
                                     <div class="chooseAddress-text">
                                        <p class="chooseAddress-text-a"><span style="margin-right:8px">{{va[0].receiver||'无名君'}}</span> <span>{{va[0].phone||13500000000}}</span></p>
                                        <p class="chooseAddress-text-a chooseAddress-text-b">{{va[0].address}}</p>
                                    </div>
                                </div>
                                <div class="order-item-body" v-for="(v,i) in va" :key=i>
                                     <van-card
                                        :num =v.count
                                        :price=v.price
                                        :desc="v.enname"
                                        :title="v.name"
                                        :thumb="v.smallImg"
                                    >
                                    <template #tags>
                                        <span class="product-type">{{v.rule}}</span>
                                    </template>
                                    </van-card>
                                </div>

                                <div class="order-item-end clearfix">
                                    
                                   
                                    <!-- 全局过滤器格式化时间 -->
                                    <span class="order-time fl">{{va[0].createdAt | formatDate('yyyy-MM-dd hh:mm:ss')}}</span>
                                    
                                    <span class="total-money fr">¥{{totalNumFn(va,'price')}}</span>
                                    <span class="total-products fr">总计{{totalNumFn(va)}}件商品 合计</span>
                                </div>
                            </div>
                            <div class="orderEnd">到底了...</div>
                         </div>
                    </div>
                </van-tab>
                
            </van-tabs>
        </div>
        
    </div>
</template>

<script>
 import '../../assets/css/OrderCss.less'
    export default {
        name: 'Order',
        data() {
            return {
                navData:[
                    {title:'全部订单',ind:0},
                    {title:'待收货',ind:1},
                    {title:'已收货',ind:2},
                ],
                orderData: {},
                // orderIDs: [],
                navActive: 0,
                isReceive: false,
                totalNum: 0,
                totalPrice: 0,

            }
        },
        created(){
             this.SearchOrder()
        },
        methods: {
            Goback(){
                this.$router.go(-1);
            },
            // 查询订单
            SearchOrder(){
                 this.$toast.loading({
                            message: '加载中',
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                        });
                this.isReceive = false;
                let tokenString = localStorage.getItem('__Tk');
                 this.axios({
                    method: 'GET',
                    url: '/findOrder',
                    params: {
                        appkey: this.appkey,
                        status: this.navActive,
                        tokenString
                    }
                }).then(result =>{
                     this.$toast.clear();

                    
                    // this.orderData={}
                    if(result.data.code==70000){
                         this.$toast.success({
                            message: result.data.msg,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:800,
                             onClose: ()=>{
                                this.isReceive = true;
                            }
                        });
                        //  按时间降序排序
                        result.data.result.sort((a, b) => {
                            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                        })
                        // 存放不同的订单编号
                        let orderIds = [];
                        // 临时对象存储订单数据
                        let tempobj = {};

                        // 根据订单编号处理数据 相同编号放一起
                        result.data.result.forEach(v=>{
                            
                           if(orderIds.indexOf(v.oid)==-1){
                               //    存放唯一订单编号
                               orderIds.push(v.oid);
                            //    以单号为键名，存放订单数组
                               tempobj[v.oid] = [];
                               tempobj[v.oid].push(v)
                           }else{
                            //   键名存在，订单放一起
                               tempobj[v.oid].push(v)
                           }
                       })
                    //    
                       this.orderData = tempobj;

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
            // 顶部选择
            SelectTag(a){
                this.SearchOrder()
            },
            // 计算数量
            totalNumFn(va,numOrPrice){
                // va 要循环的数据,arry
                // numOrPrice 计算总数还是金额
                let numOrPric = numOrPrice ? numOrPrice:'num';
                let total = 0;
                let price = 0;
                va.forEach(v=>{
                    total += v.count
                    price += v.count * v.price
                })

                return numOrPric=='num'?total:price;
            },
            // 确定收货
            getProduct(va,ind){
                // va 同单号的商品
                // ind 单号
                if(this.isReceive){
                     this.$toast.loading({
                            message: '加载中',
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                        });
                 let tokenString = localStorage.getItem('__Tk');
                 
                 this.axios({
                    method: 'POST',
                    url: '/receive',
                    data: {
                        appkey: this.appkey,
                        tokenString,
                        oid: ind
                    }
                }).then(result =>{
                    this.$toast.clear();
                    
                    if(result.data.code==80000){
                         
                        this.$toast.success({
                            message: result.data.msg,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                           
                        });
                        // 修改订单数据的状态
                        this.orderData[ind][0].status=2;
                         //如果是待收货，则删除页面上的订单数据
                        if (this.navActive == 1) {
                            delete this.orderData[ind];
                        }
                    }else{
                        this.$toast.clear();
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
                }
            },
            // 删除订单
            delOrder(va,ind){
                let tokenString = localStorage.getItem('__Tk');
                
                 this.axios({
                    method: 'POST',
                    url: '/removeOrder',
                    data: {
                        appkey: this.appkey,
                        tokenString,
                        oid: ind
                    }
                }).then(result =>{
                    this.$toast.clear();
                    
                    if(result.data.code==90000){
                        // 删除页面的订单
                         this.$toast.success({
                            message: result.data.msg,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:1200,
                        });
                            
                         delete this.orderData[ind];
                         this.$forceUpdate()
                    }else{
                        this.$toast.clear();
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
            }
            
        }
    }
</script>
