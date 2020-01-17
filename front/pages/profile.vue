<template>
    <profile-component></profile-component>
</template>

<script>
import ProfileComponent from '~/components/ProfileComponent'
export default {
    components:{
        ProfileComponent
    },
    middleware: 'anonymous'
}
</script>

<style>

</style>