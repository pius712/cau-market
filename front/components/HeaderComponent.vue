<template>
  <v-card>
        <div class="header-logo">
            <img
            width="103px"
            height="79px"
            src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"/> 
        </div>
        <v-tabs 
        centered
        grow
        hide-slider
        :optional="true"
        >
            <v-tab>
                <v-menu
                transition="slide-y-transition"
                offset-y  
                open-on-hover
                >
                    <template 
                    
                    
                    v-slot:activator="{ on }">
                        <v-btn
                            text
                            class="align-self-center mr-4"
                            v-on="on"
                            style="color:rgba(0, 0, 0, 0.54); height:100%; width:100%"
                        >
                            <v-icon left>mdi-menu</v-icon>
                            카테고리
                        </v-btn>
                    </template>
                    <v-list class="white lighten-3" dense>
                        <v-list-item
                            color="white"
                            v-for="(item,index) in menulist"
                            :key="index"
                            @click="onClickCategory(item)"
                        >
                            {{ item.title }}
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-tab>
            <v-tab nuxt to="/current">
                최신 매물
            </v-tab>
            <v-tab nuxt to="/best">
                인기 매물
            </v-tab>
            <v-tab nuxt to="/goods">
                굿즈
            </v-tab>
            <v-tab nuxt to="/upload">
                처분하기
            </v-tab>
        </v-tabs>
    </v-card>
</template>

<script scoped>
export default {
    data(){
        return ({
             menulist:[
                { title: '책' },
                { title: '의류' },
                { title: '가전디지털' },
                { title: '주방 생활용품' },
                { title: '자취방' },
                { title: '상품권' },
                { title: '데이터' }],
        })
    },
    methods:{
        onClickCategory(item){
            
        }
    }
}
</script>

<style>

.header-logo{
    width: 1080px;
    margin: 0 auto;
    text-align: center;
}
</style>