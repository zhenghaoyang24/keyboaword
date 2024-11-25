<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="navbar space-between-x">
        <div class="navbar-icon">
          w
        </div>
        <div class="navbar-ctrl space-between-x p-box-shadow">


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
