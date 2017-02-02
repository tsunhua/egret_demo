class WelcomePanel extends BasePanel {

	private startBtn: eui.Button;
	public constructor() {
		super();
		this.skinName = "WelcomePanelSkin";
	}

	protected init(): void {
		this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGame, this);
	}

	private onStartGame(event: egret.TouchEvent): void {
		LayerManager.gameLayer.removeChild(this);
		var game: GamePanel = new GamePanel();
		LayerManager.gameLayer.addChild(game);
	}
}