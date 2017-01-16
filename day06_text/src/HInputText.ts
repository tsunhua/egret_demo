class InputText extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var txInput: egret.TextField = new egret.TextField();
		//设置为输入框
		txInput.type = egret.TextFieldType.INPUT;
		txInput.width = 282;
		txInput.height = 43;
		txInput.x = 50;
		txInput.y = 50;
		txInput.verticalAlign = egret.VerticalAlign.MIDDLE;
		txInput.textColor = 0x000000;
		//构建输入框背景
		var shp: egret.Shape = new egret.Shape;
		shp.graphics.beginFill(0xffffff);
		shp.graphics.drawRect(txInput.x, txInput.y, txInput.width, txInput.height);
		shp.graphics.endFill();
		this.addChild(shp);
		this.addChild(txInput);

		//获取焦点
		txInput.setFocus();

		//设置inpuType
		// txInput.inputType = egret.TextFieldInputType.TEL;
		// txInput.inputType = egret.TextFieldInputType.TEXT;
		txInput.inputType = egret.TextFieldInputType.PASSWORD;
		txInput.displayAsPassword = true;
	}
}