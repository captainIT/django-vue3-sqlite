import {get } from "./base";

// 登录方法
export function user(username: any, password: any,) {
  const data = {
    username,
    password,
  }
  return get('login',data)
}


