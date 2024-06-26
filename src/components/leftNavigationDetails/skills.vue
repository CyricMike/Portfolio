<template>
    <div class="skills-details">
        <div 
            class="skills"
            v-for="item in imagesDetails" 
            :key="item.name"
        >
            <v-avatar :image="item.url" size="30"/>
            <v-slider 
                :model-value="item.rate"
                :max="100"
                hide-details
                readonly
                color="#ff9500"
                track-color="white"
            >
                <template v-slot:append>
                    <span>{{ item.rate + '%'}}</span>
                </template>
            </v-slider>
        </div>        
    </div>
</template>

<script setup>
import HTML5 from '@/assets/Images/Technologies/HTML5.png'
import CSS from '@/assets/Images/Technologies/CSS.png'
import JavaScript from '@/assets/Images/Technologies/JavaScript.png'
import TypeScript from '@/assets/Images/Technologies/TypeScript.png'
import Bootstrap from '@/assets/Images/Technologies/Bootstrap.png'
import Sass from '@/assets/Images/Technologies/Sass.png'
import Vue from '@/assets/Images/Technologies/Vue.png'
import Laravel from '@/assets/Images/Technologies/Laravel.png'
import Git from '@/assets/Images/Technologies/Git.png'

const imagesDetails = [
    {'name' : 'HTML5', 'rate' : 85 , 'url': HTML5},
    {'name' : 'CSS', 'rate' : 75, 'url': CSS},
    {'name' : 'JavaScript', 'rate' : 86, 'url': JavaScript},
    {'name' : 'TypeScript', 'rate' : 70, 'url': TypeScript},
    {'name' : 'Bootstrap', 'rate' : 75, 'url': Bootstrap},
    {'name' : 'Sass', 'rate' : 75, 'url': Sass},
    {'name' : 'Vue', 'rate' : 85, 'url': Vue},
    {'name' : 'Laravel', 'rate' : 80, 'url': Laravel},
    {'name' : 'Git', 'rate' : 84, 'url': Git},
]

//++++++++++++++++++++++++++++ Methods ++++++++++++++++++++++++++++//

// function getImages(name) {
//     console.log(new URL(`/Images/Technologies/${name}.png`, import.meta.url), 11, 'Skills')
//     return new URL(`/Images/Technologies/${name}.png`, import.meta.url).href
// }
</script>

<style lang="scss" scoped> 
.skills-details {
    position: relative;
    top: 0%;
    padding: 5%;

    .title {
        text-transform: uppercase;
    }

    .skills{
        display: flex;
        align-items: center;
        padding: 0%;
    }


}

</style>