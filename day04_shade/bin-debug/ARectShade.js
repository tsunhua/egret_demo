var ARectShade = (function (_super) {
    __extends(ARectShade, _super);
    function ARectShade() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=ARectShade,p=c.prototype;
    p.onAddToStage = function (e) {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        this.addChild(shp);
        var shp2 = new egret.Shape();
        shp2.graphics.beginFill(0x00ff00);
        shp2.graphics.drawCircle(0, 0, 20);
        shp2.graphics.endFill();
        this.addChild(shp2);
        shp2.x = 20;
        shp2.y = 20;
        // var rect: egret.Rectangle = new egret.Rectangle(20, 20, 30, 50);
        // shp.mask = rect;
    };
    return ARectShade;
}(egret.DisplayObjectContainer));
egret.registerClass(ARectShade,'ARectShade');
//# sourceMappingURL=ARectShade.js.map