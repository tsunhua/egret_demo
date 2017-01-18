var BTicker = (function (_super) {
    __extends(BTicker, _super);
    function BTicker() {
        _super.call(this);
        this.speed = 0.05;
        this.time = 0;
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=BTicker,p=c.prototype;
    p.onAddToStage = function (e) {
        var _this = this;
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, function () {
            var star = new egret.Bitmap(RES.getRes("star_png"));
            _this.addChild(star);
            _this.star = star;
            _this.time = egret.getTimer();
            egret.startTick(_this.moveStar, _this);
            _this.star.touchEnabled = true;
            _this.star.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                egret.stopTick(_this.moveStar, _this);
            }, _this);
        }, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    p.moveStar = function (timeStamp) {
        var now = timeStamp;
        var time = this.time;
        var pass = now - time;
        //取小数点后五位
        console.log("moveStar: ", (1000 / pass).toFixed(5));
        this.star.x = (1000 / pass);
        this.time = now;
        return false;
    };
    return BTicker;
}(egret.DisplayObjectContainer));
egret.registerClass(BTicker,'BTicker');
//# sourceMappingURL=BTicker.js.map