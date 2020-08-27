<template>
    <div class="EditAddress">
        <div class="editAddress-nav">
                <van-nav-bar
                    :title="aid?'编辑地址':'新增地址'"
                    left-text="返回"
                    left-arrow
                    @click-left="Goback"
                />
        </div>
        <div class="editAddress-body">
            <van-address-edit
                :area-list="areaList"
                :address-info="addressInfo"
                show-postal
                :show-delete="!!aid"
                show-set-default
                save-button-text="保存地址"
                :area-columns-placeholder="['请选择', '请选择', '请选择']"
                @save="onSave"
                @delete="onDelete"
            />
        </div>
    </div>
</template>

<script>
import '../assets/css/EditAddress.less'
// 导入地址数据
import areaList from '../assets/js/area'
    export default {
        name:'EditAddress',
         data() {
            return {
                areaList,
                aid:'',
                // 表单初始值
                addressInfo: {
                    //收货人
                    name: "",
                    //手机号
                    tel: "",
                    //省
                    province: "",
                    //城市
                    city: "",
                    //区县
                    county: "",
                    //详细地址
                    addressDetail: "",
                    //地区编号，地址选择
                    areaCode: "",
                    //邮编
                    postalCode: "",
                    //默认地址
                    isDefault: false
                }
            };
        },
        created(){
           this.aid = this.$route.params.aid;
        //    
           if(this.aid){
            //    如果有aid,表示进行编辑地址,初始化地址
                this.SearchAddress(this.aid)
           }
        },
         methods: {
             Goback(){
                this.$router.go(-1);
            },

            // 保存按钮
            onSave(address) {
                let tokenString = localStorage.getItem('__Tk');
                

                let data = {
                        appkey: this.appkey,
                        tokenString,
                        name: address.name,
                        tel: address.tel,
                        province: address.province,
                        city: address.city,
                        county: address.county,
                        addressDetail: address.addressDetail,
                        areaCode: address.areaCode,
                        postalCode: address.postalCode,
                        isDefault: Number(address.isDefault)
                    }

                // aid存在，则是修改数据
                if(this.aid){
                    // 查询地址是否有修改
                    let IsSame = true;
                    for(let key in this.addressInfo){
                        if(data[key]!=this.addressInfo[key]){
                            IsSame = false;
                            break;
                        }
                    }
                    if(IsSame){
                         this.$toast.success({
                            message: '保存成功',
                            forbidClick: true,
                            duration:800,
                            onClose: ()=>{
                                 this.$router.push({name:'MyAddress',params:{
                                             choose: 'ChooseAddress',
                                             sids:this.$route.params.sids
                                         }})
                            }
                        });
                       
                    }else{
                        data.aid = this.aid;
                         this.axios({
                            method: 'POST',
                            url: '/editAddress',
                            data
                    }).then(result =>{
                        this.$toast.clear();
                        
                        if(result.data.code==30000){
                            this.$toast.success({
                                message: '保存成功',
                                forbidClick: true,
                                duration:800,
                                onClose: ()=>{
                                    this.$router.push({name:'MyAddress',params:{
                                             choose: 'ChooseAddress',
                                             sids:this.$route.params.sids
                                         }})
                                   
                                }
                            });
                        } else{
                            this.$toast.fail({
                                message: result.data.msg,
                                forbidClick: true,
                                //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                                duration:2200,
                            });
                            // this.$router.push({name:'Login'})
                        }
                    }).catch(err=>{
                        this.$toast.clear();
                        
                        this.$toast.fail({
                                message: '修改失败\n'+err,
                                forbidClick: true,
                                //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                                duration:2200,
                            });
                            // this.$router.push({name:'Login'})
                    })
                    }

                }else{
                    // 否则，新增地址
                    
                    //开启加载提示
                    this.$toast.loading({
                        message: "加载中...",
                        forbidClick: true,
                        duration: 0
                    });

                    this.axios({
                        method: 'POST',
                        url: '/addAddress',
                        data
                    }).then(result =>{
                        this.$toast.clear();
                        
                        if(result.data.code==9000){
                            this.$toast.success({
                                message: result.data.msg,
                                forbidClick: true,
                                duration:1000,
                            });
                             if(this.$route.params.isPay){
                                         this.$router.push({name:'MyAddress',params:{
                                             choose: 'ChooseAddress',
                                             sids:this.$route.params.sids
                                         }})
                                    }else{
                                         this.$router.push({name:'MyAddress'})
                                }
                        } else{
                            this.$toast.fail({
                                message: result.data.msg,
                                forbidClick: true,
                                //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                                duration:2200,
                            });
                            // this.$router.push({name:'Login'})
                        }
                    }).catch(err=>{
                        this.$toast.clear();
                        
                        this.$toast.fail({
                                message: '新增失败\n'+err,
                                forbidClick: true,
                                //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                                duration:2200,
                            });
                            // this.$router.push({name:'Login'})
                    })
                }
            },
            // 删除按钮
            onDelete() {
                let tokenString = localStorage.getItem('__Tk');
                 //开启加载提示
                this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                    duration: 0
                });
                
                 this.axios({
                    method: 'POST',
                    url: '/deleteAddress',
                    data: {
                        appkey: this.appkey,
                        aid: this.aid,
                        tokenString
                    }
                }).then(result =>{
                    this.$toast.clear();
                    
                    if(result.data.code==10000){
                        this.$toast.success({
                            message: result.data.msg,
                            forbidClick: true,
                            duration:1000,
                        });
                        this.$router.go(-1);
                    } else{
                        this.$toast.fail({
                            message: result.data.msg,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                        });
                        // this.$router.push({name:'Login'})
                    }
                }).catch(err=>{
                    this.$toast.clear();
                    
                     this.$toast.fail({
                            message: '删除失败\n'+err,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                        });
                        // this.$router.push({name:'Login'})
                })
            },

            // 查询地址
            SearchAddress(aid){
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
                    url: '/findAddressByAid',
                    params: {
                        appkey: this.appkey,
                        aid,
                        tokenString
                    }
                }).then(result =>{
                    this.$toast.clear();
                    
                    if(result.data.code==40000){
                        this.$toast.success({
                            message: result.data.msg,
                            forbidClick: true,
                            duration:1000,
                        });
                        result.data.result[0].isDefault = Boolean(
                        result.data.result[0].isDefault
                        );
                        // 根据关键字存储数据
                        for (let key in this.addressInfo) {
                        this.addressInfo[key] = result.data.result[0][key];
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
            }
            

        },
    }
</script>

<style lang="less" scoped>

</style>