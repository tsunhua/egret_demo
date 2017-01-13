var DAccessChild = (function (_super) {
    __extends(DAccessChild, _super);
    function DAccessChild() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=DAccessChild,p=c.prototype;
    p.onAddToStage = function (e) {
        var spr1 = new egret.Sprite();
        spr1.graphics.beginFill(0xff0000);
        spr1.graphics.drawRect(0, 0, 100, 100);
        spr1.graphics.endFill();
        spr1.name = "red";
        this.addChild(spr1);
        var spr2 = new egret.Sprite();
        spr2.graphics.beginFill(0x00ff00);
        spr2.graphics.drawRect(40, 0, 100, 100);
        spr2.graphics.endFill();
        spr2.name = "green";
        this.addChild(spr2);
        //通过深度获取子对象
        //并调整其透明度
        var green = this.getChildAt(1);
        green.alpha = 0.6;
        var red = this.getChildByName("red");
        red.alpha = 0.4;
    };
    return DAccessChild;
}(egret.DisplayObjectContainer));
egret.registerClass(DAccessChild,'DAccessChild');
//# sourceMappingURL=DAccessChild.js.map