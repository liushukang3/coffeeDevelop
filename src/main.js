import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

//导入font-awesome字体图标库
import 'font-awesome/css/font-awesome.min.css'

//导入vant框架
import {
    NavBar,
    Form,
    Field,
    Button,
    Toast,
    Tabbar,
    TabbarItem,
    Icon,
    Swipe,
    SwipeItem,
    Lazyload,
    Sidebar,
    SidebarItem,
    Image as VanImage,
    Sticky,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    Skeleton,
    Stepper,
    List,
    AddressList,
    Dialog,
    AddressEdit,
    Empty,
    Card,
    Checkbox,
    CheckboxGroup,
    Tab,
    Tabs,
    SwipeCell,
    SubmitBar,
    ActionSheet,
    Uploader,
    Cell,
    CellGroup,
    Popup
} from 'vant'

//导入用于设置 rem 基准值模块
import 'lib-flexible'

//注册vant框架的组件
Vue
    .use(NavBar)
    .use(Form)
    .use(Field)
    .use(Button)
    .use(Toast)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Icon)
    .use(Swipe)
    .use(SwipeItem)
    .use(Lazyload)
    .use(Sidebar)
    .use(SidebarItem)
    .use(VanImage)
    .use(Sticky)
    .use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton)
    .use(Skeleton)
    .use(Stepper)
    .use(List)
    .use(AddressList)
    .use(Dialog)
    .use(AddressEdit)
    .use(Empty)
    .use(Card)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Tab)
    .use(Tabs)
    .use(SwipeCell)
    .use(SubmitBar)
    .use(ActionSheet)
    .use(Uploader)
    .use(Cell)
    .use(CellGroup)
    .use(Popup)

//注册axios
Vue.use(VueAxios, axios)
    //配置请求基础路径
axios.defaults.baseURL = 'http://www.kangliuyong.com:10002'

//配置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

//发起请求之前处理data
axios.interceptors.request.use(config => {
    if (config.method == 'post') {
        let paramsString = '';
        //post请求参数序列化，转成一个字符串
        for (let key in config.data) {
            paramsString += key + '=' + config.data[key] + '&'
        }
        config.data = paramsString.slice(0, -1);
    }

    return config;

})

// 关闭生产环境提示
Vue.config.productionTip = false

//添加appkey属性保存appkey(密钥)
Vue.prototype.appkey = 'U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=';


//全局过滤器 格式化时间
Vue.filter('formatDate', (value, format) => {
    //value: 2020-07-08T02:40:51.000Z
    //format: yyyy-MM-dd hh:mm:ss
    let current = new Date(value);

    //获取年份
    let year = current.getFullYear();

    if (/(y+)/.test(format)) {
        //获取匹配组的内容
        let yearContent = RegExp.$1;


        format = format.replace(yearContent, year);
    }

    //处理月日时分秒
    let dateObject = {
        M: current.getMonth() + 1,
        d: current.getDate(),
        h: current.getHours(),
        m: current.getMinutes(),
        s: current.getSeconds()
    };

    for (let key in dateObject) {
        //创建动态正则表达式
        let reg = new RegExp(`(${key}+)`)

        if (reg.test(format)) {
            //获取匹配组的内容, RegExp.$n必须需要test验证通过可以获取
            let content = RegExp.$1;


            //控制补零
            let value = dateObject[key] >= 10 ? dateObject[key] : content.length == 2 ? '0' + dateObject[key] : dateObject[key];
            format = format.replace(content, value);
        }
    }

    return format;
})



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')