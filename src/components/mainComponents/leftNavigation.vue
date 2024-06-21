<template>
    <div>
        <v-navigation-drawer 
            floating
            permanent
            style="height: 750px; border-radius: 20px;"
        >
            <profile/>
            <v-divider></v-divider>
            <contacts/>
            <skills/>
        </v-navigation-drawer>
    </div>
</template>

<script setup>
import profile from '../leftNavigationDetails/profile.vue';
import contacts from '../leftNavigationDetails/contacts.vue';
import skills from '../leftNavigationDetails/skills.vue';
</script>

<style lang="scss" scoped>

</style>