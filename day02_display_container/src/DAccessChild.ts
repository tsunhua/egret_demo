class DAccessChild extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var spr1: egret.Sprite = new egret.Sprite();
		spr1.graphics.beginFill(0xff0000);
		spr1.graphics.drawRect(0, 0, 100, 100);
		spr1.graphics.endFill();
		spr1.name = "red";
		this.addChild(spr1);
		var spr2: egret.Sprite = new egret.Sprite();
		spr2.graphics.beginFill(0x00ff00);
		spr2.graphics.drawRect(40, 0, 100, 100);
		spr2.graphics.endFill();
		spr2.name = "green";
		this.addChild(spr2);

		//通过深度获取子对象
		//并调整其透明度
		var green: egret.DisplayObject = this.getChildAt(1);
		green.alpha = 0.6;

		//通过name获取子对象
		//并调整其深度
		//查找耗资源
		var red: egret.DisplayObject = this.getChildByName("red");
		red.alpha = 0.4;


	}
}