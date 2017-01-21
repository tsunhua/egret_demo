var MyScroller = (function (_super) {
    __extends(MyScroller, _super);
    function MyScroller() {
        _super.call(this);
    }
    var d = __define,c=MyScroller,p=c.prototype;
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        //显示大图
        // var group = new eui.Group();
        // var img = new eui.Image("resource/assets/bg.jpg");
        // group.addChild(img);
        // var scroller = new eui.Scroller();
        // scroller.width = 400;
        // scroller.height = 400;
        // scroller.viewport = group;
        // this.addChild(scroller);
        // scroller.viewport.scrollV = 200;
        // scroller.viewport.scrollH = 200;
        //创建一个列表
        var list = new eui.List();
        list.dataProvider = new eui.ArrayCollection([1, 2, 2, 3, 4, 5, 6]);
        var scroller = new eui.Scroller();
        scroller.height = 160;
        scroller.viewport = list;
        this.addChild(scroller);
        //初始化
        scroller.viewport.validateNow();
        scroller.viewport.scrollV = 40;
        //添加滚动监听器
        scroller.addEventListener(eui.UIEvent.CHANGE, function () {
            //根据滚动距离 + 滚动区域高度 与 滚动内容的高度进行比较
            if ((scroller.viewport.scrollV + scroller.height) >= scroller.viewport.contentHeight) {
                egret.log("滑动到底部了 ");
            }
        }, this);
        //设置滚动条的可见性
        scroller.verticalScrollBar.autoVisibility = false;
        scroller.verticalScrollBar.visible = false;
        // var btn = new eui.Button();
        // btn.x = 20;
        // btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        // 	scroller.viewport.scrollV += 10;
        // 	if ((scroller.viewport.scrollV + scroller.height) >= scroller.viewport.contentHeight) {
        // 		egret.log("滑动到底部了 ");
        // 	}
        // }, this);
        // this.addChild(btn);
    };
    return MyScroller;
}(eui.Group));
egret.registerClass(MyScroller,'MyScroller');
//# sourceMappingURL=MyScroller.js.map