var EPosition = (function (_super) {
    __extends(EPosition, _super);
    function EPosition() {
        _super.call(this);
        //当ADDED_TO_STAGE事件发生时，执行onAddToStage方法
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=EPosition,p=c.prototype;
    p.onAddToStage = function (event) {
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
        var _this = this;
        var draggedObject;
        var offsetX;
        var offsetY;
        var circle = new egret.Shape();
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(25, 25, 25);
        circle.graphics.endFill();
        this.addChild(circle);
        circle.touchEnabled = true;
        // circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this);
        circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            //记录手指按到的对象
            draggedObject = e.currentTarget;
            offsetX = e.stageX - circle.x;
            offsetY = e.stageY - circle.y;
            //将触摸的对象置于容器顶层
            _this.addChild(draggedObject);
            _this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, _this);
        }, this);
        circle.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this);
        function stopMove(e) {
            console.log("stopMove");
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        function onMove(e) {
            draggedObject.x = e.stageX - offsetX;
            draggedObject.y = e.stageY - offsetY;
        }
    };
    return EPosition;
}(egret.DisplayObjectContainer));
egret.registerClass(EPosition,'EPosition');
//# sourceMappingURL=EPosition.js.map