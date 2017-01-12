/// 创建自己的显示对象类
var MyGrid = (function (_super) {
    __extends(MyGrid, _super);
    function MyGrid() {
        _super.call(this);
        this.drawGrid();
    }
    var d = __define,c=MyGrid,p=c.prototype;
    p.drawGrid = function () {
        //指定填充色开始填充
        this.graphics.beginFill(0x000ff);
        //绘制矩形，指定位置和宽高
        this.graphics.drawRect(0, 0, 50, 50);
        //结束填充
        this.graphics.endFill();
        this.graphics.beginFill(0x000ff);
        this.graphics.drawRect(50, 50, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(50, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(0, 50, 50, 50);
        this.graphics.endFill();
    };
    return MyGrid;
}(egret.Shape));
egret.registerClass(MyGrid,'MyGrid');
//# sourceMappingURL=MyGrid.js.map