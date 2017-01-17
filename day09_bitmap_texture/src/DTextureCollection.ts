///纹理集
class DTextureCollection  extends egret.DisplayObjectContainer {
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
		// img.texture = RES.getRes("texture_collection_test_json.asdfsd_png");
		// img.texture = RES.getRes("texture_collection_test_json.adff_png");
		img.texture = RES.getRes("texture_collection_test_json.afsdf_jpg");
		this.addChild(img);
	}
}