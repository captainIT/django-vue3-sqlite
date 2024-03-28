<script setup lang="ts">
import { onMounted } from 'vue'
import { useCounterStore } from "@/stores/counter";

// 响应式状态
const counter = useCounterStore()

// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}
const open = () => {
  ElMessage('this is a message.')
}

// 生命周期钩子
onMounted(() => {
})
</script>
<template>
  <div >
    <h1>{{$t('Labeling')}} </h1>
    <el-button @click="counter.increment">I am ElButton</el-button>
    <el-button @click="open">elMessage</el-button>

    <div>{{counter.count}}</div>
  </div>
</template>

<style>

</style>
