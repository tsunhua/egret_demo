var ECustomLayout = (function (_super) {
    __extends(ECustomLayout, _super);
    function ECustomLayout() {
        _super.call(this);
        this.myGroup = new eui.Group();
        this.addChild(this.myGroup);
        this.myGroup.horizontalCenter = 0;
        this.myGroup.layout = new uiLayout.RingLayout();
        this.myGroup.width = 600;
        this.myGroup.height = 600;
        this.addChild(this.myGroup);
        for (var i = 0; i < 12; i++) {
            var btn = new eui.Button();
            btn.width = 100;
            btn.height = 50;
            btn.label = "Button " + i;
            this.myGroup.addChild(btn);
        }
    }
    var d = __define,c=ECustomLayout,p=c.prototype;
    return ECustomLayout;
}(egret.Sprite));
egret.registerClass(ECustomLayout,'ECustomLayout');
//# sourceMappingURL=ECustomLayout.js.map