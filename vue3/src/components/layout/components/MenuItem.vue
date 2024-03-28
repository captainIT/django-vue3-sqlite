<template>
  <div class="menuItem" :class="[testKey===selectedMenu?'selected':'',menuItem]" @click="goMenu">
    <el-icon>
      <Coin />
     <component :is="Coin" style="width: 20px;height: 20px"></component>
    </el-icon>

    <div class="name">  {{$t(name)}} </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import router from "../../../router";

const props = defineProps({
  iconLink: String,
  name: String,
  route:String,
  testKey:Number,
  selectedMenu:Number
});

const emit = defineEmits(["changeMenu"]);

const goMenu=()=>{
  router.push(props.route)
  emit('update:selectedMenu', props.testKey)
}

onMounted(()=>{
   console.log(props)
})
</script>

<style scoped lang="scss">
.menuItem{
  text-align: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  .name{
    font-weight: 700;
    font-size: 12px;
  }
}
.menuItem:hover{
  background-color: rgba(0, 0, 0, 0.04);
}
.selected{
  background-color: #0C64CD1A !important;
}

</style>