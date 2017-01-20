class ABasicLayout extends egret.Sprite {
	private myGroup: eui.Group;
	public constructor() {
		super();
		//基本布局：容器内的子项的定位方式，取决于每个子项的坐标设置，也就是绝对定位。
		this.myGroup = new eui.Group();
		this.addChild(this.myGroup);
		this.myGroup.width = 400;
		this.myGroup.height = 300;
		//Layout与Group是解耦的，厉害了
		this.myGroup.layout = new eui.BasicLayout();

		var outline: egret.Shape = new egret.Shape();
		outline.graphics.lineStyle(3, 0x00ff00);
		outline.graphics.beginFill(0x000000, 0);
		outline.graphics.drawRect(0, 0, 400, 300);
		outline.graphics.endFill();
		this.myGroup.addChild(outline);

		//绝对布局
		// for (var i: number = 0; i < 4; i++) {
		//     var btn: eui.Button = new eui.Button();
		//     btn.x = 25 + i * 35;
		//     btn.y = 40 + i * 65;
		//     btn.label = "button " + i;
		//     this.myGroup.addChild(btn);
		// }

		//居中设置，horizontalCenter和verticlCenter
		// var btn: eui.Button = new eui.Button();
		// btn.label = "我是一个按钮";
		// btn.horizontalCenter = 0;
		// btn.verticalCenter = 0;
		// this.myGroup.addChild(btn);

		//边距设置，要求子项始终与容器便捷保持一定的像素差值
		// var btn: eui.Button = new eui.Button();
		// btn.label = "我是一个按钮2";
		// btn.top = 20;
		// btn.bottom = 20;
		// btn.left = 20;
		// btn.right = 20;
		// this.myGroup.addChild(btn);

		//百分比设置
		var btn: eui.Button = new eui.Button();
		btn.label = "我是一个按钮3";
		btn.percentWidth = 60;
		btn.percentHeight = 80;
		btn.verticalCenter = 0;
		btn.horizontalCenter = 0;
		this.myGroup.addChild(btn);
	}
}