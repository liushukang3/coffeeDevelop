<template>
    <div class="main">
        <div class="main-body">
            <router-view></router-view>
        </div>
        <div class="main-bottom">
            <van-tabbar v-model="navActive" active-color="#1d807b" inactive-color="#666666" @change="onChange" >
                <van-tabbar-item :name="item.Routename" v-for="(item,index) in navData" :key="index" :class="{'isActive':item.isActive}">
                    <span>{{item.title}}</span>
                    <template v-slot:icon>
                        <i :class="['fa','fa-fw',item.className]"></i>
                    </template>
                </van-tabbar-item>

            </van-tabbar>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Main',
         data() {
            return {
                navActive: '',
                navData: [
                    {title:'首页',Routename:'Homepage',className:'fa-home', isActive: true},
                    {title:'购物车',Routename:'Shopcart',className:'fa-shopping-cart',isActive: false},
                    {title:'订单',Routename:'Order',className:'fa-file-text f-order',isActive: false},
                    {title:'我的',Routename:'Mypage',className:'fa-user',isActive: false},
                ]
            };
        },
        // 解决刷新时路径与激活块不对应的问题
        created() {
            let url = location.hash;
            let urlarr = url.split("/");
            let name = urlarr[urlarr.length-1];
            this.navActive = name.slice(0,1).toUpperCase() + name.slice(1);
            for(let i=0;i<this.navData.length;i++){
                 this.navData[i].isActive = false;
                 if(name.toLowerCase()==this.navData[i].Routename.toLowerCase()){
                      this.navData[i].isActive = true;
                      continue;
                 }
            }
        },
        methods: {
            // 切换页面
            onChange(name){
                for(let k=0; k<this.navData.length; k++){ 
                    this.navData[k].isActive = false;
                    if(this.navData[k].Routename==this.navActive){
                         this.navData[k].isActive = true;
                         this.navActive = name;
                         this.$router.push({name: this.navActive});
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .main {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        .main-body{
            height: calc(~ "100% - 50px");
            background-color: #eeeeee66;
        }
        .main-bottom {
            height: 50px;
            .f-order{
                font-size: 16px;
            }
            .isActive {
                transform: scale(1.1);
                transition: all 0.3s;
            }
        }

    }
</style>