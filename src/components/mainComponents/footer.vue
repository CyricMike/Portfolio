<template>
    <div>
        <v-bottom-navigation :class="[smallScreen && 'is-small']">
        <ul>
            <li v-for="menu in Menus.roots.menus" 
                :key="menu">
                <router-link class="nav-link" :to="menu.link">{{ menu.name }}</router-link>
            </li>
        </ul>
        </v-bottom-navigation>
    </div>
</template>

<script setup>
import { useMatchMedia } from '@/functions/screenSize';
import Menus from "@/assets/informations/Menus"
const smallScreen =  useMatchMedia('(max-width: 700px)');

//++++++++++++++++++++++++++++ Props ++++++++++++++++++++++++++++//

const props = defineProps(['is-small'])

</script>

<style lang="scss" scoped>


ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
//   background-color: #333333;
}

li {
  float: right;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #252424;
  color: #ff9500;
}

.active{
    background-color: #111111;
    color: #ff9500;
}

.nav-link{
    text-decoration: none;
    text-transform: uppercase;
    font-size: medium;
    letter-spacing: 0.1em;
    font-weight: bold;
    transition: 0.5s;
}

.is-small{
    padding: 2%;
    li a {
        padding: 5px;
    }

    .nav-link{
        font-size: 11px;
        letter-spacing: unset;

    }

}
</style>