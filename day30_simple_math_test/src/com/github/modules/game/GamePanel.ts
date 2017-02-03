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

	private isSelected: boolean;
	private curQuesData: Object;

	private score: number = 0;

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
		this.initData();
	}

	private initData(): void {
		GameData.levelNumber = 10;
		this.nextQues();
	}

	private nextQues() {
		this.totalTime = 4;
		this.timeTxt.text = this.totalTime + "";
		this.isSelected = false;
		this.timer.start();
		var curRanNum: number = this.getLevel();
		this.curQuesData = GameData.createQuest(curRanNum);

		if (this.curQuesData != null) {
			this.setButtonState(this.curQuesData["qs"], this.curQuesData["label"]);
		}
	}

	private setButtonState(qs: Array<number>, label: string) {
		this.aBtn.labelDisplay.text = qs[0].toString();
		this.bBtn.labelDisplay.text = qs[1].toString();
		this.cBtn.labelDisplay.text = qs[2].toString();

		this.quesTxt.text = label;
	}

	private getLevel(): number {
		if (this.score > GameData.levelNumber) {
			GameData.levelNumber += 20;
		}
		return GameData.levelNumber;
	}

	private initGameEvent(): void {
		this.aBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
		this.bBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
		this.cBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
		this.resetBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReset, this);
	}

	private onSelect(event: egret.TouchEvent): void {
		this.isSelected = true;
		var btn: eui.Button = event.currentTarget;
		this.checkRight(btn.labelDisplay.text);
	}
	private onReset(event: egret.TouchEvent): void {
		this.timer.stop();
		LayerManager.gameLayer.removeChild(this);
		var game: GamePanel = new GamePanel();
		LayerManager.gameLayer.addChild(game);
		this.nextQues();
	}

	private gameOver(): void {
		this.timer.stop();

		var allnumber = this.score;
		LayerManager.gameLayer.removeChild(this);
		var game: EndGamePanel = new EndGamePanel();
		var desc: string = GameData.getResult(allnumber);
		var title: string = GameData.getTitle(allnumber);
		game.setResult(desc, allnumber, title);
		LayerManager.gameLayer.addChild(game);
	}

	private checkRight(value: string): void {
		if (this.curQuesData != null) {
			if (value == this.curQuesData["result"]) {
				this.score++;
				this.mycurNumTxt.text = "当前分数：" + this.score;
				this.nextQues();
			} else {
				this.gameOver();
			}
		}
	}
}