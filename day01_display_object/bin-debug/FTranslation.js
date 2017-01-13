var FTranslation = (function (_super) {
    __extends(FTranslation, _super);
    function FTranslation() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=FTranslation,p=c.prototype;
    p.onAddToStage = function (event) {
        var bigText = new egret.TextField();
        bigText.text = "平移和滚动显示对象，平移和滚动显示对象";
        bigText.scrollRect = new egret.Rectangle(0, 0, 200, 50);
        bigText.cacheAsBitmap = true;
        this.addChild(bigText);
        bigText.touchEnabled = true;
        var lastX = 0;
        bigText.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            lastX = e.stageX;
        }, this);
        bigText.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            if (lastX == 0) {
                lastX = e.stageX;
                return;
            }
            var rect = bigText.scrollRect;
            var offsetX = e.stageX - lastX;
            rect.x -= offsetX;
            bigText.scrollRect = rect;
            lastX = e.stageX;
        }, this);
        //创建一个按钮,点击后控制文本内容向左移动
        var btnLeft = new egret.Shape();
        btnLeft.graphics.beginFill(0xcccc01);
        btnLeft.graphics.drawRect(0, 0, 50, 50);
        btnLeft.graphics.endFill();
        btnLeft.x = 50;
        btnLeft.y = 100;
        this.addChild(btnLeft);
        btnLeft.touchEnabled = true;
        btnLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, onScroll, this);
        //创建一个按钮,点击后控制文本内容向右移动
        var btnRight = new egret.Shape();
        btnRight.graphics.beginFill(0x01cccc);
        btnRight.graphics.drawRect(0, 0, 50, 50);
        btnRight.graphics.endFill();
        btnRight.x = 150;
        btnRight.y = 100;
        this.addChild(btnRight);
        btnRight.touchEnabled = true;
        btnRight.addEventListener(egret.TouchEvent.TOUCH_TAP, onScroll, this);
        function onScroll(e) {
            var rect = bigText.scrollRect;
            switch (e.currentTarget) {
                case btnLeft:
                    rect.x += 20;
                    break;
                case btnRight:
                    rect.x -= 20;
                    break;
            }
            bigText.scrollRect = rect;
        }
    };
    return FTranslation;
}(egret.DisplayObjectContainer));
egret.registerClass(FTranslation,'FTranslation');
//# sourceMappingURL=FTranslation.js.map