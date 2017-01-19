//FPS面板
//开启：在index.html中 ` data-show-fps="true"`
//设置样式：在index.html中 `data-show-fps-style="x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9"`
//组成：
//1. FPS区域：
//	显示模式状态，WebGL 还是 Canvas。
//	当前的100秒内的最大帧频，最小帧频和平均帧频。
//	动态的柱状图的方式绘制了100秒的帧频数据。
//2. Draw Dirty区域：
// 	Draw: 每帧 draw 方法调用的平均次数
// 	Dirty: 脏区域占舞台的百分比
//3. Cost区域
// 	蓝色：表示 Ticker 和 EnterFrame 阶段消耗的时间
// 	黄色：表示事件处理和矩阵运算阶段消耗的时间
// 	红色：表示绘制显示对象阶段消耗的时间
//	在数字下方，和 FPS 区域一样，同样用图形绘制了33秒内的数据变化情况
var DFpsPanel = (function (_super) {
    __extends(DFpsPanel, _super);
    function DFpsPanel() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=DFpsPanel,p=c.prototype;
    p.onAddToStage = function (e) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    p.onResGroupComplete = function (e) {
        var bmp = new egret.Bitmap(RES.getRes("bg_jpg"));
        this.addChild(bmp);
        var icon = new egret.Bitmap(RES.getRes("egret_icon_png"));
        this.addChild(icon);
        egret.startTick(function (timeStamp) {
            icon.x++;
            return true;
        }, this);
    };
    return DFpsPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(DFpsPanel,'DFpsPanel');
//# sourceMappingURL=DFpsPanel.js.map