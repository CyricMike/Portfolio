<template>
    <div class="profile-layout">
        <div>
            <v-img
                max-height="200"
                cover
                src="@/assets/Images/Profile/background.jpg"
            >
            <v-avatar
                class="profile-picture"
                color="grey"
                size="110"
                rounded="1"
            >
                <v-img cover src="@/assets/Images/Profile/2x2 picture.jpg"></v-img>
            </v-avatar>
            </v-img>
        </div>

        <div class="name-info">
                <span id="name">Cyric Mike Periña</span>
                <span id="position">Front-end Developer</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.profile-layout{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 15%;

    .profile-picture {
        position: relative;
        top: 15%; 
        left: 25%;
    }

    .name-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5%;

        #name {
            font-size: large;
            font-weight: bold;
        }

        #position {
            margin: 2px;
            border-block: 2px solid #ff9500;
        }
    }
}
</style>