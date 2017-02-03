var EndGamePanel = (function (_super) {
    __extends(EndGamePanel, _super);
    function EndGamePanel() {
        _super.call(this);
        this.skinName = "EndGamePanelSkin";
    }
    var d = __define,c=EndGamePanel,p=c.prototype;
    p.init = function () {
        var _this = this;
        this.againBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            LayerManager.gameLayer.removeChild(_this);
            var game = new GamePanel();
            LayerManager.gameLayer.addChild(game);
        }, this);
    };
    p.setResult = function (desc, score, title) {
        this.scoreTxt.text = "总分：" + score;
        this.descTxt.text = desc;
        this.titleTxt.text = "头衔：" + title;
    };
    return EndGamePanel;
}(BasePanel));
egret.registerClass(EndGamePanel,'EndGamePanel');
//# sourceMappingURL=EndGamePanel.js.map