var ETextStyle = (function (_super) {
    __extends(ETextStyle, _super);
    function ETextStyle() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=ETextStyle,p=c.prototype;
    p.onAddToStage = function (e) {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawRect(0, 0, 400, 400);
        shape.graphics.endFill();
        this.addChild(shape);
        var label = new egret.TextField();
        this.addChild(label);
        label.width = 400;
        label.height = 400;
        label.text = "這是一個文本";
        label.textAlign = egret.HorizontalAlign.CENTER;
        label.verticalAlign = egret.VerticalAlign.MIDDLE;
        //描邊
        label.strokeColor = 0x0000ff;
        label.stroke = 2;
        //文本加粗与斜体
        label.bold = true;
        label.italic = true;
    };
    return ETextStyle;
}(egret.DisplayObjectContainer));
egret.registerClass(ETextStyle,'ETextStyle');
//# sourceMappingURL=ETextStyle.js.map