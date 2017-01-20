//横向布局：忽略子项上的坐标设置，所有子项的位置将由布局类统一管理
class DGridLayout extends egret.Sprite {

	private myGroup: eui.Group;
	public constructor() {
		super();
		this.myGroup = new eui.Group();
		this.addChild(this.myGroup);
		this.myGroup.layout = new eui.BasicLayout();
		this.myGroup.width = 500;
		this.myGroup.height = 300;
		var outline: egret.Shape = new egret.Shape();
		outline.graphics.lineStyle(3, 0x00eeee);
		outline.graphics.beginFill(0x000000, 0);
		outline.graphics.drawRect(0, 0, 500, 300);
		outline.graphics.endFill();

		this.myGroup.addChild(outline);

		var btn1: eui.Button = new eui.Button();
		btn1.label = "Btn A";
		var btn2: eui.Button = new eui.Button();
		btn2.label = "Btn B";
		var btn3: eui.Button = new eui.Button();
		btn3.label = "Btn C";

		this.myGroup.addChild(btn1);
		this.myGroup.addChild(btn2);
		this.myGroup.addChild(btn3);

		var tLayout: eui.TileLayout = new eui.TileLayout();
		//水平间距和垂直间距
		tLayout.horizontalGap = 10;
		tLayout.verticalGap = 10;
		//padding
		tLayout.paddingTop = 20;
		tLayout.paddingBottom = 20;
		tLayout.paddingLeft = 20;
		tLayout.paddingRight = 20;
		//对齐方式
		//通过增大行高度将行两端对齐。
		// tLayout.rowAlign = eui.RowAlign.JUSTIFY_USING_HEIGHT;
		//通过增大垂直间隙将行两端对齐。
		tLayout.rowAlign = eui.RowAlign.JUSTIFY_USING_GAP;
		// tLayout.columnAlign = eui.ColumnAlign.JUSTIFY_USING_WIDTH;
		tLayout.columnAlign = eui.ColumnAlign.JUSTIFY_USING_GAP;
		//指定列数
		tLayout.requestedColumnCount = 2;
		// tLayout.requestedRowCount = 1;

		this.myGroup.layout = tLayout;
	}
}