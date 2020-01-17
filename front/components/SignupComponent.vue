<template>
    <v-container 
      fluid
      class="grey"
      style="height:100%">
        <v-row 
        
        justify="center"
        no-gutters>
            <v-col
            md=5>
                <v-form style="text-align:center" @submit.prevent="signUp">
                    <v-container >
                        <v-card >
                            <v-container>
                                    <h2 class="mb-5">회원가입</h2>
                                    <v-text-field
                                    v-model="id"
                                    :rules = "[rules.id, rules.required]"
                                    label="아이디를 입력하세요"
                                    outlined
                                    dense>

                                    </v-text-field>
                                    <v-text-field
                                    v-model="password"
                                    :rules = "[rules.required]"
                                    type="password"
                                    label="비밀번호를 입력하세요"
                                    outlined
                                    dense>
                                        
                                    </v-text-field>
                                    <v-text-field
                                    v-model="passwordCheck"
                                    :rules="[rules.passwordCheck, rules.required]"
                                    type="password"
                                    label="비밀번호를 재확인하세요"
                                    outlined
                                    dense>
                                    </v-text-field>
                                    <v-text-field
                                    v-model="name"
                                    :rules="[rules.required]"
                                    label="이름을 입력하세요"
                                    outlined
                                    dense>
                                    </v-text-field>
                                    <v-text-field
                                    v-model="nickname"
                                    :rules="[rules.required]"
                                    label="사용할 닉네임을 입력하세요"
                                    outlined
                                    dense>
                                    </v-text-field>
                                    
                                    <v-row no-gutters>
                                        <v-col md=9>
                                            <v-text-field
                                            v-model="email"
                                            :rules="[rules.required]"
                                            label="학교 메일을 입력하세요"
                                            outlined
                                            dense
                                            suffix="@cau.ac.kr">
                                            </v-text-field>
                                        </v-col>
                                        <v-col md=3>
                                            <v-btn large dark color="indigo" >인증하기</v-btn>
                                        </v-col>
                                    </v-row>
                            </v-container>
                        </v-card>
                    </v-container>
                    <v-container>
                        <v-card>
                            <v-container>
                                <v-card-title>
                                    이용약관동의
                                </v-card-title>
                                <v-card-text class="pb-0"> 
                                    <v-checkbox label="전체동의">전체동의</v-checkbox>
                                </v-card-text>
                                <v-card-text class="pa-0 ml-10"> 
                                    <v-checkbox class="ma-0" label="이용약관"></v-checkbox>
                                    <v-checkbox class="ma-0" label="개인정보처리방침"></v-checkbox>
                                </v-card-text>
                                <v-btn
                                    type="submit"
                                    block
                                    dark
                                    large
                                    color="indigo">
                                    가입하기
                                </v-btn >
                            </v-container>
                        </v-card>
                    </v-container>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            id: '',
            password:'',
            passwordCheck:'',
            name:'',
            nickname:'',
            email:'',
            rules:{
                required: v => !!v || '입력이 필요합니다.',
                id: v=> v.length>=6 || '6글자 이상의 영문',
                passwordCheck: v=> this.password===v || '비밀번호를 확인하세요.'
            }
        }
    },
    methods:{
        signUp(){
            console.log('signUp');
            this.$store.dispatch('users/signUp',{
                id: this.id,
                name: this.name,
                nicknmae: this.nickname,
                email: this.email
            })
            // .then(()=>{
            //     this.$store.dispatch('users/logIn')
            // })
            .then(()=>{
                this.$router.push('/');
            })
        }
    }
}
</script>

<style scoped>
a{
    text-decoration:none;
}
a > span{
    color: black;
    text-decoration: none;
    font-size:14px;
}
.find-info{
    margin-top: 20px;
}
.bar{
    display: inline-block;
    width: 1px;
    height: 13px;
    text-indent: -999em;
    background: #e4e4e5;
}
</style>