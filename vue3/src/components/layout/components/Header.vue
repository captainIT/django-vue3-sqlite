<template>
  <div class="header">
    <div class="top">
      <a class="logo" href="/about" title="234">
        <img width="32" height="32" :src="logo" />
        <h3 class="name">{{ $t("LogoName") }}</h3>
      </a>
      <div style="flex-grow: 1"></div>

      <div class="language">
        <el-link type="primary" @click="goCropper">{{
          $t("cropperTool")
        }}</el-link>
      </div>
      <div class="language">
        <el-link type="primary" @click="changeLanguage">{{
          languageTxt
        }}</el-link>
      </div>
      <div>
        <div
          class="right"
          v-popover="popoverRef"
          v-click-outside="onClickOutside"
        >
          <span class="userName">test</span>
          <el-avatar :size="30"> L </el-avatar>
          <el-popover
            ref="popoverRef"
            trigger="hover"
            width="10px"
            virtual-triggering
            persistent
          >
            <div style="text-align: center">
              <el-link type="primary" @click="logout">退出</el-link>
            </div>
          </el-popover>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "@/assets/logo.svg";
import { onMounted, ref, unref } from "vue";
import { Language } from "@/model/enum";
import { ClickOutside as vClickOutside } from "element-plus";
import router from "@/router";

const languageTxt = ref("");
const changeLanguage = () => {
  languageTxt.value =
    languageTxt.value === Language.zh ? Language.en : Language.zh;
  localStorage.setItem("lang", languageTxt.value);
  window.location.reload();
};
onMounted(() => {
  languageTxt.value = localStorage.getItem("lang");
});

const popoverRef = ref();
const toolsPopoverRef = ref();
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.();
};
const logout = () => {
  localStorage.removeItem("token");
  router.replace("/login");
};

const goCropper = () => {
  router.push("/cropperTools");
};
</script>

<style scoped lang="scss">
.header {
  z-index: 1200;
  display: flex;
  position: fixed;

  width: 100%;
  box-shadow: 0px 8px 24px rgba(0, 53, 133, 0.1);
  background-color: #fff;
  padding: 0px 16px 0px 16px;

  .top {
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 60px;
    height: 60px;
    .logo {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      margin-right: 10px;
      border-radius: 50px;
      padding: 8px;
      .name {
        margin: 0;
        color: #0c64cd;
        margin-left: 12px;
        white-space: nowrap;
        font-size: 16px;
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        line-height: 1.167;
        letter-spacing: 0em;
      }
    }
    .logo:hover {
      background: rgba(0, 0, 0, 0.04);
    }
    .right {
      margin-right: 50px;
      color: #051221;
      border: 1px solid #e6e7e9;
      padding: 6px 8px;
      border-radius: 10px;
      align-items: center;
      .userName {
        cursor: pointer;
        padding-left: 6px;
        padding-right: 10px;
        margin-right: 2px;
        font-size: 14px;
        font-family: Nunito Sans, sans-serif;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: 0.00938em;
      }
    }
    .right:hover {
      cursor: pointer;
    }
    .language {
      margin-right: 20px;
    }
    .language:hover {
      cursor: pointer;
    }
  }
}
</style>
