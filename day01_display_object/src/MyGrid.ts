class MyGrid extends egret.Shape {
	public constructor() {
		super();
		this.drawGrid();
	}

	private drawGrid() {
		this.graphics.beginFill(0x000ff);
		this.graphics.drawRect(0, 0, 50, 50);
		this.graphics.endFill();

		this.graphics.beginFill(0x000ff);
		this.graphics.drawRect(50, 50, 50, 50);
		this.graphics.endFill();

		this.graphics.beginFill(0xff0000);
		this.graphics.drawRect(50, 0, 50, 50);
		this.graphics.endFill();

		this.graphics.beginFill(0xff0000);
		this.graphics.drawRect(0, 50, 50, 50);
		this.graphics.endFill();
	}
}