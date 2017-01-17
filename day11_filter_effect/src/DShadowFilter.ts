class DShadowFilter extends egret.DisplayObjectContainer {
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

		//白色背景
		var bg: egret.Sprite = new egret.Sprite();
		bg.graphics.beginFill(0xffffff);
		bg.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
		bg.graphics.endFill();
		this.addChild(bg);

		var bmp: egret.Bitmap = new egret.Bitmap(RES.getRes("mario_png"));
		this.addChild(bmp);

		//投影滤镜
		var shadowFilter: egret.DropShadowFilter = new egret.DropShadowFilter(10, 45, 0x000000, 0.7, 16, 16, 0.6, egret.BitmapFilterQuality.LOW, false, false);
		bmp.filters = [shadowFilter];
	}
}