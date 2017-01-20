var uiLayout;
(function (uiLayout) {
    var UIComponentClass = "eui.UIComponent";
    var RingLayout = (function (_super) {
        __extends(RingLayout, _super);
        function RingLayout() {
            _super.call(this);
        }
        var d = __define,c=RingLayout,p=c.prototype;
        p.measure = function () {
            _super.prototype.measure.call(this);
        };
        p.updateDisplayList = function (width, height) {
            _super.prototype.updateDisplayList.call(this, width, height);
            if (this.target == null) {
                return;
            }
            //确定圆心
            var centerX = width / 2;
            var centerY = height / 2;
            //确定半径
            var horizon = centerX / 2;
            var vertical = centerY / 2;
            var radius = horizon > vertical ? vertical : horizon;
            //确定数量
            var count = this.target.numElements;
            var maxX = 0;
            var maxY = 0;
            for (var i = 0; i < count; i++) {
                var layoutElement = (this.target.getElementAt(i));
                if (!egret.is(layoutElement, UIComponentClass) || !layoutElement.includeInLayout) {
                    //忽略非eui.UIComponent的实例和非包含子项
                    continue;
                }
                //子项的宽高
                var elementWidth = 0;
                var elementHeight = 0;
                //分配的每个子项的角度
                var angle = 2 * Math.PI * i / count;
                //原始x坐标值 - 子项的宽，确保居中 
                var childX = centerX + radius * Math.sin(angle) - elementWidth / 2;
                var childY = centerY - radius * Math.cos(angle) - elementHeight / 2;
                //调用该方法布局子项
                layoutElement.setLayoutBoundsPosition(childX, childY);
                maxX = Math.max(maxX, childX + elementWidth);
                maxY = Math.max(maxY, childY + elementHeight);
            }
            //设置内容大小，当测量子项完毕后调用
            this.target.setContentSize(maxX, maxY);
        };
        return RingLayout;
    }(eui.LayoutBase));
    uiLayout.RingLayout = RingLayout;
    egret.registerClass(RingLayout,'uiLayout.RingLayout');
})(uiLayout || (uiLayout = {}));
//# sourceMappingURL=MyLayout.js.map