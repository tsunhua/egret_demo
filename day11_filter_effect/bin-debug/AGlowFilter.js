var AGlowFilter = (function (_super) {
    __extends(AGlowFilter, _super);
    function AGlowFilter() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=AGlowFilter,p=c.prototype;
    p.onAddToStage = function (e) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    p.onGroupComplete = function (e) {
        var bmp = new egret.Bitmap(RES.getRes("mario_png"));
        this.addChild(bmp);
        //使用发光滤镜
        var color = 0x00eeee;
        var alpha = 0.6;
        var blurX = 40;
        var blurY = 40;
        var strength = 2;
        var quality = 3 /* HIGH */;
        var inner = false;
        var knockout = false;
        var glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);
        bmp.filters = [glowFilter];
    };
    return AGlowFilter;
}(egret.DisplayObjectContainer));
egret.registerClass(AGlowFilter,'AGlowFilter');
//# sourceMappingURL=AGlowFilter.js.map