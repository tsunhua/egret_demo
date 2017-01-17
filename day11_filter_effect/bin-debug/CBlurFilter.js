var CBlurFilter = (function (_super) {
    __extends(CBlurFilter, _super);
    function CBlurFilter() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=CBlurFilter,p=c.prototype;
    p.onAddToStage = function (e) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    p.onGroupComplete = function (e) {
        var bmp = new egret.Bitmap(RES.getRes("mario_png"));
        this.addChild(bmp);
        //模糊滤镜，参数一为blurX，参数二位blurY
        var blurFilter = new egret.BlurFilter(20, 20);
        bmp.filters = [blurFilter];
    };
    return CBlurFilter;
}(egret.DisplayObjectContainer));
egret.registerClass(CBlurFilter,'CBlurFilter');
//# sourceMappingURL=CBlurFilter.js.map