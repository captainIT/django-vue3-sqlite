<template>
  <div class="login-container">
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16">
        <div style="color: transparent">占位符</div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-form
          :model="form"
          class="login-form"
        >
          <div class="title">hello !</div>
          <div class="title-tips">欢迎来到{{ title }}！</div>
          <el-form-item style="margin-top: 40px" prop="username">
            <el-input
              v-model="form.username"
              placeholder="请输入用户名"
              tabindex="1"
              type="text"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :key="passwordType"
              v-model.trim="form.password"
              :type="passwordType"
              tabindex="2"
              placeholder="请输入密码"
              @keyup.enter.native="handleLogin"
            />

          </el-form-item>
          <el-button
            :loading="loading"
            class="login-btn"
            type="primary"
            @click="handleLogin"
          >
            登录
          </el-button>
          <router-link to="/register">
            <div style="margin-top: 20px">注册</div>
          </router-link>
        </el-form>

      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import router from "../../router";
import { baseAxios } from "../../api/base";


const form=reactive({username:"",password:""})

const title="平台"
const passwordType="password"
const loading=ref(false)

const handlePassword=()=>{
}
const handleLogin=()=>{
  baseAxios.post('/mock/login', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
    .then(function (response) {
      console.log(response);
      localStorage.setItem("token","123-999")
      router.replace("/data")
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>

<style lang="scss" scoped>
  .login-container {
    height: 100vh;
    background: url('@/assets/login_images/background.jpg') center center fixed
      no-repeat;
    background-size: cover;

    .title {
      font-size: 54px;
      font-weight: 500;
      color: rgba(14, 18, 26, 1);
    }

    .title-tips {
      margin-top: 29px;
      font-size: 26px;
      font-weight: 400;
      color: rgba(14, 18, 26, 1);
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .login-btn {
      display: inherit;
      width: 220px;
      height: 60px;
      margin-top: 5px;
      border: 0;

      &:hover {
        opacity: 0.9;
      }
    }

    .login-form {
      margin: calc((100vh - 425px) / 2) 10% 10%;
    }

    .tips {
      margin-bottom: 10px;
      font-size: $base-font-size-default;
      color: $base-color-white;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .title-container {
      position: relative;

      .title {
        margin: 0 auto 40px auto;
        font-size: 34px;
        font-weight: bold;
        color: $base-color-blue;
        text-align: center;
      }
    }
      .el-input {
          height: 58px;
          font-size: $base-font-size-default;
          line-height: 58px;
          color: $base-font-color;
          background: #f6f4fc;
          border: 0;
          caret-color: $base-font-color;
      }
  }
</style>
