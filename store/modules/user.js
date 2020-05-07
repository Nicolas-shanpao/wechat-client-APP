import {
	loginByUsername,
	getUserinfo,
	loginOut,
	getWeather
} from '@/https/index.js'
const token = uni.getStorageSync('token');
const state = {
	/**
	 * 是否需要强制登录
	 */
	forcedLogin: true,
	userName: "",
	token: token,
	userinfo: {},
	weather: {},
	message: {
		username: "",
		password: "",
	}
}
const mutations = {
	SET_TOKEN: (state, token) => {
		state.token = token
	},
	SET_USERINFO(state, userinfo) {
		state.userinfo = userinfo;
	},
	SET_WEATHER(state, weather) {
		state.weather = weather;
	},
	SET_MESSAGE(state, message) {
		state.message.username = message.username;
		state.message.password = message.password;
	},
}
const actions = {
	// 登录
	LoginByUsername({
		commit
	}, userInfo) {
		return new Promise((resolve, reject) => {
			loginByUsername(userInfo).then(res => {
				if (res.code != 100) {
					uni.showToast({
						title: res.message,
						icon: 'none'
					});
					reject(error)
				} else {
					let token = res.content.token
					commit('SET_TOKEN', token)
					uni.setStorageSync('token', token);
					uni.switchTab({
						url: '/pages/home/home'
					});
					resolve(res)
				}
			}).catch(error => {
				reject(error)
			})
		})
	},
	// 拉取个人信息
	GetUserinfo({
		state,
		commit
	}) {
		return new Promise((resolve, reject) => {
			getUserinfo().then(res => {
				if (res.statusCode == 401) {
					uni.showToast({
						title: res.content,
						icon: 'none'
					});
					uni.reLaunch({
						url: '/pages/login/login'
					});
				} else {
					commit('SET_USERINFO', res.content)
					resolve(res.content)
				}
			}).catch(error => {
				reject(error)
			})
		})
	},
	// 退出登录（接口退出）
	LoginOut({
		state,
		commit
	}) {
		return new Promise((resolve, reject) => {
			loginOut().then(res => {
				console.log(res)
				uni.removeStorageSync('token');
				uni.reLaunch({
					url: '/pages/login/login'
				});
				resolve(res)
			}).catch(error => {
				reject(error)
			})
		})
	},
	// 天气
	GetWeather({
		state,
		commit
	}) {
		return new Promise((resolve, reject) => {
			getWeather().then(res => {
				console.log("天气来了")
				commit('SET_WEATHER', res.content)
				resolve(res)
			}).catch(error => {
				reject(error)
			})
		})
	},
	Message({commit},data) {
		commit('SET_MESSAGE', data);
		uni.setStorageSync('user', data);
	}
}
const getters = {
	token(state) {
		return state.token;
	}
};
export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
