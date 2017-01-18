///陀螺仪
var DGyro = (function (_super) {
    __extends(DGyro, _super);
    function DGyro() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
    }
    var d = __define,c=DGyro,p=c.prototype;
    p.onLoad = function (e) {
        var _this = this;
        this.label = new egret.TextField();
        this.label.y = 50;
        this.label.x = 50;
        this.label.text = "陀螺仪";
        this.addChild(this.label);
        var orientation = new egret.DeviceOrientation();
        orientation.addEventListener(egret.Event.CHANGE, function (e) {
            //alpha: 设备绕Z轴（上方）的角度，0~360
            //beta: 设备绕X轴（右方）的角度，-180~180
            //gamma: 设备绕Y轴（左方）的角度，-90~90
            _this.label.text =
                "方向\n nalpha:" + e.alpha
                    + ",\n nbeta:" + e.beta
                    + ",\n ngamma:" + e.gamma;
        }, this);
        orientation.start();
    };
    return DGyro;
}(egret.DisplayObjectContainer));
egret.registerClass(DGyro,'DGyro');
//# sourceMappingURL=DGyro.js.map