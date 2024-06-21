<template>
    <v-card class="nav-layout">
        <profile/>
        <v-divider/>
        <contacts/>
    </v-card>
</template>

<script setup>
import profile from '../topNavigationDetails/profile.vue'
import contacts from '../topNavigationDetails/contacts.vue';
</script>

<style lang="scss" scoped>
.nav-layout{
    display: flex;
    flex-direction: column;
}
</style>