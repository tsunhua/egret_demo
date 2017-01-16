class BDisplayObjectMask extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}
	private onAddToStage(e: egret.Event): void {
		var square: egret.Shape = new egret.Shape();
		square.graphics.beginFill(0xff0000);
		square.graphics.drawRect(0, 0, 100, 100);
		square.graphics.endFill();
		this.addChild(square);

		var circle: egret.Shape = new egret.Shape();
		circle.graphics.beginFill(0x0000ff);
		circle.graphics.drawCircle(25, 25, 25);
		circle.graphics.endFill();
		this.addChild(circle);
		square.mask = circle;
		square.mask = null;
	}
}