class ACreateBitmap extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		//加载资源配置文件
		RES.loadConfig("resource/default.res.json", "resource/");
		RES.loadGroup("preload");
	}

	private onAddToStage(e: egret.Event): void {
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, (evt: RES.ResourceEvent) => {
			var img: egret.Bitmap = new egret.Bitmap();
			img.texture = RES.getRes("bg_jpg");
			this.addChild(img);
		}, this);
		// var img: egret.Bitmap = new egret.Bitmap();
		// img.texture = RES.getRes("bg_jpg");
	}
}