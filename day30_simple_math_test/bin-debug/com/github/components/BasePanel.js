var BasePanel = (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        _super.call(this);
        GameManager.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
        this.onResize();
    }
    var d = __define,c=BasePanel,p=c.prototype;
    p.onResize = function () {
        this.onResizeHandler();
    };
    p.onResizeHandler = function () {
        this.height = GameManager.stage.stageHeight;
    };
    p.childrenCreated = function () {
        LayerManager.fixScreen();
        this.init();
    };
    p.init = function () {
        //入口，需要子类覆盖
    };
    return BasePanel;
}(eui.Component));
egret.registerClass(BasePanel,'BasePanel');
//# sourceMappingURL=BasePanel.js.map