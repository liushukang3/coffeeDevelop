<template>
    <div class="Detail">
        <!-- <van-sticky> -->
             <div class="detail-nav">
                <van-nav-bar
                    title="商品详情"
                    left-text="返回"
                    left-arrow
                    @click-left="Goback"
                />
            </div>
        <!-- </van-sticky> -->
       
       <div class="detail-bigbox">
            <div class="detail-body">
                <div class="detail-img">
                    <img :src="productData.large_img" alt="">
                </div>
                <div class="detail-body-box" >
                    <div class="detail-title">
                    <div class="detail-title-box">
                        <div class="detail-title-Cn">{{productData.name}}</div>
                        <div class="detail-title-En">{{productData.enname}}</div>
                    </div>
                    <div class="like">
                        <van-icon :name="isLike?'like':'like-o'" @click="LikeOrNotlike"/>
                    </div>
                </div>
                <div class="detail-choose">
                    <ul>
                        <li class="detail-choose-item" v-for="(item,index) in productData.rules" :key=index>
                            <span class="detail-choose-item-title">{{item.title}}</span>
                            <span :class="['detail-choose-item-tag', v.isChoose?'activeTag':'unactiveTag']" v-for="(v,i) in item.arr" :key=i @click="ChooseTag(item.arr,v)">{{v.tag}}</span>
                        </li>
                    </ul>
                </div>
                <div class="detail-msg">
                    <div class="detail-msg-title">商品描述</div>
                    <p v-for="(item,index) in productData.desc" :key=index>{{item}}</p>
                </div>
                <div class="detail-price-box">
                    <span class="detail-price">¥{{productData.price}}</span>
                    <van-stepper v-model="value" theme="round" button-size="22" disable-input />
                </div>
            </div>
        </div>
       </div>
        <div class="detail-bottom">
            <van-goods-action> 
                <van-goods-action-icon icon="cart-o" text="购物车" :badge="ShoppingcartCount" @click="GoShopcart"/>
                <van-goods-action-button color="rgba(64, 187, 181,0.5)" type="warning" text="加入购物车" @click="AddShopcart"/>
                <van-goods-action-button color="rgb(64, 187, 181)" type="danger" text="立即购买" @click="GoBuy"/>
            </van-goods-action>
        </div>
    </div>
</template>

<script>
    import '../assets/css/DetailCss.less'
    export default {
        name: 'Detail',
        data(){
            return{
                value:1,
                pid: '',
                productData:{},
                isLike: false,
                // 购物车种类数量
                ShoppingcartCount:0,
                cantClick:true,
            }
        },
        created(){
            this.pid = this.$route.query.pid;
            this.GetProductDetail(this.pid);
            this.SearchLike(this.pid);
            this.SearchShopcart(this.pid)
        },
        methods: {
            Goback(){
                this.$router.go(-1);
            },
            GetProductDetail(pid){
                  //开启加载提示
                this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                    duration: 0
                });

                this.axios({
                    method: 'GET',
                    url: '/productDetail',
                    params: {
                        appkey: this.appkey,
                        pid
                    }
                }).then(result =>{
                    this.$toast.clear();
                    
                    if(result.data.code==600){
                        let reData = result.data.result[0]
                        reData.desc = reData.desc.split(/\n/);
                        
                        // 商品规格,加糖加奶等
                        let proRules = ['cream','milk','sugar','tem'];
                        
                        let productRules=[];
                        proRules.forEach(v=>{
                            let rules = {}
                            if(reData[v]!=''){
                                rules.title = reData[v+'_desc'];
                                rules.arr = []
                                let type = reData[v].split("/");

                                type.forEach((value,i)=>{
                                    let choose = {
                                        tag: value,
                                        isChoose: i==0?true:false
                                    }
                                    rules.arr.push(choose)
                                })
                                productRules.push(rules);
                            }
                        })
                        reData.rules = productRules;
                        this.productData = reData;
                        
                    }
                }).catch(err=>{
                   this.$toast.clear();
                    this.$toast.fail({
                        message: '加载失败...\n'+err,
                        forbidClick: true,

                        //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                        duration:1200
                    });
                    
                })
            },
            // 查询是否收藏
            SearchLike(pid){
                let tokenString = localStorage.getItem('__Tk');
                 this.axios({
                    method: 'GET',
                    url: '/findlike',
                    params: {
                        appkey: this.appkey,
                        pid,
                        tokenString
                    }
                }).then(result =>{
                    
                    if(result.data.code==1000){
                        this.isLike=result.data.result.length>0;
                        this.cantClick = false;
                    }else{
                        this.$toast.fail({
                            message: '查询失败\n请先登录',
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                        });
                       this.cantClick = true;
                    //    
                    }
                }).catch(err=>{
                    
                })
            },
            // 收藏或取消收藏
            LikeOrNotlike(){
                if(!this.cantClick){
                    let tokenString = localStorage.getItem('__Tk');

                    let url = this.isLike ? '/notlike':'/like'

                    this.axios({
                        method: 'POST',
                        url,
                        data: {
                            appkey: this.appkey,
                            pid: this.pid,
                            tokenString
                        }
                    }).then(result =>{
                        
                        // 800为收藏，900为取消
                        if(result.data.code==800||result.data.code==900){
                            this.isLike = result.data.code==800;
                            this.$toast(result.data.msg)
                        }
                    }).catch(err=>{
                        
                    })

                }else{
                    this.goLogin()
                }
            },
            // 跳转至登录页面
            goLogin(){
                this.$dialog.confirm({
                     title: '请先登录',
                     message: '你还没有登录,是否跳转至登录界面?',
                }).then(() => {
                    // 点击确定跳转至登录页面
                    this.$router.push({name:'Login'})
                }).catch(() => {
                                
                });
            },
            // 选择规格
            ChooseTag(item,v){
                if(v.isChoose){
                    return;
                }
                
                for(let k = 0; k<item.length;k++){
                    item[k].isChoose = false
                }
                v.isChoose = true;
            },

             // 查询购物车类别商品
            SearchShopcart(pid){
                let tokenString = localStorage.getItem('__Tk');
                 this.axios({
                    method: 'GET',
                    url: '/findAllShopcart',
                    params: {
                        appkey: this.appkey,
                        // pid,
                        tokenString
                    }
                }).then(result =>{
                    
                    if(result.data.code==5000){
                        this.ShoppingcartCount = result.data.result.length;
                    }
                }).catch(err=>{
                    
                })
            },
            // 跳转至购物车页面
            GoShopcart(){
                 if(!this.cantClick){
                    //  已经登录
                    this.$router.push({name: 'Shopcart'});
                }else{
                    // 没有登录
                    this.goLogin()
                }
            },
            // 加入购物车功能
            AddShopcart(isBuy){
                 if(!this.cantClick){
                    let tokenString = localStorage.getItem('__Tk');

                    //  
                    let rules = this.productData.rules
                    let rule = [];
                    // 查找激活的选项
                    rules.forEach(v=>{
                        for(let i = 0;i<v.arr.length;i++){
                            if(v.arr[i].isChoose){
                                rule.push(v.arr[i].tag)
                                break;
                            }
                        }
                    })
                    
                    
                    this.axios({
                        method: 'POST',
                        url: '/addShopcart',
                        data: {
                            appkey: this.appkey,
                            pid: this.pid,
                            tokenString,
                            count: this.value,
                            rule: rule.join('/'),
                        }
                    }).then(result =>{
                        
                        if(result.data.code==3000){
                             
                            if(result.data.status==1){
                                this.ShoppingcartCount++
                            }
                            if (isBuy === true) {
                                setTimeout(() => {
                                this.$router.push({name: 'Pay',  params: {sids: result.data.sid}});
                                }, 400)
                                return;
                            }
                            this.$toast(result.data.msg);
                            
                            //如果是立即购买, 先将商品加入到购物车，在跳转到结算页面(提交订单页面)
                           
                        }else{
                            this.$toast(result.data.msg);
                        }
                        
                    }).catch(err=>{
                        
                    })
                }else{
                    this.goLogin()
                }
            },
            // 立即购买
            GoBuy(){
                if(!this.cantClick){
                    //  this.$router.push({name: 'Pay', query: {sids: result.data.sid}});
                    let isBuy = true;
                    this.AddShopcart(isBuy)
                }else{
                    this.goLogin()
                }
            }

        },
    }
</script>