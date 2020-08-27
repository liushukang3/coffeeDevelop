<template>
    <div class="SafeCenter">
         <div class="SafeCenter-nav">
            <van-nav-bar 
                title="安全中心" 
                left-text="返回"
                left-arrow 
                @click-left="Goback" 

            />
        </div>
        <div class="SafeCenter-nav">
            <div class="list-box">
                <van-cell-group>
                    <van-cell title="修改密码" is-link @click="changePas" />
                    <van-cell title="注销账号" is-link @click="destroy" />
                    <van-cell title="退出登录" is-link @click="LoginOut" />
                </van-cell-group>
            </div>
            <van-popup v-model="isOpen" position="bottom">
                <div class="v-popup" style="padding:20px">
                    <van-form @submit="commit">
                    <van-field v-model="passwordData.oldPassword" label="旧密码" placeholder="旧密码" />
                    <van-field v-model="passwordData.password" type="text" label="新密码" placeholder="新密码" />
                    <div class="btn-box" style="margin-top:20px">
                        <van-button round block type="info" native-type="submit">提交</van-button>
                    </div>
                    </van-form>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>
import '../assets/css/SafeCenter.less';
import validForm from "../assets/js/validForm";
    export default {
        name:'SafeCenter',
        data(){
            return{
                isOpen: false,
                passwordData: {
                    oldPassword: "",
                    password: ""
                }
            }
        },
        created () {
            if (!localStorage.getItem('__Tk')) {
                this.$toast.fail({
                         message: '还没有登录\n正在跳转至登录页面',
                        forbidClick: true,
                        //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                         duration:1200,
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
            // 退出登录
            LoginOut(){
                localStorage.removeItem("__Tk");
                this.$router.push({ name: "Login"});
            },

            //显示修改密码框
            changePas() {
                this.isOpen = true;
            },

            //修改密码
            commit() {
                if (!validForm.ValidFormFn(this.passwordData)) {
                    return;
                }

                let tokenString = localStorage.getItem("__Tk");

                this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    duration: 0
                });

                this.axios({
                    method: "POST",
                    url: "/updatePassword",
                    data: {
                    appkey: this.appkey,
                    tokenString,
                    //新的密码
                    password: this.passwordData.password,
                    //旧密码
                    oldPassword: this.passwordData.oldPassword
                    }
                })
                    .then(result => {
                    this.$toast.clear();
                    
                    //关闭修改密码弹出框
                    this.isOpen = false;
                    if (result.data.code == "E001") {
                        //清除token
                        localStorage.removeItem("__Tk");
                        this.$router.push({ name: "Login" });
                    } else {
                        this.$toast(result.data.msg);
                    }
                    })
                    .catch(err => {
                    this.$toast.clear();
                    
                    });
            },
            //注销
            destroy() {
                this.$dialog.confirm({
                        title: "注销账号",
                        message: "一旦注销，数据无法恢复"
                    }).then(() => {
                            // on confirm
                            //确定 发起注销请求
                            let tokenString = localStorage.getItem("__Tk");

                            this.$toast.loading({
                                message: "加载中...",
                                forbidClick: true,
                                duration: 0
                            });

                            this.axios({
                                method: "POST",
                                url: "/destroyAccount",
                                data: {
                                appkey: this.appkey,
                                tokenString
                                }
                            })
                            .then(result => {
                                this.$toast.clear();
                            
                                if (result.data.code == 'G001') {
                                    //清除token
                                    localStorage.removeItem('__Tk');
                                    this.$router.push({name: 'Login'});
                                } else {
                                    this.$toast(result.data.msg);
                                    this.$toast.fail({
                                        message: result.data.msg,
                                        forbidClick: true,

                                        //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                                        duration:1200
                                    });
                                }
                            }).catch(err => {
                                this.$toast.clear();
                                
                            });
                }).catch(err => {
                    
                });
            }
        }
    }
</script>