var Girl = (function (_super) {
    __extends(Girl, _super);
    function Girl() {
        _super.call(this);
    }
    var d = __define,c=Girl,p=c.prototype;
    p.getDate = function (event) {
        console.log("得到" + event.target.name + "的邀请，去" + event._where + event._todo);
    };
    return Girl;
}(egret.Sprite));
egret.registerClass(Girl,'Girl');
