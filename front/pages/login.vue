<template>
  <login-component></login-component>
</template>

<script>
import LoginComponent from '~/components/LoginComponent'
export default {
    components:{
        LoginComponent
    },
    middleware: 'loggedIn'
}
</script>

<style>

</style>