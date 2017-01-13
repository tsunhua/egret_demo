var HRotation = (function (_super) {
    __extends(HRotation, _super);
    function HRotation() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=HRotation,p=c.prototype;
    p.onAddToStage = function (e) {
        var myGrid = new CMyGrid();
        this.addChild(myGrid);
        myGrid.rotation = 45;
        //附赠：平移以显示所有
        var transX = Math.sqrt(2) * 50;
        myGrid.x += transX;
    };
    return HRotation;
}(egret.DisplayObjectContainer));
egret.registerClass(HRotation,'HRotation');
//# sourceMappingURL=HRotation.js.map