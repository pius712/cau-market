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
		console.log(payload);
		// const arr = state.imagesPaths.splice(payload, 1);
		// console.log(arr);
		state.imagesPaths.splice(payload, 1);
	},
	set_post(state, payload) {
		console.log(payload);
	},
};

export const actions = {
	uploadImages(context, payload) {
		return this.$axios
			.post('http://localhost:8080/post/images', payload, {
				withCredentials: true,
			})
			.then(res => {
				context.commit('concatImagePath', res.data);
			});
	},
	uploadPost(context, payload) {
		return this.$axios
			.post('http://localhost:8080:/post', payload, {
				widthCredentials: true,
			})
			.then(res => {
				context.commit('set_post', res.data);
			});
	},
};
