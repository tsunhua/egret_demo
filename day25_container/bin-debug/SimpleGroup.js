var SimpleGroup = (function (_super) {
    __extends(SimpleGroup, _super);
    function SimpleGroup() {
        _super.call(this);
    }
    var d = __define,c=SimpleGroup,p=c.prototype;
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        // var btn: eui.Button = new eui.Button();
        // btn.label = "按钮";
        // this.addChild(btn);
        this.layoutContents();
    };
    p.layoutContents = function () {
        this.width = 500;
        this.height = 300;
        var line = new egret.Shape();
        line.graphics.lineStyle(4, 0xee0000);
        line.graphics.beginFill(0xffffff, 0);
        line.graphics.drawRect(0, 0, this.width, this.height);
        line.graphics.endFill();
        this.addChild(line);
        for (var i = 0; i < 4; i++) {
            var btn = new eui.Button();
            btn.label = "button" + i;
            btn.x = 10 + i * 30;
            btn.y = 10 + i * 30;
            this.addChild(btn);
        }
        this.layout = new eui.VerticalLayout();
    };
    return SimpleGroup;
}(eui.Group));
egret.registerClass(SimpleGroup,'SimpleGroup');
//# sourceMappingURL=SimpleGroup.js.map