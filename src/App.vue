<template>
  <v-layout>
    <v-app :class="[drawer && 'app-form']">
      <left-navigation class="sidebar" v-if="drawer"/>
      <v-main>
        <topNavigation v-if="!drawer"/>
        <mainTab v-if="drawer"/>
        <router-view :class="[!smallScreen && 'router-bg' , 'router-layout']"/>
        <div :class="[smallScreen && 'space-bottom']"></div>
      </v-main>
    </v-app>
    <footer-tabs
      v-if="!drawer"/>
  </v-layout>
</template>

<script setup>
import leftNavigation from './components/mainComponents/leftNavigation.vue';
import topNavigation from './components/mainComponents/topNavigation.vue';
import footerTabs from './components/mainComponents/footer.vue';
import mainTab from './components/mainComponents/main.vue';
import { useMatchMedia } from '@/functions/screenSize';
import { onMounted, ref, watch } from 'vue';

const smallScreen =  useMatchMedia('(max-width: 1250px)');
const drawer = ref(true);
let sidebar = document.getElementsByClassName('sidebar')[0];
let sidebar_content = document.getElementsByClassName('content-wrapper')[0];
onMounted(
  () => {
    toogleScreenSize()
    console.log('onMounted')
  }
)
watch(
  smallScreen,
  ()=> {
    toogleScreenSize()
    console.log('watch')
  }  
)

function toogleScreenSize(){
  smallScreen.value ? drawer.value = false : drawer.value = true;
}

</script>

<style></style>