var AMyDisplayContainer = (function (_super) {
    __extends(AMyDisplayContainer, _super);
    function AMyDisplayContainer() {
        _super.call(this);
        this.drawChild();
    }
    var d = __define,c=AMyDisplayContainer,p=c.prototype;
    p.drawChild = function () {
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(0, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0x00ff00);
        this.graphics.drawRect(50, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(50, 50, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0x00ff00);
        this.graphics.drawRect(0, 50, 50, 50);
        this.graphics.endFill();
    };
    return AMyDisplayContainer;
}(egret.Sprite));
egret.registerClass(AMyDisplayContainer,'AMyDisplayContainer');
//# sourceMappingURL=AMyDisplayContainer.js.map