var ATimer = (function (_super) {
    __extends(ATimer, _super);
    function ATimer() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=ATimer,p=c.prototype;
    p.onAddToStage = function (e) {
        var timer = new egret.Timer(1000, 6);
        var btn = new egret.TextField();
        btn.background = true;
        btn.backgroundColor = 0x0000aa;
        btn.textAlign = egret.HorizontalAlign.CENTER;
        btn.verticalAlign = egret.VerticalAlign.MIDDLE;
        btn.size = 30;
        btn.width = 200;
        btn.height = 100;
        btn.text = "开始计时";
        this.addChild(btn);
        btn.touchEnabled = true;
        var currentNumber = 5;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            console.log("timer start");
            timer.start();
            btn.text = currentNumber + "";
        }, this);
        timer.addEventListener(egret.TimerEvent.TIMER, function (e) {
            console.log("timer...");
            currentNumber--;
            btn.text = currentNumber + "";
        }, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function (e) {
            console.log("timer completed");
            btn.text = "计时结束";
            btn.touchEnabled = false;
        }, this);
    };
    return ATimer;
}(egret.DisplayObjectContainer));
egret.registerClass(ATimer,'ATimer');
//# sourceMappingURL=ATimer.js.map