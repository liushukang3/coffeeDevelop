import { Toast } from 'vant';
class ValidForm {
    constructor() {
        this.validFromObj = {
            //昵称， 1-10个字符, 汉字字母数字_组合
            nickName: {
                reg: /^[\u4e00-\u9fa5\w]{1,10}$/,
                msg: '用户名格式不正确'
            },

            //手机号
            phone: {
                reg: /^1[3-9]\d{9}$/,
                msg: '手机号格式不正确'
            },

            //密码
            password: {
                reg: /^[a-zA-Z]\w{5,15}$/,
                msg: '密码格式不正确'
            },
            oldPassword: {
                reg: /^[a-zA-Z]\w{5,15}$/,
                msg: '密码格式不正确'
            },
            //邮箱
            email: {
                reg: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                msg: '邮箱格式不正确'
            },

            //6位数字验证码
            code: {
                reg: /^\d{6}$/,
                msg: '验证格式正确'
            }
        }
    }

    ValidFormFn(obj) {
        // obj 表单类型数据 object
        for (let k in obj) {
            // 正则验证不通过
            if (!this.validFromObj[k].reg.test(obj[k])) {
                Toast(this.validFromObj[k].msg)
                return false;
            }
        }
        // 表单通过
        return true
    }
}

export default new ValidForm()