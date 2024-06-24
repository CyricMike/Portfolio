<template>
    <div>
        <v-img
            max-height="250"
            cover
            src="@/assets/Images/background.jpg"
        >
            <v-avatar
                :class="['profile-picture' , smallScreen && 'small-profile']"
                color="grey"
                :size="smallScreen ? '120' : '175'"
                rounded="1"
            >
                <v-img cover src="@/assets/Images/2x2 picture.jpg"></v-img>
            </v-avatar>
            <div :class="['name-info' , smallScreen && 'small-info']">
                <span id="name">Cyric Mike Periña</span>
                <span id="position">Front-end Developer</span>
            </div>
        </v-img>
        
    </div>
</template>

<script setup>
import { useMatchMedia } from '@/functions/screenSize'

const smallScreen =  useMatchMedia('(max-width: 960px)')

</script>

<style lang="scss" scoped>
.profile-picture{
    margin-top: 1%;
    margin-left: 2%;
}

.name-info {
    display: flex;
    flex-direction: column;
    position: relative;
    left: 4%;
    bottom: 17%;

    #name{
        text-transform: uppercase;
        font-weight: bold;
        padding-top: 5%;
    }

    #position{
        font-weight: 500;
    }
}

.small-info{
    bottom: 5%;
}

.small-profile{
    margin-top: 3%;
    margin-left: 5%; 
}
</style>