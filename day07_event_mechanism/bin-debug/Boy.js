var Boy = (function (_super) {
    __extends(Boy, _super);
    function Boy() {
        _super.call(this);
    }
    var d = __define,c=Boy,p=c.prototype;
    p.order = function () {
        var dateEvent = new DateEvent(DateEvent.DATE);
        dateEvent._year = 2017;
        dateEvent._month = 1;
        dateEvent._date = 10;
        dateEvent._where = "白云山";
        dateEvent._todo = "看星星";
        this.dispatchEvent(dateEvent);
    };
    return Boy;
}(egret.Sprite));
egret.registerClass(Boy,'Boy');
