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
		this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showMask, this);
	}

	public setResult(desc: string, score: number, title: string) {
		this.scoreTxt.text = "总分：" + score;
		this.descTxt.text = desc;
		this.titleTxt.text = "头衔：" + title;

		var msg: string = "获得" + score + "分，收获" + title + "称号，" + desc;
		share(msg);
	}

	private sp: egret.Sprite;
	private shareTip: egret.Bitmap;

	private showMask(): void {
		if (this.sp == null) {
			this.sp = new egret.Sprite();
			this.shareTip = new egret.Bitmap();
			this.shareTip.texture = RES.getRes("share_tip_png");
			this.shareTip.x = GameManager.stage.stageWidth - 320;
			this.sp.addChild(this.shareTip);
		}
		this.sp.graphics.clear();
		this.sp.graphics.beginFill(0x000000, 0.7);
		this.sp.touchEnabled = true;

		this.sp.graphics.drawRect(0, 0, GameManager.stage.stageWidth, GameManager.stage.stageHeight);
		this.sp.graphics.endFill();
		this.sp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancle, this);
		LayerManager.alertLayer.addChild(this.sp);
	}

	private onCancle(event: egret.TouchEvent): void {
		LayerManager.alertLayer.removeChild(this.sp);
	}
}