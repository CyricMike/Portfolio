<template>
    <div>
      <v-dialog
        :fullscreen="props.smallScreen ? true : false"
        transition="dialog-top-transition"
        :class="['dialog-form' , props.smallScreen && 'small-dialog']"
        persistent
        v-model="props.drawer"
      >
        <v-card>
            <div class="d-flex justify-end pr-3 pt-3">
                <v-icon 
                    @click="closeDialog()"
                >mdi-close-circle</v-icon>
            </div>
            <v-card-text>
                <v-img
                    class="image"
                    v-bind="props"
                    :aspect-ratio="16/9"
                    cover
                    :src="getImages(props.infos.value.logo)"
                ></v-img>
                <h3>{{ props.infos.value.systemName}}</h3>

                <div id="syskind">
                    <span>{{ props.infos.value.projectDate}}</span>
                    <span>{{ props.infos.value.systemKind}}</span>
                </div>

                <div id="info">
                    <p>{{ props.infos.value.info }}</p>
                </div>
            </v-card-text>
        </v-card>
      </v-dialog>
    </div>
</template>

<script setup>
import { getImages } from '@/functions/loadImages';
const props = defineProps(['drawer' , 'infos' , 'arrImages' , 'smallScreen'])
const emit = defineEmits(['drawerclose'])
const closeDialog = () => emit('drawerclose');

//++++++++++++++++++++++++++++ Methods ++++++++++++++++++++++++++++//

</script>

<style lang="scss" scoped>
.dialog-form{
    width: 50%;

    h3{
        color: #ff9500;
    }

    #syskind{
        display: flex;
        flex-direction: column;
        color: #80807f;
    }

    #info{
        margin-top: 5%;
    }
}

.small-dialog{
    width: 100%;
}
</style>