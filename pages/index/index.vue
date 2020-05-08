<template>
	<view class="home">
		<view class="fixed cu-bar bg-white search " style="border-bottom: 1px solid #c8c7cc;">
			<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);"></view>
			<view class="content">
				{{title}}
			</view>
			<view class="action">
				<text class="menubutton cuIcon-search"></text>
				<text class="menubutton cuIcon-roundadd"></text>
			</view>
		</view>
		<view class="chat-list" v-for="(item,index) in chatList" :key="index" @tap="chat(item)">
			<view class="chat-item">
				<view class="chat-avatar">
					<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
						<view class="cu-tag badge">{{item.noRead}}</view>
					</view>
				</view>
				<view class="chat-content" :style="{width:item.isLangTime?'calc(100% - 296rpx)':'calc(100% - 196rpx)'}">
					<view class="text-grey">
						<view class="text-cut">{{item.name}}</view>
						<view class="cu-tag round bg-orange sm">战士</view>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							{{item.chat}}
						</view>
					</view>
				</view>
				<view class="chat-action" :style="{width:item.isLangTime?'200rpx':'100rpx'}">
					<view class="text-grey text-xs">{{item.time|getDateDiff}}</view>
					<view class="cuIcon-notice_forbid_fill text-gray"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import chatList from "@/commons/js/chat-test.json"
	export default {
		components: {},
		data() {
			return {
				title: 'Hello',
				chatList: chatList.data,
			}
		},
		onLoad() {

		},
		methods: {
			chat(item) {
				uni.navigateTo({
					url: "/pages/chat/chat?id=" + item.id + "&name=" + item.name
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		padding-top: 100rpx;

		.cu-bar {
			.action {
				.menubutton {
					width: 72rpx;
					height: 72rpx;
					font-size: 44rpx;
					line-height: 72rpx;
					text-align: center;
				}
			}
		}
	}

	.chat-list {
		width: 100%;
		height: 128rpx;
		background-color: $uni-bg-color;
		border-bottom: 1rpx solid #ddd;

		.chat-item {
			width: 100%;
			height: 100%;
			display: flex;
			padding: 10rpx 10rpx 10rpx 30rpx;
			align-items: center;
			justify-content: space-between;
			line-height: 44rpx;

			.chat-avatar {
				width: 96rpx;
				border-radius: 8rpx;
			}

			.chat-content {
				width: calc(100% - 196rpx);
				padding-left: 20rpx;

				.text-grey {
					display: flex;
				}
			}

			.chat-action {
				width: 100rpx;
				text-align: right;
			}
		}
	}
</style>
