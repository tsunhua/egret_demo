var MyTabBar = (function (_super) {
    __extends(MyTabBar, _super);
    function MyTabBar() {
        _super.call(this);
    }
    var d = __define,c=MyTabBar,p=c.prototype;
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        var exml = "\n        <e:Skin xmlns:e=\"http://ns.egret.com/eui\" states=\"up,down\" height=\"50\"> \n            <e:Label text=\"{data}\" textColor.down=\"0xFFFFFF\" textColor.up=\"0x666666\" horizontalCenter=\"0\" verticalCenter=\"0\"/> \n        </e:Skin>";
        var tabBar = new eui.TabBar();
        //以下是结合ViewStack使用
        // var viewStack = new eui.ViewStack();
        // viewStack.y = 100;
        // for (var i: number = 0; i < 3; i++) {
        // 	var group: eui.Group = new eui.Group();
        // 	//设置在name属性上的文本会被tabBar识别作为标题
        // 	group.name = "Group" + i;
        // 	var btn: eui.Button = new eui.Button();
        // 	btn.label = "Button" + i;
        // 	group.addChild(btn);
        // 	viewStack.addChild(group);
        // }
        // tabBar.dataProvider = viewStack;
        // tabBar.itemRendererSkinName = exml;
        // viewStack.selectedIndex = 1;
        // this.addChild(viewStack);
        // this.addChild(tabBar);
        //结合ArrayCollection使用
        tabBar.dataProvider = new eui.ArrayCollection(["tab1", "tab2", "tab3"]);
        tabBar.itemRendererSkinName = exml;
        this.addChild(tabBar);
        tabBar.addEventListener(eui.ItemTapEvent.ITEM_TAP, function (e) {
            console.log(e.itemIndex);
        }, this);
    };
    return MyTabBar;
}(eui.Group));
egret.registerClass(MyTabBar,'MyTabBar');
//# sourceMappingURL=MyTabBar.js.map