class ATimer extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var timer: egret.Timer = new egret.Timer(1000, 6);
		var btn: egret.TextField = new egret.TextField();
		btn.background = true;
		btn.backgroundColor = 0x0000aa;
		btn.textAlign = egret.HorizontalAlign.CENTER;
		btn.verticalAlign = egret.VerticalAlign.MIDDLE;
		btn.size = 30;
		btn.width = 200;
		btn.height = 100;
		btn.text = "开始计时";
		this.addChild(btn);
		btn.touchEnabled = true;
		var currentNumber: number = 5;
		btn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			console.log("timer start");
			timer.start();
			btn.text = currentNumber + "";
		}, this);
		timer.addEventListener(egret.TimerEvent.TIMER, (e: egret.TimerEvent) => {
			console.log("timer...");
			currentNumber--;
			btn.text = currentNumber + "";
		}, this);

		timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, (e: egret.TimerEvent) => {
			console.log("timer completed");
			btn.text = "计时结束";
			btn.touchEnabled = false;
		}, this);
	}
}