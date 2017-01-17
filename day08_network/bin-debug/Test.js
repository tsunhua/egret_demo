var Test = (function (_super) {
    __extends(Test, _super);
    function Test() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Test,p=c.prototype;
    p.onAddToStage = function (e) {
    };
    return Test;
}(egret.DisplayObjectContainer));
egret.registerClass(Test,'Test');
//# sourceMappingURL=Test.js.map