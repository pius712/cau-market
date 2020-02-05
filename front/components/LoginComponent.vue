<template>
  <v-container fluid class="grey" style="height:100%">
    <v-row justify="center" no-gutters>
      <v-col md="4">
        <v-container>
          <v-card>
            <v-container>
              <v-form style="text-align:center" @submit.prevent="signIn">
                <h2 class="mb-5">로그인</h2>
                <v-text-field v-model="id" label="아이디를 입력하세요" dense outlined></v-text-field>
                <v-text-field label="비밀번호를 입력하세요" dense outlined></v-text-field>
                <v-btn type="submit" block dark color="indigo">로그인</v-btn>
                <v-divider style="margin-top:5px"></v-divider>
                <div class="find-info">
                  <nuxt-link to="/">
                    <span>아이디 찾기</span>
                  </nuxt-link>
                  <span class="bar"></span>
                  <nuxt-link to="/">
                    <span>비밀번호 찾기</span>
                  </nuxt-link>
                  <span class="bar"></span>
                  <nuxt-link to="/">
                    <span>회원가입</span>
                  </nuxt-link>
                </div>
              </v-form>
            </v-container>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: ""
    };
  },
  methods: {
    signIn() {
      // console.log('signIn');
      this.$store
        .dispatch("users/logIn", {
          id: this.id,
          name: "김병창",
          nickname: "pius712",
          email: "aksfbsgnlfls@cau.ac.kr"
        })
        .then(() => {
          this.$router.push("/");
        });
    }
  }
};
</script>

<style scoped>
.find-info {
  margin-top: 20px;
}
.find-info a {
  text-decoration: none;
}
.find-info span {
  color: black;
  text-decoration: none;
  font-size: 14px;
}
</style>