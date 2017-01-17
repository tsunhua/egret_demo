var EScreenShot = (function (_super) {
    __extends(EScreenShot, _super);
    function EScreenShot() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=EScreenShot,p=c.prototype;
    p.onAddToStage = function (e) {
        var _this = this;
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
        this.touchEnabled = true;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            //进行截屏
            var renderTextTure = new egret.RenderTexture();
            renderTextTure.drawToTexture(_this);
            var bmp = new egret.Bitmap(renderTextTure);
            bmp.width *= 2;
            bmp.height *= 2;
            _this.addChild(bmp);
            //截取Texture成base64编码的字符串
            var base64 = renderTextTure.toDataURL("image/png", new egret.Rectangle(0, 0, 100, 100));
            console.log(base64);
            //保存到文件
            //不知道为什么，保存文件的功能失效了
            renderTextTure.saveToFile("image/png", "screen_shot.png", new egret.Rectangle(0, 0, 100, 100));
        }, this);
    };
    p.onGroupComplete = function (e) {
        var img = new egret.Bitmap();
        img.texture = RES.getRes("egret_icon_png");
        this.addChild(img);
    };
    return EScreenShot;
}(egret.DisplayObjectContainer));
egret.registerClass(EScreenShot,'EScreenShot');
//# sourceMappingURL=EScreenShot.js.map