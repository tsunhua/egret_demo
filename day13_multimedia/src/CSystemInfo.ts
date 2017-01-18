///获取系统信息
class CSystemInfo extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
	}

	private onLoad(e: egret.Event): void {
		var info: string = "isMobile: " + egret.Capabilities.isMobile +
			"\nlanguage: " + egret.Capabilities.language +
			"\nos: " + egret.Capabilities.os +
			"\nrunTimeType: " + egret.Capabilities.runtimeType;
		console.log(info);

		var txt: egret.TextField = new egret.TextField();
		txt.text = info;
		txt.size = 40;
		this.addChild(txt);
	}
}