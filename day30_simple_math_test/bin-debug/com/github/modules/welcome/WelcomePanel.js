var WelcomePanel = (function (_super) {
    __extends(WelcomePanel, _super);
    function WelcomePanel() {
        _super.call(this);
        this.skinName = "WelcomePanelSkin";
    }
    var d = __define,c=WelcomePanel,p=c.prototype;
    p.init = function () {
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGame, this);
    };
    p.onStartGame = function (event) {
        LayerManager.gameLayer.removeChild(this);
        var game = new GamePanel();
        LayerManager.gameLayer.addChild(game);
    };
    return WelcomePanel;
}(BasePanel));
egret.registerClass(WelcomePanel,'WelcomePanel');
//# sourceMappingURL=WelcomePanel.js.map