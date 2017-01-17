class CBlurFilter extends egret.DisplayObjectContainer {
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

		//模糊滤镜，参数一为blurX，参数二位blurY
		var blurFilter = new egret.BlurFilter(20, 20);
		bmp.filters = [blurFilter];

	}
}