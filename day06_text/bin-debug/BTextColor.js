var BTextColor = (function (_super) {
    __extends(BTextColor, _super);
    function BTextColor() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=BTextColor,p=c.prototype;
    p.onAddToStage = function (e) {
        egret.TextField.default_textColor = 0xffff00;
        var label = new egret.TextField();
        this.addChild(label);
        label.width = 70;
        label.height = 100;
        // label.textColor = 0xff0000;
        label.text = "这是一个文本";
    };
    return BTextColor;
}(egret.DisplayObjectContainer));
egret.registerClass(BTextColor,'BTextColor');
//# sourceMappingURL=BTextColor.js.map