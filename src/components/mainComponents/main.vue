<template>
    <div class="mr-16">
        <ul>
            <li v-for="menu in Menus.roots.menus" 
                :key="menu">
                <router-link class="nav-link" :to="menu.link">{{ menu.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import Menus from "@/assets/informations/Menus"


//++++++++++++++++++++++++++++ Props ++++++++++++++++++++++++++++//

//++++++++++++++++++++++++++++ Methods ++++++++++++++++++++++++++++//

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
</style>