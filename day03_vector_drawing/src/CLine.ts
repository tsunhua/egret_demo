///绘制直线
class CLine extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var shp: egret.Shape = new egret.Shape();
		shp.graphics.lineStyle(4, 0xff0000);
		shp.graphics.moveTo(0,0);
		shp.graphics.lineTo(100,100);
		shp.graphics.lineTo(232,232);
		shp.graphics.lineTo(0,33);
		shp.graphics.lineTo(122,0);
		shp.graphics.endFill();
		this.addChild(shp);
	}

}