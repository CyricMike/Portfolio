<template>
    <div>
        <div class="border-layout">
            <h1>Experience</h1>
            <div class="border-form"></div>
        </div>
        <v-timeline  side="end">
            <v-timeline-item v-for="exp in experiences" :key="exp">
            <template v-slot:icon>
                <v-avatar :image="getImages(exp.logo)"></v-avatar>
            </template>
            <div :class="['experience-form' , smallScreen && 'is-small']">
                <h1 id="company">{{ exp.companyName }}</h1>
                <span id="datehired">{{ exp.hiredDate }}</span>
                <span id="address">{{ exp.address }}</span>
                <span id="position">{{ exp.position }}</span>

                <div 
                    v-for="job in exp.job" 
                    :key="job"
                >
                    <li>{{ job }}</li>
                </div>
            </div>
            <!-- <v-chip-group > -->
                <v-chip 
                    class="chips"
                    v-for="lang in exp.languages" 
                    :key="lang"
                >{{lang}}</v-chip>
            <!-- </v-chip-group> -->

            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script setup>
import experience from '@/assets/informations/Experience.json'

import { useMatchMedia } from '@/functions/screenSize';

const smallScreen =  useMatchMedia('(max-width: 600px)');

const experiences =  experience.roots

//++++++++++++++++++++++++++++ Methods ++++++++++++++++++++++++++++//

function getImages(name) {
    return (`../../public/Images/Experience/${name}.png`)
}
</script>

<style lang="scss" scoped>
.experience-form {
    display: flex;
    flex-direction: column;
}
    #company{
        letter-spacing: 0.1em;
    }

    #datehired{
        color: #ff9500;
    }

    #address{
        font-style: oblique;
    }

    #position{
        font-weight: bold;
        letter-spacing: 0.25em;
        color: #ff9500;
    }

    li {
        padding: 3px;
    }
    .chips{
        margin: 1%;
    }


</style>