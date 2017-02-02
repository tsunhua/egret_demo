class LayerManager {

	//消息提示层
	public static alertLayer: egret.Sprite = new egret.Sprite();
	//游戏主体层
	public static gameLayer: egret.Sprite = new egret.Sprite();
	public constructor() {
	}

	public static init(stage: egret.Stage): void {
		GameManager.stage = stage;
		stage.addChild(LayerManager.gameLayer);
		stage.addChild(LayerManager.alertLayer);
	}

	public static fixScreen() {
		if (egret.Capabilities.isMobile) {
			GameManager.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
		} else {
			GameManager.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
		}
	}

}