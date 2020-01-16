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
        </v-app-bar>
        <v-content style="overflow:hidden">
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
                        <v-menu
                        >
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    text
                                    class="align-self-center mr-4"
                                    v-on="on"
                                >
                                    <v-icon left>mdi-menu</v-icon>
                                    카테고리
                                </v-btn>
                            </template>
                            <v-list class="grey lighten-3">
                                <v-list-item
                                    v-for="(item,index) in menulist"
                                    :key="index"
                                >
                                    {{ item.title }}
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-tab>
                            최신 매물
                        </v-tab>
                        <v-tab>
                            인기 매물
                        </v-tab>
                        <v-tab>
                            급처
                        </v-tab>
                    </v-tabs>
            </v-card>
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
export default {
    data(){
        return {
            menulist:[{ title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' }],
            items: [
                'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
            ],
        }
    },
    computed:{
        me(){
            return this.$store.state.users.me;
        }
    }
}
</script>

<style scoped>
a{  
    display:inline-block;
    margin-left: 10px;
    color: inherit;
    text-decoration: none;
}
a > span{
    font-size:12px;
}
.header-logo{
    width: 1080px;
    margin: 0 auto;
    text-align: center;
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