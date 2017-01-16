var DateEvent = (function (_super) {
    __extends(DateEvent, _super);
    function DateEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        _super.call(this, type, bubbles, cancelable);
        this._year = 0;
        this._month = 0;
        this._date = 0;
        this._where = "";
        this._todo = "";
    }
    var d = __define,c=DateEvent,p=c.prototype;
    DateEvent.DATE = "约会";
    return DateEvent;
}(egret.Event));
egret.registerClass(DateEvent,'DateEvent');
