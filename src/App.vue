<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SetComIcon from "@/components/icons/SetComIcon.vue";
import ButtonCom from "@/components/ButtonCom.vue";
</script>

<template>
  <header>
      <nav class="navbar space-between-x">
        <div class="navbar-icon">
          w
        </div>
        <div class="navbar-ctrl space-between-x p-box-shadow">
          <ButtonCom :type="BtnType.SUCCESS" :grade="BtnGrade.THIRD">
            <template #btnValue>
              <SetComIcon></SetComIcon>
            </template>
          </ButtonCom>
        </div>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

.navbar {

  padding: 10px;
}
.navbar-ctrl{

}

</style>
