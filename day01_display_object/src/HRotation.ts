class HRotation extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var myGrid: CMyGrid = new CMyGrid();
		this.addChild(myGrid);
		myGrid.rotation = 45;
		//附赠：平移以显示所有
		var transX: number = Math.sqrt(2) * 50;
		myGrid.x += transX;
	}
}