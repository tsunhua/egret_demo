class CDeepManagement extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var spr1: egret.Sprite = new egret.Sprite();
		spr1.graphics.beginFill(0xff0000);
		spr1.graphics.drawRect(0, 0, 100, 100);
		spr1.graphics.endFill();
		this.addChild(spr1);
		var spr2: egret.Sprite = new egret.Sprite();
		spr2.graphics.beginFill(0x00ff00);
		spr2.graphics.drawRect(40, 0, 100, 100);
		spr2.graphics.endFill();
		this.addChild(spr2);
		var spr3: egret.Sprite = new egret.Sprite();
		spr3.graphics.beginFill(0x0000ff);
		spr3.graphics.drawRect(20, 40, 100, 100);
		spr3.graphics.endFill();
		//插入任意深度
		this.addChildAt(spr3, 1);
		spr3.touchEnabled = true;
		spr3.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			//移除容器内所有的子对象
			// var childCount = this.numChildren;
			// for (var i: number = 0; i < childCount; i++) {
			// 	this.removeChildAt(i);
			// }
			//或者有更好的方式
			this.removeChildren();
		}, this);

		spr2.touchEnabled = true;
		spr2.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			//交换spr1和spr2的位置
			// this.swapChildren(spr1,spr2);
			this.swapChildrenAt(0, 1);
		}, this);

		spr1.touchEnabled = true;
		spr1.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			//重设子对象深度
			this.setChildIndex(spr1, 2);
		}, this);

	}
}