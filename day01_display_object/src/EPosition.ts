class EPosition extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		//当ADDED_TO_STAGE事件发生时，执行onAddToStage方法
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(event: egret.Event) {
		// this.changePosition();
		this.moveObjectByTouch();
	}

	//改变显示对象相对于舞台的位置
	private changePosition(): void {
		var container: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
		container.x = 200;
		container.y = 200;
		this.addChild(container);

		var circle: egret.Shape = new egret.Shape();
		circle.graphics.beginFill(0xff0000);
		circle.graphics.drawCircle(25, 25, 25);
		circle.graphics.endFill();
		container.addChild(circle);

		circle.touchEnabled = true;
		circle.addEventListener(egret.TouchEvent.TOUCH_TAP, onclick, this);

		function onclick(): void {
			//globalToLocal方法：将全局坐标位置点转换为当前显示对象坐标系中的点位置
			//与之对应的还有localToGlobal方法
			var targetPoint: egret.Point = container.globalToLocal(0, 0);
			circle.x = targetPoint.x;
			circle.y = targetPoint.y;
		}
	}

	//通过触摸移动显示对象
	private moveObjectByTouch(): void {
		var draggedObject: egret.Shape;
		var offsetX: number;
		var offsetY: number;

		var circle: egret.Shape = new egret.Shape();
		circle.graphics.beginFill(0xff0000);
		circle.graphics.drawCircle(25, 25, 25);
		circle.graphics.endFill();
		this.addChild(circle);

		circle.touchEnabled = true;
		// circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this);
		circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e: egret.TouchEvent) => {
			//记录手指按到的对象
			draggedObject = e.currentTarget;
			offsetX = e.stageX - circle.x;
			offsetY = e.stageY - circle.y;
			//将触摸的对象置于容器顶层
			this.addChild(draggedObject);
			this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
		}, this);
		circle.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this);

		function stopMove(e: egret.TouchEvent): void {
			console.log("stopMove");
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
		}
		function onMove(e: egret.TouchEvent): void {
			draggedObject.x = e.stageX - offsetX;
			draggedObject.y = e.stageY - offsetY;
		}
	}
}