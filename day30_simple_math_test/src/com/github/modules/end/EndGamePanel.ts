class EndGamePanel extends BasePanel {

	private scoreTxt: eui.Label;
	private titleTxt: eui.Label;
	private descTxt: eui.Label;
	private againBtn: eui.Button;
	private shareBtn: eui.Button;

	public constructor() {
		super();
		this.skinName = "EndGamePanelSkin";
	}

	protected init(): void {
		this.againBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			LayerManager.gameLayer.removeChild(this);
			var game: GamePanel = new GamePanel();
			LayerManager.gameLayer.addChild(game);
		}, this);
	}

	public setResult(desc: string, score: number, title: string) {
		this.scoreTxt.text = "总分：" + score;
		this.descTxt.text = desc;
		this.titleTxt.text = "头衔：" + title;
	}
}