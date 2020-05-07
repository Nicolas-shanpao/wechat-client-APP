<template>
	<view class="userHome">
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-back"></text>
			</view>
			<view class="content text-bold">
			</view>
			<view class="action" @tap="moreBar()">
				<text class="cuIcon-more"></text>
			</view>
		</view>
		<view class="bg">
			<view class="bg-bai" :animation="animationData4">

			</view>
			<image src="../../static/me.jpg" mode="aspectFill" class="bg-img"></image>
		</view>
		<view class="main">
			<view class="user-header">
				<image :animation="animationData2" src="../../static/me.jpg" mode="aspectFill" class="user-header-avatar" id="user-header-avatar"></image>
				<view :animation="animationData3" class="user-header-tag" :class="user.sex?'cuIcon-female bg-pink':'cuIcon-male bg-blue'"></view>
			</view>
			<view class="user-info">
				<view class="name">{{user.name}}</view>
				<view class="nick">昵称：{{user.nick}}</view>
				<view class="intr">{{user.intr}}</view>
			</view>
		</view>
		<view class="bottom-bar padding flex flex-direction">
			<button class="cu-btn bg-yellow margin-tb-sm lg" @tap="addFriendAnimation()">
				加为好友
			</button>
		</view>
		<view class="add-msg" :style="{height:addHeight+'px',bottom:-addHeight+'px'}" :animation="animationData">
			<view class="name">
				{{user.name}}
			</view>
			<textarea :value="myinfo+'请求你加为好友~'" placeholder="" maxlength="120" class="add-main text-gray"></textarea>
			<view class="add-btn" :animation="animationData1">
				<button class="cancel cu-btn bg-grey margin-tb-sm lg" @tap="addFriendAnimation()">
					取消
				</button>
				<button class="send cu-btn bg-yellow margin-tb-sm lg">
					发送
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: "../../static/me.jpg",
				addHeight: "",
				myinfo: "小姐姐",
				user: {
					sex: 0,
					name: "我是谁",
					nick: "小哥哥",
					intr: "我是谁？我来自哪里？我要去往何处？我是谁？我来自哪里？我要去往何处？我是谁？我来自哪里？我要去往何处？我是谁？我来自哪里？我要去往何处？我是谁？我来自哪里？我要去往何处？我是谁？我来自哪里？我要去往何处？我是谁？我来自哪里？我要去往何处？"
				},
				animationData: {}, //动画
				animationData1: {},
				animationData2: {},
				animationData3: {},
				animationData4: {},
				isAdd: false
			};
		},
		onReady() {
			this.getElementStyle()
		},
		methods: {
			moreBar() {},
			getElementStyle() {
				const query = uni.createSelectorQuery().in(this);
				query.select('.bg').boundingClientRect(data => {
					console.log("得到布局位置信息" + JSON.stringify(data));
					console.log("节点离页面顶部的距离为" + data.top);
					this.addHeight = data.height - 186
				}).exec();
			},
			addFriendAnimation() {
				this.isAdd = !this.isAdd
				let animation = uni.createAnimation({
					duration: 200,
					timingFunction: 'ease',
				})
				let animation1 = uni.createAnimation({
					duration: 200,
					timingFunction: 'ease',
				})
				let animation2 = uni.createAnimation({
					duration: 200,
					timingFunction: 'ease',
				})
				let animation3 = uni.createAnimation({
					duration: 200,
					timingFunction: 'ease',
				})
				let animation4 = uni.createAnimation({
					duration: 200,
					timingFunction: 'ease',
				})
				let avatar = document.getElementById('user-header-avatar')
				console.log(avatar)
				if (this.isAdd) {
					// avatar.style.animation = "toBorderRadius 0.200s infinite";
					avatar.style.borderRadius = "50%";
					animation.bottom(0).step()
					animation1.bottom(0).step()
					animation2.width(120).height(120).left(-100).step()
					animation3.opacity(0).step()
					animation4.backgroundColor('rgba(255,228,49,0.6)').step()
				} else {
					avatar.style.borderRadius = "24px";
					animation.bottom(-this.addHeight).step()
					animation1.bottom(-100).step()
					animation2.width(200).height(200).left(0).step()
					animation3.opacity(1).step()
					animation4.backgroundColor('rgba(255,228,49,0)').step()
				}
				this.animationData = animation.export()
				this.animationData1 = animation1.export()
				this.animationData2 = animation2.export()
				this.animationData3 = animation3.export()
				this.animationData4 = animation4.export()
			},
		}
	}
</script>

<style lang="scss">
	.userHome {
		.cu-bar {
			background-color: transparent;
		}
	}

	.bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -2;

		.bg-bai {
			width: 100%;
			height: 100%;

		}

		.bg-img {
			opacity: 0.4;
			position: absolute;
			top: -10rpx;
			left: -10rpx;
			z-index: -1;
			width: 110%;
			height: 110%;
			filter: blur(16px);
		}
	}

	.main {
		text-align: center;
		padding-top: 148rpx;

		.user-header {
			position: relative;
			width: 400rpx;
			height: 400rpx;
			margin: 0 auto;

			.user-header-avatar {
				width: 400rpx;
				height: 400rpx;
				border-radius: 48rpx;
				border: 6rpx solid #ffffff;
				z-index: 1;
			}

			.user-header-tag {
				position: absolute;
				right: 22rpx;
				bottom: 22rpx;
				width: 64rpx;
				height: 64rpx;
				line-height: 64rpx;
				font-size: 32rpx;
				border-radius: $uni-border-radius-circle;
				z-index: 1;
			}
		}

		.user-info {
			padding-top: 42rpx;

			.name {
				font-size: 52rpx;
				color: $uni-text-color;
				line-height: 74rpx;
			}

			.nick {
				font-size: $uni-font-size-base;
				color: $uni-text-color;
			}

			.intr {
				padding: 20rpx 100rpx;
				font-size: $uni-font-size-base;
				font-weight: 300;
				color: $uni-text-color;
				line-height: 48rpx;
			}
		}
	}

	.bottom-bar {
		position: fixed;
		width: 100%;
		bottom: 0;
	}

	.add-msg {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 0 56rpx;
		background-color: #ffffff;
		border-radius: 40rpx 40rpx 0 0;

		.name {
			padding-top: 168rpx;
			font-size: 52rpx;
			color: $uni-text-color;
			line-height: 74rpx;
		}

		.add-main {
			padding: 10rpx 22rpx;
			width: 100%;
			height: 420rpx;
			background-color: #f3f4f6;
			border-radius: $uni-border-radius-base;
			line-height: 44rpx;
			font-size: 32rpx;
			font-weight: 400;
		}

		.add-btn {
			position: fixed;
			bottom: -150rpx;
			display: flex;
			width: calc(100% - 112rpx);
			padding-bottom: 30rpx;

			.cancel {
				min-width: 176rpx;
			}

			.send {
				margin-left: 20rpx;
				width: 100%;
			}
		}
	}

	@keyframes toBorderRadius {
		from {
			border-radius: 48rpx;
		}

		to {
			border-radius: 50%;
		}
	}

	@keyframes backBorderRadius {
		from {
			border-radius: 50%;
		}

		to {
			border-radius: 48rpx;
		}
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s;
	}

	.fade-enter,
	.fade-leave-to

	/* .fade-leave-active below version 2.1.8 */
		{
		opacity: 0;
	}
</style>
