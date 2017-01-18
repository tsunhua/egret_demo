///帧事件：将在进入新的一帧即下一帧开始时回调，故其回调速率跟帧率有关
///帧率fps：每秒显示的帧数
///而帧事件是获取两帧之间经过的时长pass
///因此, 1000/pass 即为帧率fps
///帧率的修改请在index.html文件找 `data-frame-rate="60"` 
var CEnterFrame = (function (_super) {
    __extends(CEnterFrame, _super);
    function CEnterFrame() {
        _super.call(this);
        this.timeOnEnterFrame = 0;
        this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
    }
    var d = __define,c=CEnterFrame,p=c.prototype;
    p.onLoad = function (e) {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timeOnEnterFrame = egret.getTimer();
    };
    p.onEnterFrame = function (e) {
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
        var fps = 1000 / pass;
        console.log("fps :" + fps.toFixed(5));
        this.timeOnEnterFrame = egret.getTimer();
    };
    return CEnterFrame;
}(egret.DisplayObjectContainer));
egret.registerClass(CEnterFrame,'CEnterFrame');
//# sourceMappingURL=CEnterFrame.js.map