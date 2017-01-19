///使用内置日志输出面板
var BConsolePanel = (function (_super) {
    __extends(BConsolePanel, _super);
    function BConsolePanel() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=BConsolePanel,p=c.prototype;
    p.onAddToStage = function (e) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    p.onResGroupComplete = function (e) {
        var bmp = new egret.Bitmap(RES.getRes("bg_jpg"));
        this.addChild(bmp);
        egret.error("这是日志，知道吗？");
        egret.warn("这是日志，知道吗？");
        egret.log("这是日志，知道吗？", "额外信息", 1024444);
    };
    return BConsolePanel;
}(egret.DisplayObjectContainer));
egret.registerClass(BConsolePanel,'BConsolePanel');
//# sourceMappingURL=BConsolePanel.js.map