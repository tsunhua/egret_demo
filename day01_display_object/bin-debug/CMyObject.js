var CMyObject = (function (_super) {
    __extends(CMyObject, _super);
    function CMyObject() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=CMyObject,p=c.prototype;
    p.onAddToStage = function (e) {
        var myGrid = new CMyGrid();
        this.addChild(myGrid);
    };
    return CMyObject;
}(egret.DisplayObjectContainer));
egret.registerClass(CMyObject,'CMyObject');
//# sourceMappingURL=CMyObject.js.map