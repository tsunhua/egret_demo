class BDrawingCircle extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var shp: egret.Shape = new egret.Shape();
		shp.x = 100;
		shp.y = 100;
		shp.graphics.lineStyle(10, 0x00ff00);
		shp.graphics.beginFill(0xff0000, 1);
		shp.graphics.drawCircle(0, 0, 40);
		shp.graphics.endFill();
		this.addChild(shp);
	}

}