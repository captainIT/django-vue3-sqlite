<script setup lang="ts">
import {onMounted, ref} from 'vue'
import { useCounterStore } from "@/stores/counter";
import {baseAxios} from "@/api/base";
import router from "@/router";

// 响应式状态
const counter = useCounterStore()

const open = () => {
  ElMessage('this is a message.')
}

const question=ref([123,345])

// 生命周期钩子
onMounted(() => {
    baseAxios.post('/polls/list')
    .then(function (response) {
      console.log(response);
      question.value=response.data.result
    })
    .catch(function (error) {
      console.log(error);
    });
})
</script>
<template>
  <div >
    <h1>{{$t('Data')}} </h1>
    <div v-for="(item, index) in question" class="mb-[20px] flex items-center">
      <div class="mr-[10px]"><span>{{index+1}}:</span>{{item}}</div>
       <div class="mr-[10px]"><span>得票数:</span>{{counter.count}}</div>
       <el-button @click="counter.increment" >投票</el-button>

    </div>
     <el-button @click="open">elMessage</el-button>
  </div>
</template>

<style>

</style>
