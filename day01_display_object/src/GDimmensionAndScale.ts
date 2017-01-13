class GDimmensionAndScale extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var myGrid: CMyGrid = new CMyGrid();
		this.addChild(myGrid);
		//缩放
		myGrid.scaleX = 2;
		myGrid.scaleY = 2;

		// myGrid.width = 50;
		// myGrid.height = 50;
		console.log("width:" + this.width + ",height:" + this.height);
	}
}