<template>
    <div class="info">
        <div class="contact-details">
            <div>
                <div class="icon-form">
                    <v-icon  v-for="ic in icons[0]" :key="ic" 
                        class="icon" color="info" 
                        :icon="ic.icon" size="small">
                    </v-icon>
                </div>
                <span>cyricmike17@gmail.com</span>
            </div>
            <div>
                <div class="icon-form">
                    <v-icon  v-for="ic in icons[1]" :key="ic" 
                        class="icon" color="info" 
                        :icon="ic.icon" size="small">
                    </v-icon>
                </div>
                <span>+639155874426</span>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useMatchMedia } from '@/functions/screenSize'

const smallScreen =  useMatchMedia('(max-width: 960px)')

const icons = [
    [
        {'icon' : 'mdi-email-outline',},
        {'icon' : 'mdi-linkedin'},
        {'icon' : 'mdi-skype'},
        {'icon' : 'mdi-github'},
    ],
    [
        {'icon' : 'mdi-phone-outline'},
        {'icon' : 'mdi-whatsapp'},
    ]
];

//++++++++++++++++++++++++++++ Methods ++++++++++++++++++++++++++++//

</script>

<style lang="scss" scoped> 
.info {
    position: relative;
    top: 0;
    padding: 5%;

    .contact-details {
        margin-left: 10%;

        .icon-form {
            margin-top: 3%;
            margin-bottom: 3%;
        
            .icon {
                margin-right: 10px;
            }
        }
    }
}
</style>