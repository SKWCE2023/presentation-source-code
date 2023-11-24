<template>
  <div>
    <div class="home-screen">
      <div class="nav-tray">
        <div class="nav-option" @click="openKCloseHome()">
          <folder-open
            v-if="isHomeOpen"
            :style="`--element-color: #c7c7bb`"
          ></folder-open>
          <folder-close
            v-else
            :style="`--element-color: #c7c7bb`"
          ></folder-close>
          <p class="nav-title">Home</p>
        </div>
      </div>
    </div>
    <HomeModal v-if="isHomeOpen" />
  </div>
</template>

<script src="../scripts/IndexScreen.js"></script>

<style scoped src="../styles/IndexScreen.scss" lang="scss"></style>
