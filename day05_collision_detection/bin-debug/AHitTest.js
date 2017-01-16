var AHitTest = (function (_super) {
    __extends(AHitTest, _super);
    function AHitTest() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=AHitTest,p=c.prototype;
    p.onAddToStage = function (e) {
        this.drawText();
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawCircle(100, 100, 100);
        shp.graphics.endFill();
        // shp.width = 100;
        // shp.height = 100;
        this.addChild(shp);
        //true:精准检测, 测量矩形容器是否包含一点;
        //false:非精准检测, 测量矩形容器中的图案是否包含一点
        var isHit = shp.hitTestPoint(200, 200, true);
        this.infoText.text = "碰撞结果: " + isHit;
    };
    p.drawText = function () {
        this.infoText = new egret.TextField();
        this.infoText.y = 200;
        this.infoText.text = "碰撞结果";
        this.addChild(this.infoText);
    };
    return AHitTest;
}(egret.DisplayObjectContainer));
egret.registerClass(AHitTest,'AHitTest');
//# sourceMappingURL=AHitTest.js.map