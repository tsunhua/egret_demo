var ADebug = (function (_super) {
    __extends(ADebug, _super);
    function ADebug() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=ADebug,p=c.prototype;
    p.onAddToStage = function (e) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    p.onResGroupComplete = function (e) {
        var bmp = new egret.Bitmap(RES.getRes("bg_jpg"));
        this.addChild(bmp);
        if (DEBUG) {
            var infoTxt = new egret.TextField();
            infoTxt.text = "Debug Mode";
            infoTxt.size = 24;
            infoTxt.textColor = 0x000000;
            this.addChild(infoTxt);
        }
        else if (RELEASE) {
        }
    };
    return ADebug;
}(egret.DisplayObjectContainer));
egret.registerClass(ADebug,'ADebug');
//# sourceMappingURL=ADebug.js.map