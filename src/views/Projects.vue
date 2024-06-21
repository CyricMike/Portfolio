<template>
    <div>
        <div class="border-layout">
            <h1>Projects</h1>
            <div class="border-form"></div>
        </div>
        
        <div :class="['project-layout' , smallScreen && 'is-small' ]">
            <v-card
                v-for="project in projects" 
                :key="project"
                max-width="600"
                class="project-info"
                @click="toogleDialog(project)"
                
            >
                <v-hover v-slot="{ isHovering, props }">
                    <v-img
                        class="image"
                        v-bind="props"
                        :aspect-ratio="16/9"
                        cover
                        :src="getImages(project.logo)"
                    >
                        <v-expand-transition v-if="!smallScreen">
                            <div
                                v-if="isHovering"
                                class="card--reveal"
                            >
                                See more...
                            </div>
                        </v-expand-transition>
                    </v-img>

                    <v-card-text class="pt-6">
                        <h3>{{ project.systemName}}</h3>

                        <div id="syskind">
                            {{ project.systemKind}}
                        </div>
                    </v-card-text>
                </v-hover>
            </v-card>
        </div>

        <dialogBox 
            :drawer="drawer"
            :infos="infos"
            :smallScreen="smallScreen"
            @drawerclose="drawerclose"
        />
    </div>
</template>

<script setup>
import dialogBox from '@/components/projectDetails/dialogBox.vue'
import ProjectInfo from '@/assets/informations/Projects'
import { useMatchMedia } from '@/functions/screenSize';
import { ref } from 'vue';

const smallScreen =  useMatchMedia('(max-width: 600px)');
const projects = ProjectInfo.roots;
const drawer = ref(false);
const infos = {};


//++++++++++++++++++++++++++++ Methods ++++++++++++++++++++++++++++//

function getImages(name) {
    return (`src/assets/Logos/Projects/${name}.png`)
}

function toogleDialog(params) {
    infos.value = params
    drawer.value = true
}

function drawerclose() {
    drawer.value = false

}
</script>

<style lang="scss" scoped>
.project-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns */
    grid-auto-rows: minmax(100px, auto); /* Auto rows */
    gap: 10px; /* Gap between items */

    .project-info {
        padding: 20px;
        background-color: #1e1e1e;
        border-radius: 10px;
         
        .image {
            border-radius: 10px;
            .card--reveal {
                display: flex;
                background-color: #ff9500;
                font-size: 30px;
                color: white;
                align-items: center;
                bottom: 0;
                justify-content: center;
                opacity: .9;
                position: absolute;
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
        }

        h3{
            color: #ff9500;
        }

        #syskind{
            color: #80807f;
        }
    }
}
.is-small {
    grid-template-columns: 1fr; /* one columns */
}


</style>