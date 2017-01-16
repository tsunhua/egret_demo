var AUseText = (function (_super) {
    __extends(AUseText, _super);
    /**
     * 普通文本：用于显示标准文本内容的文本类型。
     * 输入文本：允许用户输入的文本类型。
     * 位图文本：借助位图字体渲染的文本类型。
     */
    function AUseText() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=AUseText,p=c.prototype;
    p.onAddToStage = function (e) {
        // egret.TextField.default_size = 48;
        var label = new egret.TextField();
        label.text = "这是一个文本这是一个文本这是一个文本这是一个文本这是一个文本这是一个文本这是一个文本这是一个文本这是一个文本这是一个文本";
        // label.size = 56;
        this.addChild(label);
    };
    return AUseText;
}(egret.DisplayObjectContainer));
egret.registerClass(AUseText,'AUseText');
//# sourceMappingURL=AUseText.js.map