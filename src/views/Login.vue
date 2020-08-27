<template>
  <div class="Register">
      <van-nav-bar
        title="登录"
        left-text="注册"
        @click-left="Gopage('Register')"
     />
     <div class="logo_box">
       <img src="../assets/images/logo.png" alt="logo">
     </div>
     <van-form @submit="login">
       <div class="form_box" ref='form_box'>
          <van-field
           v-model="userInfo.phone"
            type="text"
            name="手机号"
            label="手机号"
            placeholder="请输入手机号"
            maxlength="11"
          >
               <template v-slot:left-icon>
                 <i class="fa fa-phone-square fa-fw fa-lg"></i>
              </template>
          </van-field>

           <van-field
            v-model="userInfo.password"
            :type="IsShow?'text':'password'"
            name="密码"
            label="密码"
            placeholder="请以字母开头(6-16位)"
            maxlength="16"
            @click-right-icon="showPas()"
          >
            <template v-slot:left-icon>
              <i class="fa fa-lock fa-fw fa-lg" ></i>
            </template>
            <template v-slot:right-icon>
              <i :class="['fa','fa-fw','fa-lg',!IsShow?'fa-eye-slash':'fa-eye']"></i>
            </template>
          </van-field>


          <div class="btn_box" >
            <van-button round block type="info" native-type="submit" >
              立 即 登 录
            </van-button>
            <div class="forgot" style="marginTop: 20px">
                <span class="fr" @click="Gopage('Forget')">忘记密码？</span>
            </div>
          </div>
       </div>
    </van-form>
  </div>
</template>

<script>
// 导入样式
import  '../assets/css/RegCss.less'
// 导入验证表单模块
import validForm from '../assets/js/validForm'
    export default {
         name: 'Login',
        data() {
            return {
                IsShow: false,
                 //用户注册信息
                userInfo: {
                    phone: '',
                    password: ''
                },
            }
        },
        methods: {
                    // 显示与隐藏密码
            showPas(){
                this.IsShow = !this.IsShow
            },
            // 页面跳转
            Gopage(name){
                this.$router.push({name})
            },

            login(){
                if(validForm.ValidFormFn(this.userInfo)){
                let data = Object.assign({}, this.userInfo);
                //请求密钥
                data.appkey = this.appkey;
                
                //开启加载提示
                this.$toast.loading({
                  message: '加载中...',
                  forbidClick: true,

                  //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                  duration:0
                });

                // 所有验证通过后，发起注册请求
                  this.axios({
                      method: 'POST',
                      url: '/login',

                      //post传递参数需要写在data
                      data
                    }).then(result => {
                        //关闭加载提示
                        this.$toast.clear();
                        
                        if (result.data.code == 200) {
                          
                          this.$toast.success({
                            message: '登录成功',
                            forbidClick: true,
                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:1200
                          });
                           //存储token，用于后面登录验证
                            localStorage.setItem('__Tk', result.data.token);
                          //跳转到菜单
                          this.$router.push({name: 'Homepage'});

                        } else {
                          this.$toast(result.data.msg);
                        }
                  }).catch(err => {
                        //关闭加载提示
                        this.$toast.clear();
                         this.$toast.fail({
                            message: '注册失败...\n'+err,
                            forbidClick: true,

                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:1200
                          });
                        
                  })
 
                }
           }
        },
    }
</script>

<style lang="less" scoped>

</style>