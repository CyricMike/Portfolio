<template>
    <div :class="[smallScreen && 'is-small']">
        <div class="border-layout">
            <h1>Resume</h1>
            <div class="border-form"></div>
        </div>
        <div class="resume-layout">
            
            <div id="img-form" v-for="img in images" :key="img">
                <img id="img" :src="img" alt="resume">
            </div>
            
            <div id="download">
                <a 
                    id="link"
                    target="_blank"
                    href="https://drive.google.com/file/d/1MB_twqWpKKGTeBz5wHd6cG8lrRUUQwhO/view?usp=drivesdk"
                >Download</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMatchMedia } from '@/functions/screenSize';
import CoverLetter from '@/assets/Images/Resume/CoverLetter.jpg'
import ResumeFirstPage from '@/assets/Images/Resume/ResumeFirstPage.jpg'
import ResumeSecondPage from '@/assets/Images/Resume/ResumeSecondPage.jpg'

const smallScreen =  useMatchMedia('(max-width: 700px)');

const images = [
    CoverLetter,
    ResumeFirstPage,
    ResumeSecondPage,
]

//++++++++++++++++++++++++++++ Methods ++++++++++++++++++++++++++++//

</script>

<style lang="scss" scoped>
.resume-layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    #img-form{
        align-self: center;
        margin-bottom: 2%;

        #img{
            width: 100%;
        }
    }

    #download{
        width: 20%;
        text-align: center;
        font-size: large;
        font-weight: bold;
        border: 1px solid white;
        border-radius: 10px;
        padding: 1%;

        #link{
            color: white;
            text-decoration: none;

        }

    }

    #download:hover{
        background-color: #252424;
        border: 1px solid yellow;


        #link{
            color: yellow;
        }
    }

}

.is-small{
    #download{
        width: 30%;
        font-size: small;
        font-weight: bold;

    }
}
</style>