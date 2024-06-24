<template>
    <div>
        <div :class="['container', smallScreen && 'is-small']">
            <div 
                class="column"
                v-for="detail in Techs"
                :key="detail"
            >
                <img 
                    class="image"
                    :src="getImages(detail.name)"
                />
                <h2>{{ detail.name }}</h2>
                <p>{{ detail.info }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMatchMedia } from '@/functions/screenSize'
const smallScreen =  useMatchMedia('(max-width: 960px)');

//++++++++++++++++++++++++++++ Methods ++++++++++++++++++++++++++++//

const getImages = (name) => {
    return (`../../../public/Images/Technologies/${name}.png`)
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