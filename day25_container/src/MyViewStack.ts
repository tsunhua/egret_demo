class MyViewStack extends eui.ViewStack {
	public constructor() {
		super();
	}

	protected createChildren(): void {
		super.createChildren();

		//ViewStack的layou属性是只读的！

		let btn1: eui.Button = new eui.Button();
		btn1.label = "egret Button 1";
		this.addChild(btn1);

		let btn2: eui.Button = new eui.Button();
		btn2.label = "egret Button 2";
		this.addChild(btn2);

		this.selectedIndex = 1;

		let timer: egret.Timer = new egret.Timer(500,-1);
		timer.addEventListener(egret.TimerEvent.TIMER, () => {
			this.selectedIndex = (this.selectedIndex == 0 ? 1 : 0);
		}, this);
		timer.start();
	}
}