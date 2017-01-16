class CTextFamily extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var label: egret.TextField = new egret.TextField();
		egret.TextField.default_fontFamily="fonts/STHUPO.ttf";
		this.addChild(label);
		label.fontFamily = "KaiTi";
		label.text = "这是一个文本dfdf";
		///--------------------以下自定义字体只在native中生效---------------------------------
		// egret.registerFontMapping("font1", "fonts/STXINGKA.TTF");
		egret.registerFontMapping("font1", "fonts/STHUPO.ttf");
		label.fontFamily = "font1";
	}
}