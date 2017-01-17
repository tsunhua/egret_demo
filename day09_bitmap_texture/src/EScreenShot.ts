class EScreenShot extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
		RES.loadConfig("resource/default.res.json", "resource/");
		RES.loadGroup("preload");

		this.touchEnabled = true;
		this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			//进行截屏
			var renderTextTure: egret.RenderTexture = new egret.RenderTexture();
			renderTextTure.drawToTexture(this);
			var bmp: egret.Bitmap = new egret.Bitmap(renderTextTure);
			bmp.width *= 2;
			bmp.height *= 2;
			this.addChild(bmp);

			//截取Texture成base64编码的字符串
			var base64: string = renderTextTure.toDataURL("image/png", new egret.Rectangle(0, 0, 100, 100));
			console.log(base64);

			//保存到文件
			//不知道为什么，保存文件的功能失效了
			renderTextTure.saveToFile("image/png", "screen_shot.png", new egret.Rectangle(0, 0, 100, 100));
		}, this);


	}

	private onGroupComplete(e: RES.ResourceEvent): void {
		var img: egret.Bitmap = new egret.Bitmap();
		img.texture = RES.getRes("egret_icon_png");
		this.addChild(img);
	}
}