///九宫格的处理思路跟Android中的点9图类似，保护边角，设置内容填充或可拉伸区域
///这里使用代码控制，需要手动测量或者说在出图时标注像素大小，否则难以精确控制
var BNinePatch = (function (_super) {
    __extends(BNinePatch, _super);
    function BNinePatch() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=BNinePatch,p=c.prototype;
    p.onAddToStage = function (e) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupCompleted, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    p.onGroupCompleted = function (evt) {
        var img = new egret.Bitmap();
        img.texture = RES.getRes("box_png");
        img.width *= 2;
        this.addChild(img);
        var img2 = new egret.Bitmap();
        img2.texture = RES.getRes("box_png");
        var rect = new egret.Rectangle(30, 31, 40, 41);
        img2.scale9Grid = rect;
        img2.width *= 2;
        img2.y = 150;
        this.addChild(img2);
    };
    return BNinePatch;
}(egret.DisplayObjectContainer));
egret.registerClass(BNinePatch,'BNinePatch');
//# sourceMappingURL=BNinePatch.js.map