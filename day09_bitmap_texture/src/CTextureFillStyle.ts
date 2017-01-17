///纹理填充方式
class CTextureFillStyle extends egret.DisplayObjectContainer {
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
		var img: egret.Bitmap = new egret.Bitmap();
		img.texture = RES.getRes("box_png");
		img.fillMode = egret.BitmapFillMode.REPEAT;
		img.width *= 4;
		img.height *= 4;
		this.addChild(img);
	}
}