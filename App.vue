<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onReady: function() {
			console.log('oinReady');
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		box-sizing: border-box;
		display: flex;
		width: 100%;
		min-height: 100%;
	}
</style>