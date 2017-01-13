var GDimmensionAndScale = (function (_super) {
    __extends(GDimmensionAndScale, _super);
    function GDimmensionAndScale() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=GDimmensionAndScale,p=c.prototype;
    p.onAddToStage = function (e) {
        var myGrid = new CMyGrid();
        this.addChild(myGrid);
        //缩放
        myGrid.scaleX = 2;
        myGrid.scaleY = 2;
        // myGrid.width = 50;
        // myGrid.height = 50;
        console.log("width:" + this.width + ",height:" + this.height);
    };
    return GDimmensionAndScale;
}(egret.DisplayObjectContainer));
egret.registerClass(GDimmensionAndScale,'GDimmensionAndScale');
//# sourceMappingURL=GDimmensionAndScale.js.map