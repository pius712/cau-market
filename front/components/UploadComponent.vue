<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <v-col md="8">
        <v-container>
          <v-card tile>
            <v-container>
              <v-text-field v-model="title" placeholder="제목을 입력하세요" outlined dense></v-text-field>
              <v-text-field v-model="itemName" placeholder="제품명을 입력하세요." outlined dense></v-text-field>
              <v-textarea v-model="description" placeholder="제품에 대해서 설명해주세요.(최대 500자)" outlined></v-textarea>
              <v-select
                v-model="category"
                :items="categoryList"
                placeholder="카테고리를 설정해주세요."
                outlined
                dense
              ></v-select>
              <v-row no-gutters>
                <v-col md="10">
                  <v-text-field
                    v-model="hashtag"
                    placeholder="해쉬태그를 입력해보세요(최대 3개)"
                    outlined
                    dense
                    @keydown.enter="addHashtag"
                  ></v-text-field>
                </v-col>
                <v-col md="2">
                  <v-btn large dark color="indigo" @click="addHashtag">등록하기</v-btn>
                </v-col>
              </v-row>

              <v-chip
                class="ma-2"
                v-for="(hashtag, idx) in hashtags"
                :key="idx"
                :color="hashtagColor[idx]"
              >{{ hashtag }}</v-chip>
              <v-row no-gutters>
                <v-col md="10">
                  <div v-for="(image,idx) in imagesPaths" :key="idx" style="inline-block">
                    <img
                      :src="`http://localhost:8080/${image}`"
                      style="width:50px; heigth: 50px"
                      @click="check(idx)"
                    />
                    <v-icon @click="onClickRemoveBtn(idx)">mdi-delete</v-icon>
                  </div>
                </v-col>
                <v-col md="2">
                  <input ref="imageInput" type="file" multilple hidden @change="onChangeImages" />
                  <v-btn large dark color="indigo" @click="onClickImageUpload">사진등록</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
        <v-container>
          <v-card tile>
            <v-container>
              <v-text-field v-model="price" placeholder="판매희망 가격을 입력하새요"></v-text-field>
              <v-select :items="rating" placeholder="제품의 등급을 입력하세요"></v-select>
              <v-btn @click="uploadPost" block lagrge dark color="indigo">업로드</v-btn>
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
      title: "",
      itemName: "",
      description: "",
      category: "",
      hashtags: [],
      hashtag: "",
      price: "",
      rating: ["상", "중", "하"],
      categoryList: ["책", "의류", "가전디지털", "자취방"],
      hashtagColor: ["blue", "orange", "green", "red", "indigo"],
      hover: false
    };
  },
  computed: {
    imagesPaths() {
      return this.$store.state.posts.imagesPaths;
    }
  },
  methods: {
    addHashtag() {
      console.log("??");
      this.hashtags.push(this.hashtag);
      this.hashtag = "";
    },
    onClickImageUpload() {
      this.$refs.imageInput.click();
    },
    onChangeImages(e) {
      console.log("e.target.files", e.target.files);
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, image => {
        imageFormData.append("images", image);
      });
      this.$store.dispatch("posts/uploadImages", imageFormData);
    },
    onClickRemoveBtn(idx) {
      this.$store.commit("posts/removeImagePath", idx);
    },
    uploadPost() {
      this.$store.dispatch("posts/uploadPost", {});
    }
  }
};
</script>

<style></style>
