///绘制圆弧
class EDrawArc extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var shp: egret.Shape = new egret.Shape();
		shp.graphics.beginFill(0x1122cc);
		shp.graphics.drawCircle(200,200,2); //绘制圆心
		shp.graphics.drawArc(200, 200, 100, 0, Math.PI / 2, false); //绘制圆弧
		shp.graphics.endFill();
		this.addChild(shp);
	}

}