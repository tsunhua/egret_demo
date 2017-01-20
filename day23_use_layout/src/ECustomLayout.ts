class ECustomLayout extends egret.Sprite {

	private myGroup: eui.Group;
	public constructor() {
		super();
		this.myGroup = new eui.Group();
		this.addChild(this.myGroup);
		this.myGroup.horizontalCenter = 0;
		this.myGroup.layout = new uiLayout.RingLayout();
		this.myGroup.width = 600;
		this.myGroup.height = 600;
		this.addChild(this.myGroup);

		for (var i: number = 0; i < 12; i++) {
			var btn: eui.Button = new eui.Button();
			btn.width = 100;
			btn.height = 50;
			btn.label = "Button " + i;
			this.myGroup.addChild(btn);
		}
	}
}