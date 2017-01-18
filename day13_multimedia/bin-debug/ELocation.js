var ELocation = (function (_super) {
    __extends(ELocation, _super);
    function ELocation() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=ELocation,p=c.prototype;
    p.onAddToStage = function (e) {
        var _this = this;
        this.label = new egret.TextField();
        this.label.x = this.stage.stageWidth / 2;
        this.addChild(this.label);
        this.label.size = 20;
        this.label.text = "暂未获取到经纬度信息";
        this.label.anchorOffsetX = this.label.width / 2;
        var gps = new egret.Geolocation();
        //监听经纬度变化的事件
        gps.addEventListener(egret.Event.CHANGE, function (e) {
            _this.label.text = "维度：" + e.latitude.toFixed(4) +
                "\n海拔：" + e.altitude +
                "\n经度" + e.longitude.toFixed(4) +
                "\n速度：" + e.speed;
            _this.label.anchorOffsetX = _this.label.width / 2;
        }, this);
        gps.once(egret.GeolocationEvent.PERMISSION_DENIED, function () {
            _this.label.text = "获取位置信息失败，原因：用户未授权";
            _this.label.anchorOffsetX = _this.label.width / 2;
        }, this);
        gps.once(egret.GeolocationEvent.UNAVAILABLE, function (e) {
            _this.label.text = "获取位置信息失败，原因：" + e.errorMessage;
            _this.label.anchorOffsetX = _this.label.width / 2;
        }, this);
        gps.start();
    };
    return ELocation;
}(egret.DisplayObjectContainer));
egret.registerClass(ELocation,'ELocation');
//# sourceMappingURL=ELocation.js.map