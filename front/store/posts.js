export const state = () => ({
	posts: [],
	imagesPaths: [],
});

// title : '' String
// photos: [] Array
// itemName : String
// category :  '' String
// hashtag : [] Array
// rating : '' String
// price : Number
// User:{
//     id:
//     nickname:
// comments:[] Array
// },
// completed : Boolean
// postId:
// createdAt:
// description:

export const mutations = {
	concatImagePath(state, payload) {
		state.imagesPaths = state.imagesPaths.concat(payload);
	},
	removeImagePath(state, payload) {
		state.imagesPaths = state.imagesPaths.splice(payload, 1);
	},
};

export const actions = {
	uploadImages(context, payload) {
		this.$axios
			.post('http://localhost:8080/post/images', payload, {
				withCredentials: true,
			})
			.then(res => {
				context.commit('concatImagePath', res.data);
			});
	},
};
