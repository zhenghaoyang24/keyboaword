<script setup lang="ts">
import type {PropType} from "vue";

enum BtnType {
  WARN = 'warn',
  SUCCESS = 'success',
  ERROR = 'error'
}
enum BtnGrade {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third'
}
const props = defineProps({
  grade:{
    type:String as PropType<BtnType>,
    required:true,
  },
  type:{
    type:String as PropType<BtnGrade>,
    required:true,
  }
})

</script>

<template>
  <div class="btn">
    <slot name="btnValue"></slot>
  </div>

</template>

<style scoped>
.btn{
  display: flex;
  justify-content: center;
}
</style>
