var LabelRenderer = (function (_super) {
    __extends(LabelRenderer, _super);
    function LabelRenderer() {
        _super.call(this);
        this.touchChildren = true;
        this.labelDisplay = new eui.Label();
        this.addChild(this.labelDisplay);
    }
    var d = __define,c=LabelRenderer,p=c.prototype;
    p.dataChanged = function () {
        this.labelDisplay.text = this.data.label;
    };
    return LabelRenderer;
}(eui.ItemRenderer));
egret.registerClass(LabelRenderer,'LabelRenderer');
//# sourceMappingURL=LabelRenderer.js.map