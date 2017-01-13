class DAnchor extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(event: egret.Event) {
		var shp: egret.Shape = new egret.Shape();
		shp.graphics.beginFill(0x00ff00);
		shp.graphics.drawRect(0, 0, 100, 100);
		shp.graphics.endFill();

		//改变矩形的位置（左上角顶点）
		shp.x = 100;
		shp.y = 100;

		//修改锚点的位置
		shp.anchorOffsetX = 50;
		shp.anchorOffsetY = 50;
		this.addChild(shp);
	}
}