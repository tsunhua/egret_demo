class BTextColor extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		egret.TextField.default_textColor = 0xffff00;
		var label: egret.TextField = new egret.TextField();
		this.addChild(label);
		label.width = 70;
		label.height = 100;
		// label.textColor = 0xff0000;
		label.text = "这是一个文本";
	}
}