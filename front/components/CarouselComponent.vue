<template>
  <v-carousel 
    hide-delimiters
    height="350px">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    data(){
        return ({
            items :[
                {
                    src: 'gray.jpeg'
                },
                {
                    src: 'blue.jpeg'
                },
                {
                    src: 'purple.png'
                },
                {
                    src: 'rose.jpg'
                },
            ]
        })
    }
}
</script>

<style>

</style>