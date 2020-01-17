<template>
    <v-app>
        <v-app-bar 
            short
            flat
            app
            height="37px">
                <v-icon color="blue">mdi-bus-double-decker</v-icon>
                <v-toolbar-title>
                    <nuxt-link to="/">카우마켓</nuxt-link>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <div class="header-info">
                    <template v-if="!me">
                        <nuxt-link to="/join">
                            <span>회원가입</span>
                        </nuxt-link>
                        <nuxt-link to="/login">
                            <span>로그인</span>
                        </nuxt-link>
                    </template>
                    <template v-else>
                        <nuxt-link to="/join">
                            <span>{{me.name}} 님</span>
                        </nuxt-link>
                        <nuxt-link to="/profile">
                            <span>프로필</span>
                        </nuxt-link>
                    </template>
                    <a>
                        <span>고객센터</span>
                    </a>
                </div>
        </v-app-bar>
        <v-content style="overflow:hidden">
            <header-component></header-component>
            <nuxt/>
        </v-content>
        <v-footer>
            <v-card>
                <v-card-text>아하 ㅋㅋ 글쿤</v-card-text>
                <v-card-text>아하 ㅋㅋ 글쿤</v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
import HeaderComponent from '~/components/HeaderComponent'
export default {
    data(){
        return {
           
            items: [
                'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
            ],
        }
    },
    computed:{
        me(){
            return this.$store.state.users.me;
        }
    },
    components:{
        HeaderComponent
    }
}
</script>

<style>
.v-application a{
    text-decoration: none;
    color: #333;
}
.header-info a{  
    display:inline-block;
    margin-left: 10px;
    color: inherit;
    text-decoration: none;
    
}
.header-info span{
    font-size: 12px;
}

.bar{
    display: inline-block;
    width: 1px;
    height: 13px;
    text-indent: -999em;
    background: #e4e4e5;
}
.v-tab:hover{
    
    text-decoration: underline;
}
.v-tab--active{
    color: indigo;
}
</style>