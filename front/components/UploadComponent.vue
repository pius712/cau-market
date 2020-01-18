<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <v-col md="8">
        <v-container>
          <v-card tile>
            <v-container>
              <v-text-field
                v-model="title"
                placeholder="제목을 입력하세요"
                outlined
                dense
              >
              </v-text-field>
              <v-text-field
                v-model="itemName"
                placeholder="제품명을 입력하세요."
                outlined
                dense
              >
              </v-text-field>
              <v-textarea
                v-model="description"
                placeholder="제품에 대해서 설명해주세요.(최대 500자)"
                outlined
              >
              </v-textarea>
              <v-select
                v-model="category"
                :items="categoryList"
                placeholder="카테고리를 설정해주세요."
                outlined
                dense
              >
              </v-select>
              <v-row no-gutters>
                <v-col md="10">
                  <v-text-field
                    v-model="hashtag"
                    placeholder="해쉬태그를 입력해보세요(최대 3개)"
                    outlined
                    dense
                    @keydown.enter="addHashtag"
                  >
                  </v-text-field>
                </v-col>
                <v-col md="2">
                  <v-btn large dark color="indigo" @click="addHashtag">
                    등록하기
                  </v-btn>
                </v-col>
              </v-row>
              <v-chip
                class="ma-2"
                v-for="(hashtag, idx) in hashtags"
                :key="idx"
                :color="hashtagColor[idx]"
              >
                {{ hashtag }}</v-chip
              >
            </v-container>
          </v-card>
        </v-container>
        <v-container>
          <v-card tile>
            <v-container>
              <v-text-field
                v-model="price"
                placeholder="판매희망 가격을 입력하새요"
              >
              </v-text-field>
              <v-select v-model="rating" placeholder="제품의 등급을 입력하세요">
              </v-select>
            </v-container>
          </v-card>
        </v-container>
        <v-card tile>하이하이</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      categoryList: ['책', '의류', '가전디지털', '자취방'],
      hashtags: [],
      hashtagColor: ['blue', 'orange', 'green', 'red', 'indigo'],
      title: '',
      description: '',
      hashtag: '',
      price: '',
      category: '',
      itemName: '',
      rating: '',
    };
  },
  methods: {
    addHashtag() {
      console.log('??');
      this.hashtags.push(this.hashtag);
      this.hashtag = '';
    },
  },
};
</script>

<style></style>
