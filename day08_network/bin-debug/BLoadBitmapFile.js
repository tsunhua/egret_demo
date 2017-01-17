var BLoadBitmapFile = (function (_super) {
    __extends(BLoadBitmapFile, _super);
    function BLoadBitmapFile() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=BLoadBitmapFile,p=c.prototype;
    p.onAddToStage = function (e) {
        var imgLoader = new egret.ImageLoader();
        imgLoader.once(egret.Event.COMPLETE, this.onImgLoadCompleted, this);
        imgLoader.load("resource/assets/bg.jpg");
    };
    p.onImgLoadCompleted = function (evt) {
        var loader = evt.currentTarget;
        var bmd = loader.data;
        var bmp = new egret.Bitmap(bmd);
        this.addChild(bmp);
    };
    return BLoadBitmapFile;
}(egret.DisplayObjectContainer));
egret.registerClass(BLoadBitmapFile,'BLoadBitmapFile');
//# sourceMappingURL=BLoadBitmapFile.js.map