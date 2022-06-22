import request from "./request";

// 登录验证
export function login(phone, captcha) {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      captcha
    }
  })
}

// 发送验证码到手机
export function sendVerifyCode(phone){
  return request({
    url: '/captcha/sent',
    params: {
      phone
    }
  })
}