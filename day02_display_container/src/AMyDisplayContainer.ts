class AMyDisplayContainer extends egret.Sprite {
	public constructor() {
		super();
		this.drawChild();
	}

	private drawChild(): void {
		this.graphics.beginFill(0xff0000);
		this.graphics.drawRect(0,0,50,50);
		this.graphics.endFill();

		this.graphics.beginFill(0x00ff00);
		this.graphics.drawRect(50,0,50,50);
		this.graphics.endFill();

		this.graphics.beginFill(0xff0000);
		this.graphics.drawRect(50,50,50,50);
		this.graphics.endFill();

		this.graphics.beginFill(0x00ff00);
		this.graphics.drawRect(0,50,50,50);
		this.graphics.endFill();
	}
}