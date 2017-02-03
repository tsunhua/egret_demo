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
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showMask, this);
    };
    p.setResult = function (desc, score, title) {
        this.scoreTxt.text = "总分：" + score;
        this.descTxt.text = desc;
        this.titleTxt.text = "头衔：" + title;
        var msg = "获得" + score + "分，收获" + title + "称号，" + desc;
        share(msg);
    };
    p.showMask = function () {
        if (this.sp == null) {
            this.sp = new egret.Sprite();
            this.shareTip = new egret.Bitmap();
            this.shareTip.texture = RES.getRes("share_tip_png");
            this.shareTip.x = GameManager.stage.stageWidth - 320;
            this.sp.addChild(this.shareTip);
        }
        this.sp.graphics.clear();
        this.sp.graphics.beginFill(0x000000, 0.7);
        this.sp.touchEnabled = true;
        this.sp.graphics.drawRect(0, 0, GameManager.stage.stageWidth, GameManager.stage.stageHeight);
        this.sp.graphics.endFill();
        this.sp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancle, this);
        LayerManager.alertLayer.addChild(this.sp);
    };
    p.onCancle = function (event) {
        LayerManager.alertLayer.removeChild(this.sp);
    };
    return EndGamePanel;
}(BasePanel));
egret.registerClass(EndGamePanel,'EndGamePanel');
//# sourceMappingURL=EndGamePanel.js.map