///绘制曲线
class DCurve extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var shp: egret.Shape = new egret.Shape();
		shp.graphics.lineStyle(2, 0x0000ff);
		shp.graphics.moveTo(50, 50);
		shp.graphics.curveTo(100, 100, 200, 50);
		shp.graphics.endFill();
		this.addChild(shp);
	}
}