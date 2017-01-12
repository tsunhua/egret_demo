var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        //当ADDED_TO_STAGE事件发生时，执行onAddToStage方法
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0x00ff00);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        //改变矩形的位置（左上角顶点）
        shp.x = 100;
        shp.y = 100;
        //修改锚点的位置
        shp.anchorOffsetX = 50;
        shp.anchorOffsetY = 50;
        this.addChild(shp);
        // this.changePosition();
        this.moveObjectByTouch();
    };
    //改变显示对象相对于舞台的位置
    p.changePosition = function () {
        var container = new egret.DisplayObjectContainer();
        container.x = 200;
        container.y = 200;
        this.addChild(container);
        var circle = new egret.Shape();
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(25, 25, 25);
        circle.graphics.endFill();
        container.addChild(circle);
        circle.touchEnabled = true;
        circle.addEventListener(egret.TouchEvent.TOUCH_TAP, onclick, this);
        function onclick() {
            //globalToLocal方法：将全局坐标位置点转换为当前显示对象坐标系中的点位置
            //与之对应的还有localToGlobal方法
            var targetPoint = container.globalToLocal(0, 0);
            circle.x = targetPoint.x;
            circle.y = targetPoint.y;
        }
    };
    //通过触摸移动显示对象
    p.moveObjectByTouch = function () {
        var offsetX;
        var offsetY;
        var circle = new egret.Shape();
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(25, 25, 25);
        circle.graphics.endFill();
        this.addChild(circle);
        circle.touchEnabled = true;
        circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this);
        circle.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this);
        function startMove(e) {
            offsetX = e.stageX - circle.x;
            offsetY = e.stageY - circle.y;
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        function stopMove(e) {
            console.log("stopMove");
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        function onMove(e) {
            circle.x = e.stageX - offsetX;
            circle.y = e.stageY - offsetY;
        }
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map