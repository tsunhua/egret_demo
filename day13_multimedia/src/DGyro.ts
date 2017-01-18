///陀螺仪
class DGyro extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
	}

	private label: egret.TextField;

	private onLoad(e: egret.Event): void {
		this.label = new egret.TextField();
		this.label.y = 50;
		this.label.x = 50;
		this.label.text = "陀螺仪";
		this.addChild(this.label);

		var orientation = new egret.DeviceOrientation();
		orientation.addEventListener(egret.Event.CHANGE, (e: egret.OrientationEvent) => {
			//alpha: 设备绕Z轴（上方）的角度，0~360
			//beta: 设备绕X轴（右方）的角度，-180~180
			//gamma: 设备绕Y轴（左方）的角度，-90~90
			this.label.text =
				"方向\n nalpha:" + e.alpha
				+ ",\n nbeta:" + e.beta
				+ ",\n ngamma:" + e.gamma;
		}, this);
		orientation.start();
	}
}