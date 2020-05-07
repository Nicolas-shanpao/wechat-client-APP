<template>
	<view class="centents">
		<view class="cu-bar bg-white">
			<view class="action" @tap="toLogin()">
				<text class="cuIcon-back"></text>
			</view>
			<view class="content text-bold">

			</view>
			<view class="action" @tap="toLogin()">
				<text class="cuIcon-close"></text>
			</view>
		</view>
		<view class="bg-video bg-mask flex align-center" style="height: 422upx;">
			<video src="https://yz.lol.qq.com/v1/assets/videos/aatrox-splashvideo.webm" autoplay loop muted :show-play-btn="false"
			 :controls="false" objectFit="cover"></video>
			<cover-view class="padding-xl text-white ">
				<cover-view class="padding-xs  text-xxl text-bold">
					暗裔剑魔
				</cover-view>
				<cover-view class="padding-xs">
					我必须连同希望一起毁坏……
				</cover-view>
			</cover-view>
		</view>
		<view class="main">
			<view class="title text-black text-bold">
				注册
			</view>
			<view class="slogan text-gray">
				欢迎来到德莱联盟
			</view>
			<view class="inputs">
				<input type="text" placeholder="用户名/邮箱" placeholder-style="color:#aaa;font-weight:400">
				<input password placeholder="密码" placeholder-style="color:#aaa;font-weight:400">
				<input password placeholder="密码" placeholder-style="color:#aaa;font-weight:400">
			</view>
			<view class="submit">
				<view class="cu-btn bg-blue shadow-blur round">
					登录
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toLogin() {
				uni.navigateTo({
					url: "/pages/signin/login"
				})
			}
		}
	}
</script>

<style lang="scss">
	.centents {
		padding-top: var(--status-bar-height);
		padding-bottom: $uni-spacing-base;
	}

	.main {
		padding: 60rpx;

		.title {
			font-size: 56rpx;
			line-height: 80rpx;
		}

		.slogan {
			font-size: 40rpx;
			line-height: 56rpx;
		}

		.inputs {
			padding-top: 8rpx;
			line-height: 88rpx;

			input {
				margin-top: 40rpx;
				height: 88rpx;
				font-size: $uni-font-size-lg;
				font-weight: 500;
				color: $uni-text-color;
				line-height: 88rpx;
				border-bottom: 1px solid $uni-border-color;
			}
		}

		.submit {
			padding-top: 40rpx;
			width: 80%;
			margin: 0 auto;

			.cu-btn {
				width: 100%;
				height: 80rpx;
			}
		}
	}
</style>
