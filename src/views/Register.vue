<template>
  <div class="Register">
      <van-nav-bar
        title="注册"
        left-text="登录"
        right-text="关闭"
        @click-left="Gopage('Login')"
        @click-right="Gopage('Homepage')"
     />
     <div class="logo_box">
       <img src="../assets/images/logo.png" alt="logo">
     </div>
     <van-form @submit="register">
       <div class="form_box" ref='form_box'>
           <van-field
            v-model="userInfo.nickName"
          type="text"
          name="用户名"
          label="用户名"
          placeholder="支持数字字母下划线(1-10位)"
          maxlength="10"
          >
              <template v-slot:left-icon>
                <i class="fa fa-user fa-fw fa-lg"></i>
              </template>
          </van-field>

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

          <van-field
            type="text"
            name="验证码"
            label="验证码"
            placeholder="请输入验证码"
            v-model="code"
            maxlength="4"
          >
            <template v-slot:left-icon>
             <i class="fa fa-envelope fa-fw fa-m"></i>
            </template>
            <template v-slot:extra >
              <!--验证码组件-->
               <div @click="refreshCode" class="code-box">
                 <s-identify :identifyCode="identifyCode"></s-identify>
               </div>
            </template>
          </van-field>

          <div class="btn_box">
            <van-button round block type="info" native-type="submit" >
              立 即 注 册
            </van-button>
          </div>
       </div>
    </van-form>
  </div>
</template>

<script>


// 导入样式
import  '../assets/css/RegCss.less'
// 导入验证码组件
import SIdentify  from '../components/sidentify'
// 导入验证表单模块
import validForm from '../assets/js/validForm'

export default {
  name: 'Register',
  components: {
    SIdentify
  },
  data() {
    return {
       //用户注册信息
      userInfo: {
          nickName: '',
          phone: '',
          password: ''
      },
      IsShow: false,
      // 验证码范围
      identifyCodes: "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz",
      identifyCode: "",
      code:"",//text框输入的验证码
    }
  },
  mounted(){
     this.identifyCode = "";
     this.makeCode(this.identifyCodes, 4);
      
      let inputs = document.querySelectorAll('.van-field__control')
      for(let i = 0;i<inputs.length; i++){
        inputs[i].autocomplete="off"
      }
      
  },
  created(){
    this.refreshCode();
   
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
      // 随机数
      randomNum(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
      },
      // 刷新验证码  
      refreshCode() {
          this.identifyCode = "";
          this.makeCode(this.identifyCodes, 4);
      },
      // 生成验证码
      makeCode(o, len) {
          for (let i = 0; i < len; i++) {
              this.identifyCode += this.identifyCodes[
                this.randomNum(0, this.identifyCodes.length)
              ];
          }
          
      },
      // 注册
      register(){
        // 表单验证通过
        if(validForm.ValidFormFn(this.userInfo)){
          if(this.code.trim().toLowerCase()==this.identifyCode.toLowerCase()){
                //复制对象 (两层以下深拷贝)
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
                      url: '/register',

                      //post传递参数需要写在data
                      data
                    }).then(result => {
                        //关闭加载提示
                        this.$toast.clear();
                        if (result.data.code == 100) {
                          //跳转到登录页面
                          this.$toast.success({
                            message: '注册成功,已自动跳转至登录页面...',
                            forbidClick: true,

                            //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                            duration:1200
                          });
                          this.$router.push({name: 'Login'});

                        } else {
                          this.$toast(result.data.msg);
                          this.code ='';
                          this.userInfo.nickName ='';
                          this.userInfo.phone ='';
                          this.userInfo.password ='';

                          this.refreshCode();
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
          }else{
            this.$toast({
              message: '验证码不正确'
            });
            this.code ='';
            this.refreshCode();
          }
        }
      }
  },
} 
</script>
<style lang="less">

</style>
