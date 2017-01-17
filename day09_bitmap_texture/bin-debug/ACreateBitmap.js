var ACreateBitmap = (function (_super) {
    __extends(ACreateBitmap, _super);
    function ACreateBitmap() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        //加载资源配置文件
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    }
    var d = __define,c=ACreateBitmap,p=c.prototype;
    p.onAddToStage = function (e) {
        var _this = this;
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, function (evt) {
            var img = new egret.Bitmap();
            img.texture = RES.getRes("bg_jpg");
            _this.addChild(img);
        }, this);
        // var img: egret.Bitmap = new egret.Bitmap();
        // img.texture = RES.getRes("bg_jpg");
    };
    return ACreateBitmap;
}(egret.DisplayObjectContainer));
egret.registerClass(ACreateBitmap,'ACreateBitmap');
//# sourceMappingURL=ACreateBitmap.js.map