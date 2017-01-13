var IBevell = (function (_super) {
    __extends(IBevell, _super);
    function IBevell() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=IBevell,p=c.prototype;
    p.onAddToStage = function (e) {
        var myGrid = new CMyGrid();
        this.addChild(myGrid);
        myGrid.skewX = 10;
        myGrid.skewY = 10;
    };
    return IBevell;
}(egret.DisplayObjectContainer));
egret.registerClass(IBevell,'IBevell');
//# sourceMappingURL=IBevell.js.map