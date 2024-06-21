<template>
    <div>
        <div :class="['container', smallScreen && 'is-small']">
            <div 
                class="column"
                v-for="detail in details"
                :key="detail"
            >
                <img class="image"
                    :src="getImages(detail.name)"/>
                <h2>{{ detail.name }}</h2>
                <p>{{ detail.info }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Tech from '@/assets/informations/Technologies.json';
import { useMatchMedia } from '@/functions/screenSize'

const smallScreen =  useMatchMedia('(max-width: 960px)');
const details = Tech.roots;

//++++++++++++++++++++++++++++ Methods ++++++++++++++++++++++++++++//

function getImages(name) {
    return (`src/assets/Logos/${name}.png`)
}
</script>

<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns */
    grid-auto-rows: minmax(100px, auto); /* Auto rows */
    gap: 10px; /* Gap between items */

    .column {
        padding: 20px;
        text-align: center;
    }

    .image {
        width: 50px;
        height: 50px;
    }
    
}

.is-small {
    grid-template-columns: 1fr; /* one columns */
}
</style>