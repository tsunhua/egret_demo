var GamePanel = (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        _super.call(this);
        this.totalTime = 4;
        this.score = 0;
        this.skinName = "GamePanelSkin";
    }
    var d = __define,c=GamePanel,p=c.prototype;
    p.init = function () {
        var _this = this;
        this.timer = new egret.Timer(1000);
        this.timer.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.totalTime--;
            if (_this.totalTime > 0) {
                _this.timeTxt.text = _this.totalTime + "";
            }
            else {
                _this.gameOver();
            }
        }, this);
        this.initGameEvent();
        this.initData();
    };
    p.initData = function () {
        GameData.levelNumber = 10;
        this.nextQues();
    };
    p.nextQues = function () {
        this.totalTime = 4;
        this.timeTxt.text = this.totalTime + "";
        this.isSelected = false;
        this.timer.start();
        var curRanNum = this.getLevel();
        this.curQuesData = GameData.createQuest(curRanNum);
        if (this.curQuesData != null) {
            this.setButtonState(this.curQuesData["qs"], this.curQuesData["label"]);
        }
    };
    p.setButtonState = function (qs, label) {
        this.aBtn.labelDisplay.text = qs[0].toString();
        this.bBtn.labelDisplay.text = qs[1].toString();
        this.cBtn.labelDisplay.text = qs[2].toString();
        this.quesTxt.text = label;
    };
    p.getLevel = function () {
        if (this.score > GameData.levelNumber) {
            GameData.levelNumber += 20;
        }
        return GameData.levelNumber;
    };
    p.initGameEvent = function () {
        this.aBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
        this.bBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
        this.cBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
        this.resetBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReset, this);
    };
    p.onSelect = function (event) {
        this.isSelected = true;
        var btn = event.currentTarget;
        this.checkRight(btn.labelDisplay.text);
    };
    p.onReset = function (event) {
        this.timer.stop();
        LayerManager.gameLayer.removeChild(this);
        var game = new GamePanel();
        LayerManager.gameLayer.addChild(game);
        this.nextQues();
    };
    p.gameOver = function () {
        this.timer.stop();
        var allnumber = this.score;
        LayerManager.gameLayer.removeChild(this);
        var game = new EndGamePanel();
        var desc = GameData.getResult(allnumber);
        var title = GameData.getTitle(allnumber);
        game.setResult(desc, allnumber, title);
        LayerManager.gameLayer.addChild(game);
    };
    p.checkRight = function (value) {
        if (this.curQuesData != null) {
            if (value == this.curQuesData["result"]) {
                this.score++;
                this.mycurNumTxt.text = "当前分数：" + this.score;
                this.nextQues();
            }
            else {
                this.gameOver();
            }
        }
    };
    return GamePanel;
}(BasePanel));
egret.registerClass(GamePanel,'GamePanel');
//# sourceMappingURL=GamePanel.js.map