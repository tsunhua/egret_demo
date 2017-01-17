var AMixedMode = (function (_super) {
    __extends(AMixedMode, _super);
    function AMixedMode() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=AMixedMode,p=c.prototype;
    p.onAddToStage = function (e) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    p.onGroupComplete = function (e) {
        var bg = new egret.Bitmap(RES.getRes("bg_jpg"));
        this.addChild(bg);
        var icon = new egret.Bitmap(RES.getRes("egret_icon_png"));
        //设置混合模式
        // icon.blendMode = egret.BlendMode.NORMAL;//默认模式, 覆盖效果
        // icon.blendMode = egret.BlendMode.ADD; //溶解效果
        icon.blendMode = egret.BlendMode.ERASE; //擦除效果
        this.addChild(icon);
    };
    return AMixedMode;
}(egret.DisplayObjectContainer));
egret.registerClass(AMixedMode,'AMixedMode');
//# sourceMappingURL=AMixedMode.js.map