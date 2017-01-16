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
        // this.addChild(this.getArchProgress());
        this.addChild(this.getBorderProgress());
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
    //绘制不规则边框进度条
    //没有效果
    p.drawBorderProgress = function () {
        var container = new egret.DisplayObjectContainer();
        var w = 400;
        var h = 400;
        var r = Math.max(w, h) / 2 * 1.5;
        var bitmap = new egret.Bitmap(RES.getRes("key_png"));
        container.addChild(bitmap);
        bitmap.width = w;
        bitmap.height = h;
        var shape = new egret.Shape();
        shape.x = bitmap.width / 2;
        shape.y = bitmap.height / 2;
        bitmap.mask = shape;
        container.addChild(shape);
        // var loader: egret.ImageLoader = new egret.ImageLoader();
        // loader.addEventListener(egret.Event.COMPLETE, (e: egret.Event) => {
        // 	bitmap.bitmapData = loader.data;
        // }, this);
        // loader.load("resource/assets/bg.jpg");
        var angle = 0;
        egret.startTick(function (timeStamp) {
            angle += 1;
            changeGraphics(angle);
            angle = angle % 360;
            return true;
        }, this);
        return container;
        function changeGraphics(angle) {
            shape.graphics.clear();
            shape.graphics.beginFill(0x00ffff, 1);
            shape.graphics.lineTo(r, 0);
            shape.graphics.drawArc(0, 0, r, 0, angle / Math.PI / 180, true);
            shape.graphics.lineTo(0, 0);
            shape.graphics.endFill();
        }
    };
    p.getBorderProgress = function () {
        var container = new egret.DisplayObjectContainer();
        //首先绘制一个封闭的矩形边框
        var rect = new egret.Shape();
        // rect.graphics.beginFill(0xffff00);
        rect.graphics.lineStyle(2, 0xffff00);
        rect.graphics.drawRoundRect(0, 0, 200, 400, 20, 20);
        rect.graphics.endFill();
        this.addChild(rect);
        //绘制灰色的遮罩层
        var mask = new egret.Shape();
        mask.graphics.moveTo(100, 200);
        rect.mask = mask;
        container.addChild(mask);
        //进行进度展示
        var angle = 0;
        egret.startTick(function (timeStamp) {
            angle = angle + 2;
            changeGraphics(angle);
            angle = angle % 360;
            return true;
        }, this);
        function changeGraphics(angle) {
            mask.graphics.clear();
            mask.graphics.beginFill(0x00ffff);
            mask.graphics.drawArc(100, 200, 240, 0, angle * Math.PI / 180, false);
            mask.graphics.lineTo(100, 200);
            mask.graphics.endFill();
        }
        return container;
    };
    return FAdvancedArc;
}(egret.DisplayObjectContainer));
egret.registerClass(FAdvancedArc,'FAdvancedArc');
//# sourceMappingURL=FAdvancedArc.js.map