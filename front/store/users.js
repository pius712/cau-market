export const state = () => ({
  me: null,
});

// me:{
//     id : ,
//     password
//     email: ,
//     name: ,
//     studentId: ,
//     nickname: ,
// }
export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
  changeNick(state, nick) {
    state.me.nickname = nick;
  },
};

export const actions = {
  async signUp(context, payload) {
    console.log('payload', payload);
    await this.$axios
      .post(
        'http://localhost:8080/user',
        {
          id: payload.id,
          password: payload.password,
          email: payload.email,
          name: payload.name,
          studentId: payload.studentId,
          nickname: payload.nickname,
        },
        {
          withCredentials: true,
        },
      )
      .then(() => {
        context.commit('setMe', payload);
      })
      .catch(err => {
        console.error(err);
      });
  },
  logIn(context, payload) {
    context.commit('setMe', payload);
  },
  logOut(context, payload) {
    context.commit('setMe', payload);
  },
  onChangeNick(context, nick) {
    context.commit('changeNick', nick);
  },
};
