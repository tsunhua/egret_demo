var BColorMatrixFilter = (function (_super) {
    __extends(BColorMatrixFilter, _super);
    function BColorMatrixFilter() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=BColorMatrixFilter,p=c.prototype;
    p.onAddToStage = function (e) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    p.onGroupComplete = function (e) {
        var bmp = new egret.Bitmap(RES.getRes("mario_png"));
        this.addChild(bmp);
        //使用顔色轉換矩陣
        var colorMatrix = [
            //4x5矩阵，第一行表示R(Red) 值，第二行表示G(Green) 值，第三行表示B(Blue) 值，第四行表示A(alpha) 值
            //各个值与相应的原始值进行计算得出最终的RGBA值
            //每行的第一列表示当前行值的R值，第二列表示当前行值得G值，第三列表示当前行值得B值，第四列表示当前行值得A值，
            //第五列表示当前行值的偏移量（Offset）
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        bmp.filters = [colorFilter];
        //修改矩阵
        var colorMatrix2 = colorFilter.matrix;
        // colorMatrix2[0] = 100;
        colorMatrix2[4] = 100;
        colorFilter.matrix = colorMatrix2;
    };
    return BColorMatrixFilter;
}(egret.DisplayObjectContainer));
egret.registerClass(BColorMatrixFilter,'BColorMatrixFilter');
//# sourceMappingURL=BColorMatrixFilter.js.map