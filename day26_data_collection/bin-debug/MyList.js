var MyList = (function (_super) {
    __extends(MyList, _super);
    function MyList() {
        _super.call(this);
    }
    var d = __define,c=MyList,p=c.prototype;
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        var exml = "<e:Skin xmlns:e=\"http://ns.egret.com/eui\" states=\"up,down\" height=\"50\"> <e:Label text=\"{data}\" textColor.down=\"0xFFFFFF\" textColor.up=\"0x666666\" horizontalCenter=\"0\" verticalCenter=\"0\"/> </e:Skin>";
        var list = new eui.List();
        list.dataProvider = new eui.ArrayCollection(["item1", "item2", "item3"]);
        this.addChild(list);
        list.selectedIndex = 1;
        list.addEventListener(eui.ItemTapEvent.ITEM_TAP, function () {
            //打印当前选中的一项
            console.log(list.selectedItem, list.selectedIndex);
            //打印当前选中的所有项目
            console.log(list.selectedIndices, list.selectedItems);
        }, this);
        //多选
        list.allowMultipleSelection = true;
        //要求至少选中一个
        list.requireSelection = true;
    };
    return MyList;
}(eui.Group));
egret.registerClass(MyList,'MyList');
//# sourceMappingURL=MyList.js.map