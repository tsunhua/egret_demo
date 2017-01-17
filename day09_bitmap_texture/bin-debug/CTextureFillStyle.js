///纹理填充方式
var CTextureFillStyle = (function (_super) {
    __extends(CTextureFillStyle, _super);
    function CTextureFillStyle() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=CTextureFillStyle,p=c.prototype;
    p.onAddToStage = function (e) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    p.onGroupComplete = function (e) {
        var img = new egret.Bitmap();
        img.texture = RES.getRes("box_png");
        img.fillMode = egret.BitmapFillMode.REPEAT;
        img.width *= 4;
        img.height *= 4;
        this.addChild(img);
    };
    return CTextureFillStyle;
}(egret.DisplayObjectContainer));
egret.registerClass(CTextureFillStyle,'CTextureFillStyle');
//# sourceMappingURL=CTextureFillStyle.js.map