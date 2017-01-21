class SimpleGroup extends eui.Group {
	public constructor() {
		super();
	}

	protected createChildren(): void {
		super.createChildren();
		// var btn: eui.Button = new eui.Button();
		// btn.label = "按钮";
		// this.addChild(btn);
		this.layoutContents();
	}

	private layoutContents(): void {
		this.width = 500;
		this.height = 300;

		let line: egret.Shape = new egret.Shape();
		line.graphics.lineStyle(4, 0xee0000);
		line.graphics.beginFill(0xffffff, 0);
		line.graphics.drawRect(0, 0, this.width, this.height);
		line.graphics.endFill();
		this.addChild(line);

		for (let i: number = 0; i < 4; i++) {
			let btn: eui.Button = new eui.Button();
			btn.label = "button" + i;
			btn.x = 10 + i * 30;
			btn.y = 10 + i * 30;
			this.addChild(btn);
		}

		this.layout = new eui.VerticalLayout();
	}
}
