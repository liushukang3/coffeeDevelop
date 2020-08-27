<template>
    <div class="MyAddress">
         <div class="MyAddress-nav">
                <van-nav-bar
                    title="我的地址"
                    left-text="返回"
                    left-arrow
                    @click-left="Goback"
                />
        </div>
        <div class="emptyAddress" v-if="AddressList.length==0">

        </div>
        <van-address-list
            v-model="chosenAddressId"
            :list="AddressList"
            default-tag-text="默认"
            @add="editAddress"
            @edit="editAddress"
            @select="Choose"
        />
    </div>
</template>

<script>
import '../assets/css/MyAddress.less'
    export default {

        name: 'MyAddress',
        data() {
            return {
                chosenAddressId: 0,

                AddressList:[],

                isPay: false
            }
        },
        created() {
             this.SearchAddress();
             if(this.$route.params.choose){
                 this.isPay = true;
             }
        },
        methods: {
             Goback(){
                this.$router.go(-1);
            },
            Choose(item){
                this.chosenAddressId = item.id
                if(this.isPay){
                    this.$router.push({name:'Pay',params:{
                            aid:this.chosenAddressId,
                            sids:this.$route.params.sids
                        }
                    })
                 }
            },
            // 获取地址
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
                            }
                            this.AddressList.push(obj)
                        })
                        

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
            // 编辑/新增地址
            editAddress(address){
                
                let o = {
                    name: 'EditAddress',
                    params: {
                        isPay: this.isPay,
                        sids:this.$route.params.sids
                    }
                }
                if(address){
                    o.params.aid=address.id
                    
                }
                this.$router.push(o);
            }
        },
    }
</script>
