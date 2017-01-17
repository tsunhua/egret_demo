class AMixedMode extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
		RES.loadConfig("resource/default.res.json", "resource/");
		RES.loadGroup("preload");
	}

	private onGroupComplete(e: RES.ResourceEvent) {
		var bg: egret.Bitmap = new egret.Bitmap(RES.getRes("bg_jpg"));
		this.addChild(bg);

		var icon: egret.Bitmap = new egret.Bitmap(RES.getRes("egret_icon_png"));
		//设置混合模式
		// icon.blendMode = egret.BlendMode.NORMAL;//默认模式, 覆盖效果
		// icon.blendMode = egret.BlendMode.ADD; //溶解效果
		icon.blendMode = egret.BlendMode.ERASE;//擦除效果
		this.addChild(icon);
	}
}