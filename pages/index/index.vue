<template>
	<view>
		<mainPage v-if="PageCur=='mainPage'"></mainPage>
		<contactsPage v-if="PageCur=='contactsPage'"></contactsPage>
		<findPage v-if="PageCur=='findPage'"></findPage>
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
				PageCur: 'mainPage'
			}
		},
		methods: {
			NavChange: function(e) {
				console.log(e)
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
