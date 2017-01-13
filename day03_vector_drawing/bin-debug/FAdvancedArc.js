///圆弧API的高级用法
var FAdvancedArc = (function (_super) {
    __extends(FAdvancedArc, _super);
    function FAdvancedArc() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=FAdvancedArc,p=c.prototype;
    p.onAddToStage = function (e) {
        // this.drawArc();
        // this.drawArch();
        // this.drawSector();
        // this.addChild(this.getArcProgress());
        this.addChild(this.getArchProgress());
    };
    //画弧
    p.drawArc = function () {
        var shp = new egret.Shape();
        shp.graphics.lineStyle(2, 0xffff00);
        shp.graphics.drawArc(50, 50, 50, 0, Math.PI / 180 * 30, false);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    //画拱形
    p.drawArch = function () {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawArc(50, 50, 50, 0, Math.PI / 180 * 60, false);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    //绘制扇形
    p.drawSector = function () {
        var r = 50;
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.moveTo(r, r);
        shape.graphics.lineTo(r * 2, r);
        shape.graphics.drawArc(r, r, r, 0, 260 * Math.PI / 180, false);
        shape.graphics.lineTo(r, r);
        shape.graphics.endFill();
        this.addChild(shape);
    };
    //绘制弧形进度条
    p.getArcProgress = function () {
        var shape = new egret.Shape();
        var angle = 0;
        egret.startTick(function (timeStamp) {
            angle += 1;
            changeGraphics(angle);
            angle = angle % 360;
            return true;
        }, this);
        function changeGraphics(angle) {
            shape.graphics.clear();
            shape.graphics.lineStyle(2, 0x0000ff, 1);
            shape.graphics.drawArc(50, 50, 50, 0, angle * Math.PI / 180, false);
            shape.graphics.endFill();
        }
        return shape;
    };
    //绘制扇形进度条
    p.getArchProgress = function () {
        var r = 50;
        var shape = new egret.Shape();
        shape.graphics.moveTo(r, r);
        var angle = 0;
        egret.startTick(function (timeStamp) {
            angle += 1;
            changeGraphics(angle);
            angle = angle % 360;
            return true;
        }, this);
        function changeGraphics(angle) {
            shape.graphics.clear();
            shape.graphics.beginFill(0x0000ff);
            // shape.graphics.lineStyle(2, 0x0000ff, 1);
            shape.graphics.drawArc(r, r, r, 0, angle * Math.PI / 180, false);
            shape.graphics.lineTo(r, r);
            shape.graphics.endFill();
        }
        return shape;
    };
    return FAdvancedArc;
}(egret.DisplayObjectContainer));
egret.registerClass(FAdvancedArc,'FAdvancedArc');
//# sourceMappingURL=FAdvancedArc.js.map