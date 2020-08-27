<template>
    <div class="Pay">
        <div class="pay-nav">
            <van-nav-bar title="提交订单" left-text="返回" left-arrow @click-left="Goback" />
        </div>
        <div class="paybody">
            <div class="chooseAddress clearfix" @click="ChooseAddress()">
                <div class="chooseAddress-text" v-if="aid==''" style="line-height:44px">
                    <p class="chooseAddress-text-a">请选择地址</p>
                </div>
                <div class="chooseAddress-text" v-else>
                    <p class="chooseAddress-text-a"><span style="margin-right:8px">{{AddressChosen.name}} </span> <span>{{AddressChosen.tel}}</span></p>
                    <p class="chooseAddress-text-a chooseAddress-text-b">{{AddressChosen.address}}</p>
                </div>
                <div class="chooseAddress-right">
                    <van-icon name="arrow" />
                </div>
            </div>
            <div class="pay-list">
                <div class="order-item" >
                    <div class="order-item-body"  v-for="(item,index) in buyingData" :key=index>
                        <van-card :num="item.count" :price="item.price" :desc="item.enname" :title="item.name" :thumb="item.small_img">
                            <template #tags>
                                <span class="product-type">{{item.rule}}</span>
                            </template>
                        </van-card>
                    </div>
                    <div class="order-item-end clearfix">
                        <span class="total-money fr">¥{{totalPrice}}</span>
                        <span class="total-products fr">总计{{totalNum}}件商品 合计</span>
                    </div>
                </div>
            </div>
            <van-submit-bar :price="totalPrice * 100" button-text="提交订单" @submit="commit" :disabled="totalNum==0"/>
        </div>
    </div>
</template>

<script>
import '../assets/css/PayCss.less'
    export default {
        name:'Pay',
        data() {
            return {
                aid: '',
                chosenAddressId:'',
                sids:[],
                AddressList:[],
                AddressChosen:'',
                buyingData: [],
                totalNum: 0,
                totalPrice:0
            }
        },
        created() {
             this.SearchAddress();
             this.SearchPuying()
            if (!localStorage.getItem('__Tk')) {
                this.$toast.fail({
                         message: '还没有登录\n正在跳转至登录页面',
                        forbidClick: true,
                        //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                         duration:1000,
                         onClose: ()=>{
                         this.$router.push({name:'Login'})
                    }
                });
            }
             
        },
        methods: {
             Goback(){
                this.$router.go(-1);
            },
            // 跳转至地址页面
            ChooseAddress(){
                this.$router.push({name:'MyAddress',params:{
                    choose: 'ChooseAddress',
                    sids:this.$route.params.sids,
                }})
            },

            // 查询地址
            SearchAddress(){
                let tokenString = localStorage.getItem('__Tk');
                 //开启加载提示
                this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                    duration: 0
                });
                
                 this.axios({
                    method: 'GET',
                    url: '/findAddress',
                    params: {
                        appkey: this.appkey,
                        // pid,
                        tokenString
                    }
                }).then(result =>{
                    this.$toast.clear();
                    
                    if(result.data.code==20000){

                        result.data.result.forEach(v=>{
                            
                            let obj = {
                                id: v.aid,
                                name: v.name,
                                tel: v.tel,
                                address: v.province+v.city+v.county+v.addressDetail,
                                isDefault: Boolean(v.isDefault),
                            }
                            if(v.isDefault){
                                this.chosenAddressId = v.aid
                                this.aid =  v.aid;
                               
                            }
                            this.AddressList.push(obj)
                        })
                        //  
                        if(this.$route.params.aid){
                            this.aid = this.$route.params.aid
                            
                        }else{
                             this.aid =  this.chosenAddressId
                        }
                        
                         for(let i =0 ;i<this.AddressList.length;i++){
                             
                            if(this.AddressList[i].id == this.aid){
                                this.AddressChosen = this.AddressList[i]
                                break;
                            }
                        }
                        
                                    
                    } else{
                        this.$toast.fail({
                            message: '查询失败\n请先登录',
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                        });
                        this.$router.push({name:'Login'})
                    }
                }).catch(err=>{
                    this.$toast.clear();
                    
                     this.$toast.fail({
                            message: '查询失败\n'+err,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                        });
                        // this.$router.push({name:'Login'})
                })
            },

            //查询需要购买的商品
            SearchPuying(){
                let tokenString = localStorage.getItem('__Tk');
                if(/\-/.test(this.$route.params.sids)){
                    this.sids = this.$route.params.sids.split("-")
                }else{
                    this.sids[0] = this.$route.params.sids
                }
                
                // console.log(this.$route.params.sids)
                 //开启加载提示
                this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                    duration: 0
                });
                
                 this.axios({
                    method: 'GET',
                    url: '/commitShopcart',
                    params: {
                        appkey: this.appkey,
                        sids: JSON.stringify(this.sids),
                        tokenString
                    }
                }).then(result =>{
                    this.$toast.clear();
                    
                    if(result.data.code==50000){
                         this.buyingData  =  result.data.result
                        //  

                        //  计算总数量和总金额
                        this.buyingData.forEach(v=>{
                            this.totalNum += v.count;
                            this.totalPrice += v.count * v.price
                        })
                    } else{
                        this.$toast.fail({
                            message: '查询失败\n'+result.data.msg,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                        });
                        // this.$router.push({name:'Login'})
                    }
                }).catch(err=>{
                    this.$toast.clear();
                    
                     this.$toast.fail({
                            message: '查询失败\n'+err,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                        });
                })
            },

            // 立即结算
            commit(){
                if(!this.AddressChosen.address){
                    this.$toast("还没有选择地址")
                    // console.log("还没有选择地址")
                    return
                }

                   
                let tokenString = localStorage.getItem('__Tk');
                
                let address = this.AddressChosen
                 this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                    duration: 0
                });

                 this.axios({
                    method: 'POST',
                    url: '/pay',
                    data: {
                        appkey: this.appkey,
                        tokenString,
                        sids: JSON.stringify(this.sids),
                        phone: address.tel,
                        address: address.address,
                        receiver: address.name
                    }
                }).then(result =>{
                    this.$toast.clear();
                    
                    if(result.data.code==60000){
                       this.$toast.success({
                            message: result.data.msg+'\n正在跳转订单页面',
                            forbidClick: true,
                            duration:1200,
                            onClose: ()=>{
                                this.$router.push({name:'Order'})
                            }
                          });
                    } else{
                        this.$toast.fail({
                            message: '支付失败\n'+result.data.msg,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                        });
                        // this.$router.push({name:'Login'})
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
    }
</script>