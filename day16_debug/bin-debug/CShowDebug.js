//显示脏矩形和帧频信息
var CShowDebug = (function (_super) {
    __extends(CShowDebug, _super);
    function CShowDebug() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=CShowDebug,p=c.prototype;
    p.onAddToStage = function (e) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    p.onResGroupComplete = function (e) {
        var bmp = new egret.Bitmap(RES.getRes("bg_jpg"));
        this.addChild(bmp);
        var icon = new egret.Bitmap(RES.getRes("egret_icon_png"));
        this.addChild(icon);
        egret.startTick(function (timeStamp) {
            //注意：由于在一些浏览器上兼容性问题比较严重，目前暂时在 WebGL 下关闭了的脏矩形渲染。
            //所以：请在index.html中配置` egret.runEgret({renderMode:"canvas", audioType:0});`
            icon.x++;
            return true;
        }, this);
    };
    return CShowDebug;
}(egret.DisplayObjectContainer));
egret.registerClass(CShowDebug,'CShowDebug');
//# sourceMappingURL=CShowDebug.js.map