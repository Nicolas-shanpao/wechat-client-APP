<template>
	<view>
		<mainPage v-if="PageCur=='mainPage'"></mainPage>
		<contactsPage v-if="PageCur=='contactsPage'"></contactsPage>
		<findPage v-if="PageCur=='findPage'"></findPage>
		<toolsPage v-if="PageCur=='toolsPage'"></toolsPage>
		<mePage v-if="PageCur=='mePage'"></mePage>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="mainPage">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/mainPage' + [PageCur=='mainPage'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='mainPage'?'text-green':'text-gray'">微信</view>
			</view>
			<view class="action" @click="NavChange" data-cur="contactsPage">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/contactsPage' + [PageCur == 'contactsPage'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='contactsPage'?'text-green':'text-gray'">通讯录</view>
			</view>
			<view class="action" @click="NavChange" data-cur="findPage">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/findPage' + [PageCur == 'findPage'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='findPage'?'text-green':'text-gray'">发现</view>
			</view>
			<view class="action" @click="NavChange" data-cur="toolsPage">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/toolsPage' + [PageCur == 'toolsPage'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='toolsPage'?'text-green':'text-gray'">工具库</view>
			</view>
			<view class="action" @click="NavChange" data-cur="mePage">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/mePage' + [PageCur == 'mePage'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='mePage'?'text-green':'text-gray'">我</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: this.getStorageSync()
			}
		},
		mounted() {
			console.log(this.PageCur)
		},
		methods: {
			NavChange: function(e) {
				console.log(e)
				this.setStorageSync(e.currentTarget.dataset.cur)
				this.PageCur = this.getStorageSync()
			},
			setStorageSync(val) {
				uni.setStorageSync('PageCur', val);
			},
			getStorageSync() {
				console.log(1)
				const value = uni.getStorageSync('PageCur');
				if (value) {
					console.log(value)
					return value
				} else {
					console.log(3)
					return 'mainPage'
				}
			}
		}
	}
</script>

<style>

</style>
