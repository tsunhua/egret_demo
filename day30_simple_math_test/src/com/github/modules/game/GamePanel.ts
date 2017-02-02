class GamePanel extends BasePanel {
	private aBtn: eui.Button;
	private mycurNumTxt: eui.Label;
	private quesTxt: eui.Label;
	private timeTxt: eui.Label;
	private bBtn: eui.Button;
	private cBtn: eui.Button;
	private resetBtn: eui.Button;

	private timer: egret.Timer;
	private totalTime: number = 6;

	public constructor() {
		super();
		this.skinName = "GamePanelSkin";
	}

	protected init(): void {
		this.timer = new egret.Timer(1000);
		this.timer.addEventListener(egret.TimerEvent.TIMER, () => {
			this.totalTime--;
			if (this.totalTime > 0) {
				this.timeTxt.text = this.totalTime + "";
			} else {
				this.gameOver();
			}
		}, this);
		this.initGameEvent();
	}

	private initGameEvent(): void {
		this.aBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
		this.bBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
		this.cBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
		this.resetBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRest, this);
	}

	private onSelect(event: egret.TouchEvent): void { }
	private onRest(event: egret.TouchEvent): void { }

	private gameOver(): void {
		this.timer.stop();
	}
}