var GCancelTouchTest = (function (_super) {
    __extends(GCancelTouchTest, _super);
    function GCancelTouchTest() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=GCancelTouchTest,p=c.prototype;
    p.onAddToStage = function (e) {
        //TODO：取消触摸事件留到学习eui扩展库的时候再学习之
        // var scroller = new eui.List();
    };
    return GCancelTouchTest;
}(egret.DisplayObjectContainer));
egret.registerClass(GCancelTouchTest,'GCancelTouchTest');
