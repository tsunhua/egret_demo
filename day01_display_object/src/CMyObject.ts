class CMyObject extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var myGrid: CMyGrid = new CMyGrid();
		this.addChild(myGrid);
	}
}