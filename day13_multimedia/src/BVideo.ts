class BVideo extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}


	private video: egret.Video;
	private onAddToStage(e: egret.Event): void {
		this.video = new egret.Video();
		this.video.x = 0;
		this.video.y = 0;
		this.video.height = 320;
		this.video.width = 640;
		this.video.fullscreen = false;
		this.video.poster = "resource/assets/egret_icon.png"; //loading图
		this.video.load("http://media.w3.org/2010/05/sintel/trailer.mp4");
		this.addChild(this.video);

		this.video.once(egret.Event.COMPLETE, (e: egret.Event) => {
			//播放按钮
			var btnPlay: eui.Button = new eui.Button();
			btnPlay.label = "播放";
			btnPlay.x = this.video.x + 20;
			btnPlay.y = this.video.y + this.video.height + 20;
			this.addChild(btnPlay);
			btnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				this.video.play();
			}, this);

			//暂停
			var btnPause: eui.Button = new eui.Button();
			btnPause.label = "暂停";
			btnPause.x = btnPlay.x + btnPlay.width + 20;
			btnPause.y = btnPlay.y;
			this.addChild(btnPause);
			btnPause.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				this.video.pause();
			}, this);

			//音量调节
			var volume: eui.HSlider = new eui.HSlider();
			volume.x = btnPlay.x;
			volume.y = btnPlay.y + btnPlay.height + 20;
			this.addChild(volume);
			volume.value = 100;
			volume.maximum = 100;
			volume.minimum = 0;
			volume.width = 200;
			volume.addEventListener(egret.Event.CHANGE, (e: egret.Event) => {
				this.video.volume = e.target.value / 100;
			}, this);

			//全屏
			var screenSwitcher: eui.ToggleSwitch = new eui.ToggleSwitch();
			screenSwitcher.label = "全屏";
			screenSwitcher.x = btnPause.x + btnPause.width + 20;
			screenSwitcher.y = btnPause.y;
			screenSwitcher.addEventListener(egret.Event.CHANGE, (e: egret.Event) => {
				this.video.fullscreen = e.target.selected;
			}, this);
			this.addChild(screenSwitcher);

			//滑动播放位置
			var position: eui.Label = new eui.Label();
			position.x = btnPlay.x;
			position.y = volume.y + volume.height + 20;
			this.addChild(position);
			position.addEventListener(egret.Event.ENTER_FRAME, () => {
				e.target.text = "播放时间：" + this.video.position;
			}, this);

			//截图
			var btnScreenShot: eui.Button = new eui.Button();
			btnScreenShot.label = "截图";
			btnScreenShot.x = screenSwitcher.x + screenSwitcher.width + 40;
			btnScreenShot.y = btnPlay.y;
			this.addChild(btnScreenShot);
			btnScreenShot.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.Event) => {
				var bmd: egret.BitmapData = this.video.bitmapData;
				var bitmap: egret.Bitmap = new egret.Bitmap();
				bitmap.bitmapData = bmd;
				bitmap.x = this.video.x;
				bitmap.y = this.video.y + this.video.height + 150;
				this.addChild(bitmap);
			}, this);

		}, this);




		this.video.once(egret.IOErrorEvent.IO_ERROR, () => {
			console.log("视频加载出错！");
		}, this);
	}

}