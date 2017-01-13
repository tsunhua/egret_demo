class FTranslation extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(event: egret.Event): void {
		var bigText: egret.TextField = new egret.TextField();
		bigText.text = "平移和滚动显示对象，平移和滚动显示对象";
		bigText.scrollRect = new egret.Rectangle(0, 0, 200, 50);
		bigText.cacheAsBitmap = true;
		this.addChild(bigText);

		//附赠：触摸文本内容进行滚动
		bigText.touchEnabled = true;
		var lastX: number = 0;
		bigText.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e: egret.TouchEvent) => {
			lastX = e.stageX;
		}, this);
		bigText.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e: egret.TouchEvent) => {
			if (lastX == 0) {
				lastX = e.stageX;
				return;
			}
			var rect: egret.Rectangle = bigText.scrollRect;
			var offsetX: number = e.stageX - lastX;
			rect.x -= offsetX;
			bigText.scrollRect = rect;
			lastX = e.stageX;
		}, this);

		//创建一个按钮,点击后控制文本内容向左移动
		var btnLeft: egret.Shape = new egret.Shape();
		btnLeft.graphics.beginFill(0xcccc01);
		btnLeft.graphics.drawRect(0, 0, 50, 50);
		btnLeft.graphics.endFill();
		btnLeft.x = 50;
		btnLeft.y = 100;
		this.addChild(btnLeft);
		btnLeft.touchEnabled = true;
		btnLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, onScroll, this);

		//创建一个按钮,点击后控制文本内容向右移动
		var btnRight: egret.Shape = new egret.Shape();
		btnRight.graphics.beginFill(0x01cccc);
		btnRight.graphics.drawRect(0, 0, 50, 50);
		btnRight.graphics.endFill();
		btnRight.x = 150;
		btnRight.y = 100;
		this.addChild(btnRight);
		btnRight.touchEnabled = true;
		btnRight.addEventListener(egret.TouchEvent.TOUCH_TAP, onScroll, this);

		function onScroll(e: egret.TouchEvent): void {
			var rect: egret.Rectangle = bigText.scrollRect;
			switch (e.currentTarget) {
				case btnLeft:
					rect.x += 20;
					break;
				case btnRight:
					rect.x -= 20;
					break;
			}
			bigText.scrollRect = rect;
		}
	}
}