var GameData = (function () {
    function GameData() {
    }
    var d = __define,c=GameData,p=c.prototype;
    //创建题目库
    GameData.createQuest = function (ran) {
        var a = Math.ceil(Math.random() * ran);
        var b = Math.ceil(Math.random() * ran);
        var result = a + b;
        var resultA = result + Math.ceil(Math.ceil(result * 0.3) * Math.random());
        var resultB = result - Math.ceil(Math.ceil(result * 0.3) * Math.random());
        var array = [];
        var rand = Math.random();
        if (rand < 0.5) {
            array = [result, resultA, resultB];
        }
        else if (rand > 0.5 && rand < 0.7) {
            array = [resultA, result, resultB];
        }
        else if (rand >= 0.7 && rand <= 0.8) {
            array = [resultA, resultB, result];
        }
        else if (rand >= 0.9) {
            array = [resultB, result, resultA];
        }
        else {
            array = [resultB, resultA, result];
        }
        var obj = { "label": a + "+" + b + "=?", "qs": array, "result": result + '' };
        return obj;
    };
    GameData.getResult = function (score) {
        if (score <= 10) {
            return "看来你的算术已经连小学生都不如";
        }
        else if (score > 10 && score <= 20) {
            return "看似还行，还是回去练练吧";
        }
        else if (score > 20 && score <= 40) {
            return "数学不错喔，不要骄傲。你已经击败了很多人";
        }
        else if (score > 40 && score < 60) {
            return "数学心算高手，击败了全国80%的人";
        }
        else {
            return "我已经是算术大神，击败了全国90%的人，谁不服来挑战我";
        }
    };
    GameData.getTitle = function (score) {
        if (score <= 10) {
            return "傻逼";
        }
        else if (score > 10 && score <= 20) {
            return "小学生";
        }
        else if (score > 20 && score <= 40) {
            return "心算中级生";
        }
        else if (score > 40 && score < 60) {
            return "算术大牛";
        }
        else {
            return "精算师";
        }
    };
    GameData.levelNumber = 10;
    return GameData;
}());
egret.registerClass(GameData,'GameData');
//# sourceMappingURL=GameData.js.map