class GCancelTouchTest extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		//TODO：取消触摸事件留到学习eui扩展库的时候再学习之
		// var scroller = new eui.List();
	}
}