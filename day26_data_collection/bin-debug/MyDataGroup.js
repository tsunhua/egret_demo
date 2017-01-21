var MyDataGroup = (function (_super) {
    __extends(MyDataGroup, _super);
    function MyDataGroup() {
        _super.call(this);
    }
    var d = __define,c=MyDataGroup,p=c.prototype;
    p.createChildren = function () {
        //创建数据集合
        var sourceArr = [];
        for (var i = 0; i < 5; i++) {
            sourceArr.push({ label: "item" + i });
        }
        var myColection = new eui.ArrayCollection(sourceArr);
        //创建dataGroup实例
        var dataGroup = new eui.DataGroup();
        dataGroup.dataProvider = myColection;
        dataGroup.percentWidth = 100;
        dataGroup.percentHeight = 100;
        this.addChild(dataGroup);
        dataGroup.useVirtualLayout = true;
        //设置数据项渲染器
        dataGroup.itemRenderer = LabelRenderer;
    };
    return MyDataGroup;
}(eui.Group));
egret.registerClass(MyDataGroup,'MyDataGroup');
//# sourceMappingURL=MyDataGroup.js.map