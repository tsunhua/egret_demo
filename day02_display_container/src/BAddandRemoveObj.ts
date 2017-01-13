class BAddandRemoveObj extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var spr: egret.Sprite = new egret.Sprite();
		spr.graphics.beginFill(0x00ff00);
		spr.graphics.drawArc(100, 100, 50, 0, Math.PI, false);
		spr.graphics.endFill();
		this.addChild(spr);
		//点我消失
		spr.touchEnabled = true;
		spr.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			if (e.currentTarget.parent) {//有没有爸爸
				this.removeChild(e.currentTarget);
			}
		}, this);
	}
}