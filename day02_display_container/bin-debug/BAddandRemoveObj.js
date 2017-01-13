var BAddandRemoveObj = (function (_super) {
    __extends(BAddandRemoveObj, _super);
    function BAddandRemoveObj() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=BAddandRemoveObj,p=c.prototype;
    p.onAddToStage = function (e) {
        var _this = this;
        var spr = new egret.Sprite();
        spr.graphics.beginFill(0x00ff00);
        spr.graphics.drawArc(100, 100, 50, 0, Math.PI, false);
        spr.graphics.endFill();
        this.addChild(spr);
        //点我消失
        spr.touchEnabled = true;
        spr.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (e.currentTarget.parent) {
                _this.removeChild(e.currentTarget);
            }
        }, this);
    };
    return BAddandRemoveObj;
}(egret.DisplayObjectContainer));
egret.registerClass(BAddandRemoveObj,'BAddandRemoveObj');
//# sourceMappingURL=BAddandRemoveObj.js.map