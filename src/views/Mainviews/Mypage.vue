<template>
    <div class="Mypage">
        <div class="mypage-top" :style="{'backgroundImage': 'url(' +  userData.userBg + ')'}">
            <div class="changBg" >
                <van-uploader  v-if="IsLogin" max-count='1' :max-size='maxSize' @oversize="onOversize" :after-read="afterBgRead"  accept="image/*"/>
            </div>
            <div class="user-box" v-if="IsLogin">
                <div class="left fl">
                        <div class="headerImg" :style="{'backgroundImage': 'url(' + userData.userImg + ')'}"></div>
                </div>
                <div class="right fl">
                    <div class="user-Nickname">{{userData.nickName}}</div>
                    <div class="user-sign">{{userData.desc||'鉴定完毕,没空写简介的大忙人一名'}}</div>
                </div>
            </div>
            <div class="NotLogin user-box" v-else>
                <div class="left fl">
                    <div class="headerImg" :style="{'backgroundImage': 'url(' + userData.userImg + ')'}"></div>
                </div>
                <div class="fl" @click="GoPage('Login')">登 录</div>
            </div>
        </div>
        <div class="mypage-box">
            <van-cell :title="item.title" is-link v-for="item in vanCell" :key="item.name" @click="GoPage(item)"/>
        </div>
    </div>
</template>

<script>
import '../../assets/css/MypageCss.less'
    export default {
        name:'Mypage',
        data() {
            return {
                vanCell:[
                    {title:'账号管理',name:'UseManage'},
                    {title:'地址管理',name:'MyAddress'},
                    {title:'我的收藏',name:'Collection'},
                    {title:'安全中心',name:'SafeCenter'},
                ],
                maxSize: 1.5*1024 * 1024,
                userData:{},
                IsLogin: false
            }
        },

        created(){
            this.findAccountInfo();
            
        },

        methods: {
            GoPage(item){

                if(item.name && this.IsLogin){
                    this.$router.push({name:item.name})
                }else{
                    if(item=='Login'){
                        this.$router.push({name:'Login'})
                    }else{
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
                }
                
            },
            // 获取用户信息
            findAccountInfo(){
                this.$toast.loading({
                     message: '加载中',
                     forbidClick: true,
                     duration:2200,
                });
                this.IsLogin = false;
                let tokenString = localStorage.getItem('__Tk');
                 this.axios({
                    method: 'GET',
                    url: '/findMy',
                    params: {
                        appkey: this.appkey,
                        tokenString
                    }
                }).then(result =>{
                     this.$toast.clear();
                     
                    if(result.data.code=='A001'){
                         this.$toast.success({
                            message: result.data.msg,
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:800,
                             onClose: ()=>{
                                this.IsLogin = true;
                            }
                        });
                        this.userData = result.data.result[0];
                        
                        this.userData.userBg=result.data.result[0].userBg?result.data.result[0].userBg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594390861340&di=a81e66bcb3c0504ea4e25727705357c5&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F8b4d0240gw1faxdf8twqzj21gs0ypdkg.jpg';

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

            onOversize(file) {
                
                    this.$toast('文件大小不能超过 1.5M');
                    // return false;
            },
            // 上传完成
            afterBgRead(file){
                
                //获取图片base64
                let serverBase64Img = file.content.replace(/^data:image\/[A-Za-z]+;base64,/, '');

                //获取图片类型
                let imgType = file.file.type.split('/')[1];

                let tokenString = localStorage.getItem("__Tk");
                
                this.axios({
                    method: "POST",
                    url: "/updateUserBg",
                    data: {
                        appkey: this.appkey,
                        tokenString,
                        imgType,
                        serverBase64Img,
                    }
                })
                .then(result => {
                    
                    if (result.data.code == 'I001') {
                        this.userData.userBg = result.data.userBg;

                         this.$toast(result.data.msg);
                         this.$forceUpdate()
                    } else {
                        this.$toast(result.data.msg);
                    }
                })
                .catch(err => {
                        this.$toast.clear();
                });
            }
        },

    }
</script>