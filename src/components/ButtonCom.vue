<script setup lang="ts">
import type {PropType} from "vue";

const props = defineProps({
  grade:{
    type:String,
    required:true,
  },
  type:{
    type:String,
    required:true,
    validator(value, props) {
      // The value must match one of these strings
      return ['success', 'warning', 'error'].includes(value)
    }
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
