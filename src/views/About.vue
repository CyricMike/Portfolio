<template>
    <div :class="[smallScreen && 'is-small']">
        <div class="border-layout">
            <h1>About</h1>
            <div class="border-form"></div>
            <p>
                Highly skilled Software Developer with 3+ years of experience in the IT industry. 
                Proficient in developing scalable web applications and providing technical support. 
                Seeking a challenging role that utilizes my skills and allows for professional growth.
            </p>
        </div>
        
        <div class="education border-layout">
            <h1>Education</h1>
            <div class="border-form"></div>

            <div class="educ-details">
                <img 
                    class="image"
                    src="../assets/Logos/SSC.png"/>

                <div id="info">
                    <span>2015-2019</span>
                    <span>Bachelor of Science in Computer Science</span>
                    <span>Sorsogon State College</span>
                </div>
            </div>
        </div>

        <div class="tech border-layout">
            <h1>Technologies</h1>
            <div class="border-form"></div>
            <technologies/>    
        </div>
    </div>
</template>

<script setup>
import spinCube from './spinCube.vue';
import Technologies from '@/components/aboutDetails/Technologies.vue'
import { useMatchMedia } from '@/functions/screenSize';

const smallScreen =  useMatchMedia('(max-width: 700px)');

</script>

<style lang="scss" scoped>
.education {
    padding-bottom: 5%;
    .educ-details {
        display: flex;
        .image {
            width: 15%;
            height: 20%;
            margin: 2%;
        }

        #info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            
            span {
                padding: 1%;
            }
        }
    }
}

.is-small{
    .image{
        width: 30% !important;
        height: 20%;
        margin: 5%;

    }
}
</style>