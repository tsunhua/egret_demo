class BTicker extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private star: egret.Bitmap;
	private speed: number = 0.05;
	private time: number = 0;

	private onAddToStage(e: egret.Event): void {
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, () => {
			var star: egret.Bitmap = new egret.Bitmap(RES.getRes("star_png"));
			this.addChild(star);
			this.star = star;
			this.time = egret.getTimer();
			egret.startTick(this.moveStar, this);
			this.star.touchEnabled = true;
			this.star.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				egret.stopTick(this.moveStar, this);
			}, this);
		}, this);
		RES.loadConfig("resource/default.res.json", "resource/");
		RES.loadGroup("preload");
	}

	private moveStar(timeStamp: number): boolean {
		var now = timeStamp;
		var time = this.time;
		var pass = now - time;
		//取小数点后五位
		console.log("moveStar: ", (1000 / pass).toFixed(5));
		this.star.x = (1000 / pass);
		this.time = now;
		return false;
	}
}