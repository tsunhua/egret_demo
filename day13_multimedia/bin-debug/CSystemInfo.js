///获取系统信息
var CSystemInfo = (function (_super) {
    __extends(CSystemInfo, _super);
    function CSystemInfo() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
    }
    var d = __define,c=CSystemInfo,p=c.prototype;
    p.onLoad = function (e) {
        var info = "isMobile: " + egret.Capabilities.isMobile +
            "\nlanguage: " + egret.Capabilities.language +
            "\nos: " + egret.Capabilities.os +
            "\nrunTimeType: " + egret.Capabilities.runtimeType;
        console.log(info);
        var txt = new egret.TextField();
        txt.text = info;
        txt.size = 40;
        this.addChild(txt);
    };
    return CSystemInfo;
}(egret.DisplayObjectContainer));
egret.registerClass(CSystemInfo,'CSystemInfo');
//# sourceMappingURL=CSystemInfo.js.map