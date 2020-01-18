<template>
  <v-container fluid class="grey" style="height:100%">
    <v-row justify="center" no-gutters>
      <v-col md="5">
        <v-container>
          <v-card>
            <v-container>
              <v-form style="text-align:center" @submit.prevent="onChangeNick">
                <h2 class="mb-5">개인 정보 변경</h2>
                <v-text-field :placeholder="me.id" outlined dense disabled>
                </v-text-field>
                <v-text-field :placeholder="me.name" outlined dense disabled>
                </v-text-field>

                <v-row no-gutters>
                  <v-col md="9">
                    <v-text-field
                      v-model="changedNick"
                      placeholder="변경할 닉네임을 입력하세요"
                      :rules="[rules.required]"
                      outlined
                      dense
                      diabled
                    >
                    </v-text-field>
                  </v-col>
                  <v-col md="3">
                    <v-btn type="submit" large dark color="indigo">
                      변경하기
                    </v-btn>
                  </v-col>
                </v-row>
                <div>{{ changedNick }}</div>
              </v-form>
            </v-container>
          </v-card>
        </v-container>
        <v-container>
          <v-card>
            <v-container>
              <h2>비밀번호 변경</h2>
              <v-card-text class="pb-0">
                <v-checkbox label="전체동의">전체동의</v-checkbox>
              </v-card-text>
              <v-card-text class="pa-0 ml-10">
                <v-checkbox class="ma-0" label="이용약관"></v-checkbox>
                <v-checkbox class="ma-0" label="개인정보처리방침"></v-checkbox>
              </v-card-text>
              <v-btn type="submit" block dark large color="indigo">
                가입하기
              </v-btn>
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
      rules: {
        required: v => !!v || '입력이 필요합니다.',
        id: v => v.length >= 6 || '6글자 이상의 영문',
        passwordCheck: v => this.password === v || '비밀번호를 확인하세요.',
      },
      changedNick: '',
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },
  },
  methods: {
    onChangeNick() {
      this.$store.dispatch('users/onChangeNick', this.changedNick);
    },
  },
};
</script>

<style></style>
