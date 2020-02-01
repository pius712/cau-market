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
  signUp(context, payload) {
    context.commit('setMe', payload);
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
