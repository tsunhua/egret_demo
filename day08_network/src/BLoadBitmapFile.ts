class BLoadBitmapFile extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var imgLoader: egret.ImageLoader = new egret.ImageLoader();
		imgLoader.once(egret.Event.COMPLETE, this.onImgLoadCompleted, this);
		imgLoader.load("resource/assets/bg.jpg");
	}

	private onImgLoadCompleted(evt: egret.Event): void {
		var loader: egret.ImageLoader = evt.currentTarget;
		var bmd: egret.BitmapData = loader.data;
		var bmp: egret.Bitmap = new egret.Bitmap(bmd);
		this.addChild(bmp);
	}
}