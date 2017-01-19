var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (e) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    p.onResGroupComplete = function (e) {
        var bmp = new egret.Bitmap(RES.getRes("bg_jpg"));
        this.addChild(bmp);
        //设置屏幕缩放模式
        // this.stage.scaleMode = egret.StageScaleMode.EXACT_FIT;
        this.stage.scaleMode = egret.StageScaleMode.NO_BORDER;
        // this.stage.scaleMode = egret.StageScaleMode.FIXED_NARROW;
        // this.stage.scaleMode = egret.StageScaleMode.NO_SCALE;
        // this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
        //设置屏幕方向
        // this.stage.orientation = egret.OrientationMode.AUTO;
        // this.stage.orientation = egret.OrientationMode.PORTRAIT;
        // this.stage.orientation = egret.OrientationMode.LANDSCAPE;
        this.stage.orientation = egret.OrientationMode.LANDSCAPE_FLIPPED;
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map