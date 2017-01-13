///使用矢量绘图
class AVectorDrawingStart extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var shp: egret.Shape = new egret.Shape();
        shp.x = 100;
        shp.y = 100;
		//设置线的风格，在开始绘制前调用
		shp.graphics.lineStyle(20,0x0000ff);
		//开始填充：填充色，不透明度
		shp.graphics.beginFill(0xff0000, 1);
		shp.graphics.drawRect(0,0,100,200);
		shp.graphics.endFill();
		this.addChild(shp);

		shp.touchEnabled=true;
		shp.addEventListener(egret.TouchEvent.TOUCH_TAP,(e:egret.TouchEvent)=>{
			console.log("click");
			shp.graphics.clear();
		},this);
	}

}