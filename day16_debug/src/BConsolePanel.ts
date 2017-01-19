///使用内置日志输出面板
class BConsolePanel extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResGroupComplete, this);
		RES.loadConfig("resource/default.res.json", "resource/");
		RES.loadGroup("preload");
	}

	private onResGroupComplete(e: RES.ResourceEvent): void {
		var bmp: egret.Bitmap = new egret.Bitmap(RES.getRes("bg_jpg"));
		this.addChild(bmp);
		egret.error("这是日志，知道吗？");
		egret.warn("这是日志，知道吗？");
		egret.log("这是日志，知道吗？","额外信息",1024444);
	}
}