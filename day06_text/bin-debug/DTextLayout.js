///文本布局
var DTextLayout = (function (_super) {
    __extends(DTextLayout, _super);
    function DTextLayout() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=DTextLayout,p=c.prototype;
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
        label.text = "这是一个文本";
        // label.textAlign = egret.HorizontalAlign.RIGHT;
        // label.textAlign = egret.HorizontalAlign.CENTER;
        // label.verticalAlign = egret.VerticalAlign.BOTTOM;
        label.verticalAlign = egret.VerticalAlign.MIDDLE;
    };
    return DTextLayout;
}(egret.DisplayObjectContainer));
egret.registerClass(DTextLayout,'DTextLayout');
//# sourceMappingURL=DTextLayout.js.map