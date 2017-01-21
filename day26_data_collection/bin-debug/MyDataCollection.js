var MyDataCollection = (function (_super) {
    __extends(MyDataCollection, _super);
    function MyDataCollection() {
        _super.call(this);
    }
    var d = __define,c=MyDataCollection,p=c.prototype;
    p.createChildren = function () {
        var sourceArr = [
            { name: "one", value: 1 },
            { name: "two", value: 2 }
        ];
        var myCollection = new eui.ArrayCollection(sourceArr);
        myCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, function (e) {
            console.log("数据已经改变：" + e.kind + ", " + e.target.length);
        }, this);
        var itemData = { name: "three", value: 3 };
        //添加
        myCollection.addItem(itemData);
        myCollection.addItemAt({ name: "zero", value: 0 }, 0);
        console.log(myCollection.getItemAt(0).name); //根据索引位置获取某一项数据
        console.log(myCollection.getItemIndex(itemData)); //获取某一项数据所在的索引值
        console.log(myCollection.length); //获取数组长度
        //替换
        myCollection.replaceItemAt({ name: "dlds", value: -1 }, 0);
        //删除
        myCollection.removeItemAt(0);
        myCollection.removeAll();
    };
    return MyDataCollection;
}(eui.Group));
egret.registerClass(MyDataCollection,'MyDataCollection');
//# sourceMappingURL=MyDataCollection.js.map