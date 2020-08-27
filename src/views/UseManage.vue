<template>
    <div class="UserManage">
        <div class="UserManage-nav">
            <van-nav-bar title="个人中心" left-text="返回" left-arrow @click-left="Goback" />
        </div>
        <div class="UserManage-body">
            <van-cell-group>
                <van-cell class="v-cell" title="头像">
                    <div class="clearfix">
                    <div class="fr user-img">
                        <img class="auto-img" :src="userData.userImg" alt />
                        <van-uploader class="upload-box" :after-read="uploadFile" />
                    </div>
                    </div>
                </van-cell>
                <van-cell class="v-cell" title="用户id" :value="userData.userId"></van-cell>
                <van-cell class="v-cell" title="手机号" :value="userData.phone"></van-cell>
                <van-cell class="v-cell" title="昵称">
                    <div class="clearfix">
                    <div class="fr">
                        <van-field @blur="updateuserData({key: 'nickName', value: userData.nickName, url: '/updateNickName'})" class="v-filed" v-model="userData.nickName" input-align="right" />
                    </div>
                    </div>
                </van-cell>
                <van-cell>
                    <div class="clearfix">
                    <div class="fl v-cell-text">简介</div>
                    <div class="fl v-cell-textarea">
                        <textarea @change="updateuserData({key: 'desc', value: userData.desc, url: '/updateDesc'})" class="textarea" v-model="userData.desc"></textarea>
                    </div>
                    </div>
                </van-cell>
            </van-cell-group>
        </div>
    </div>
</template>

<script>
import '../assets/css/UserManage.less'
    export default {

        name:'UserManage',
        data() {
            return {
                 userData: {}
            }
        },
        created(){
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
            this.getuserData()
        },
        methods: {
             Goback(){
                this.$router.go(-1);
            },

            // 获取账号信息
            getuserData() {
                let tokenString = localStorage.getItem("__Tk");

                this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    duration: 0
                });

                this.axios({
                    method: "GET",
                    url: "/findAccountInfo",
                    params: {
                    appkey: this.appkey,
                    tokenString
                    }
                })
                .then(result => {
                    this.$toast.clear();
                    
                    if (result.data.code == "B001") {
                        this.userData = result.data.result[0];
                        this.$toast.success({
                            message: result.data.msg,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:1200,
                        });
                    }else{
                         this.$toast.fail({
                            message: result.data.msg,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                        });
                    }
                })
                .catch(err => {
                     this.$toast.clear();
                     this.$toast.fail({
                            message: err,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:2200,
                        });
                });
            },

            //获取上传头像
            uploadFile(file) {
                //获取图片base64
                let serverBase64Img = file.content.replace(/^data:image\/[A-Za-z]+;base64,/, '');
                //获取图片类型
                let imgType = file.file.type.split('/')[1];

                let tokenString = localStorage.getItem("__Tk");

                this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    duration: 0
                });

                this.axios({
                        method: "POST",
                        url: "/updateAvatar",
                        data: {
                        appkey: this.appkey,
                        tokenString,
                        imgType,
                        serverBase64Img,
                    }
                })
                .then(result => {
                this.$toast.clear();
                if (result.data.code == 'H001') {
                    this.$toast.success({
                                    message: result.data.msg,
                                    forbidClick: true,
                                    //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                                    duration:1200,
                                });
                    this.userData.userImg = result.data.userImg;

                } else {
                    this.$toast(result.data.msg);
                }
                
                })
                .catch(err => {
                this.$toast.clear();
                this.$toast(err);
                });
            },

            //修改昵称, 简介
            updateuserData(obj) {
                let tokenString = localStorage.getItem("__Tk");

                this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    duration: 0
                });

                this.axios({
                    method: "POST",
                    url: obj.url,
                    data: {
                    appkey: this.appkey,
                    tokenString,
                    [obj.key]: obj.value
                    }
                }).then(result => {
                    this.$toast.clear();
                    
                    }).catch(err => {
                    this.$toast.clear();
                    
                    });
            },
        }
    }
</script>

<style lang="less" scoped>

</style>