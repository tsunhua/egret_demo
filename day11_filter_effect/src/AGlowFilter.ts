class AGlowFilter extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
		RES.loadConfig("resource/default.res.json", "resource/");
		RES.loadGroup("preload");
	}

	private onGroupComplete(e: RES.ResourceEvent): void {
		var bmp: egret.Bitmap = new egret.Bitmap(RES.getRes("mario_png"));
		this.addChild(bmp);

		//使用发光滤镜
		var color: number = 0x00eeee;
		var alpha: number = 0.6;
		var blurX: number = 40;
		var blurY: number = 40;
		var strength: number = 2;
		var quality: number = egret.BitmapFilterQuality.HIGH;
		var inner: boolean = false;
		var knockout: boolean = false;
		var glowFilter: egret.GlowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);

		bmp.filters = [glowFilter];
	}
}