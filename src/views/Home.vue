<!-- <template>
  <v-layout class="layout">
    <topNavigation v-if="!drawer" class="test"/>
    <mainTabs class="mt-3"/> 
  </v-layout>
</template>

<script setup>
import topNavigation from '@/components/mainComponents/topNavigation.vue'
import mainTabs from '@/components/mainComponents/main.vue'
import { useMatchMedia } from '@/functions/screenSize';
import { ref, watch } from 'vue';

const smallScreen =  useMatchMedia('(max-width: 1250px)');
const drawer = ref(true);

watch(
  smallScreen,
  ()=> {
    smallScreen.value ? drawer.value = false : drawer.value = true;
  }
)

</script> -->
