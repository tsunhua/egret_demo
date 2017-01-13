///圆弧API的高级用法
class FAdvancedArc extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		// this.drawArc();
		// this.drawArch();
		// this.drawSector();
		// this.addChild(this.getArcProgress());
		this.addChild(this.getArchProgress());
	}

	//画弧
	private drawArc() {
		var shp: egret.Shape = new egret.Shape();
		shp.graphics.lineStyle(2, 0xffff00);
		shp.graphics.drawArc(50, 50, 50, 0, Math.PI / 180 * 30, false);
		shp.graphics.endFill();
		this.addChild(shp);
	}

	//画拱形
	private drawArch() {
		var shp: egret.Shape = new egret.Shape();
		shp.graphics.beginFill(0xff0000);
		shp.graphics.drawArc(50, 50, 50, 0, Math.PI / 180 * 60, false);
		shp.graphics.endFill();
		this.addChild(shp);
	}

	//绘制扇形
	private drawSector() {
		var r: number = 50;
		var shape: egret.Shape = new egret.Shape();
		shape.graphics.beginFill(0xff0000);
		shape.graphics.moveTo(r, r);
		shape.graphics.lineTo(r * 2, r);
		shape.graphics.drawArc(r, r, r, 0, 260 * Math.PI / 180, false);
		shape.graphics.lineTo(r, r);
		shape.graphics.endFill();
		this.addChild(shape);
	}

	//绘制弧形进度条
	private getArcProgress(): egret.Shape {
		var shape: egret.Shape = new egret.Shape();
		var angle: number = 0;
		egret.startTick((timeStamp: number) => {
			angle += 1;
			changeGraphics(angle);
			angle = angle % 360;
			return true;
		}, this);

		function changeGraphics(angle: number) {
			shape.graphics.clear();
			shape.graphics.lineStyle(2, 0x0000ff, 1);
			shape.graphics.drawArc(50, 50, 50, 0, angle * Math.PI / 180, false);
			shape.graphics.endFill();
		}
		return shape;
	}
	//绘制扇形进度条
	private getArchProgress(): egret.Shape {
		var r: number = 50;
		var shape: egret.Shape = new egret.Shape();
		shape.graphics.moveTo(r, r);
		var angle: number = 0;
		egret.startTick((timeStamp: number) => {
			angle += 1;
			changeGraphics(angle);
			angle = angle % 360;
			return true;
		}, this);

		function changeGraphics(angle: number) {
			shape.graphics.clear();
			shape.graphics.beginFill(0x0000ff);
			// shape.graphics.lineStyle(2, 0x0000ff, 1);
			shape.graphics.drawArc(r, r, r, 0, angle * Math.PI / 180, false);
			shape.graphics.lineTo(r, r);
			shape.graphics.endFill();
		}
		return shape;
	}

	//绘制不规则边框进度条
}