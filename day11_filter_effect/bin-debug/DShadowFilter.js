var DShadowFilter = (function (_super) {
    __extends(DShadowFilter, _super);
    function DShadowFilter() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=DShadowFilter,p=c.prototype;
    p.onAddToStage = function (e) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    p.onGroupComplete = function (e) {
        //白色背景
        var bg = new egret.Sprite();
        bg.graphics.beginFill(0xffffff);
        bg.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        bg.graphics.endFill();
        this.addChild(bg);
        var bmp = new egret.Bitmap(RES.getRes("mario_png"));
        this.addChild(bmp);
        //投影滤镜
        var shadowFilter = new egret.DropShadowFilter(10, 45, 0x000000, 0.7, 16, 16, 0.6, 1 /* LOW */, false, false);
        bmp.filters = [shadowFilter];
    };
    return DShadowFilter;
}(egret.DisplayObjectContainer));
egret.registerClass(DShadowFilter,'DShadowFilter');
//# sourceMappingURL=DShadowFilter.js.map