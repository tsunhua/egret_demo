//显示脏矩形和帧频信息
class CShowDebug extends egret.DisplayObjectContainer {
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
		var icon: egret.Bitmap = new egret.Bitmap(RES.getRes("egret_icon_png"));
		this.addChild(icon);
		egret.startTick(
			(timeStamp: number) => {
				//注意：由于在一些浏览器上兼容性问题比较严重，目前暂时在 WebGL 下关闭了的脏矩形渲染。
				//所以：请在index.html中配置` egret.runEgret({renderMode:"canvas", audioType:0});`
				icon.x++;
				return true;
			}, this);
	}
}