<template>
    <signup-component></signup-component>
</template>

<script>
import SignupComponent from '~/components/SignupComponent'
export default {
    components:{
        SignupComponent
    },
    middleware: 'loggedIn'
}
</script>

<style>

</style>