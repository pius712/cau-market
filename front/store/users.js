export const state = ()=>({
    me : null,
});

// me:{
//     id : ,
//     studentId: ,
//     nickname: ,
//     name: ,
//     email: ,
// }
export const mutations = {
    setMe(state, payload){
        state.me = payload;
    }
};

export const actions = {
    signUp(context, payload){
        context.commit('setMe', payload);
    },
    logIn(context, payload){
        context.commit('setMe', payload);
    },
    logOut(context, payload){
        context.commit('setMe', payload);
    }
};