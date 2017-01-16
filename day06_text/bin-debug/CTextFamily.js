var CTextFamily = (function (_super) {
    __extends(CTextFamily, _super);
    function CTextFamily() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=CTextFamily,p=c.prototype;
    p.onAddToStage = function (e) {
        var label = new egret.TextField();
        egret.TextField.default_fontFamily = "fonts/STHUPO.ttf";
        this.addChild(label);
        label.fontFamily = "KaiTi";
        label.text = "这是一个文本dfdf";
        ///--------------------以下自定义字体只在native中生效---------------------------------
        // egret.registerFontMapping("font1", "fonts/STXINGKA.TTF");
        egret.registerFontMapping("font1", "fonts/STHUPO.ttf");
        label.fontFamily = "font1";
    };
    return CTextFamily;
}(egret.DisplayObjectContainer));
egret.registerClass(CTextFamily,'CTextFamily');
//# sourceMappingURL=CTextFamily.js.map