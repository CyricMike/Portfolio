<template>
    <div class="skills-details">
        <div 
            class="skills"
            v-for="item in imagesDetails" 
            :key="item.name"
        >
            <v-avatar :image="getImages(item.name)" size="30"/>
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

const imagesDetails = [
    {'name' : 'HTML5', 'rate' : 85 },
    {'name' : 'CSS', 'rate' : 75 },
    {'name' : 'JAVASCRIPT', 'rate' : 86 },
    {'name' : 'TYPESCRIPT', 'rate' : 70 },
    {'name' : 'BOOTSTRAP', 'rate' : 75 },
    {'name' : 'SASS', 'rate' : 75 },
    {'name' : 'VUE', 'rate' : 85 },
    {'name' : 'LARAVEL', 'rate' : 80 },
    {'name' : 'GIT', 'rate' : 84 },
]

//++++++++++++++++++++++++++++ Methods ++++++++++++++++++++++++++++//

function getImages(name) {
    return (`src/assets/Logos/${name}.png`)
}
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