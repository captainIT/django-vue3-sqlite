<template>
  <div class="sideBar">
    <MenuItem
      v-for="n in menus"
      v-bind="n"
      v-model:selectedMenu="selectedMenu"
    ></MenuItem>
  </div>
</template>

<script setup>
// Data: '数据',
//   Labeling: '标注',
//   Model: '模型',

import { ref } from "vue";

const menus = [
  { selected: false, name: "Data", route: "/data", testKey: 1 },
  //   , {
  //   selected: false,
  //   name: "Labeling",
  //   route: "/labeling",testKey:2,
  //
  // }, { selected: true, name: "Model", route: "/model",testKey:3 }
];

const selectedMenu = ref(1);
</script>

<style scoped lang="scss">
.sideBar {
  margin-top: 60px;
  padding-top: 20px;
}
</style>
