var BSimpleDate = (function (_super) {
    __extends(BSimpleDate, _super);
    function BSimpleDate() {
        _super.call(this);
        var boy = new Boy();
        boy.name = "男票";
        var girl = new Girl();
        girl.name = "女票";
        // boy.touchEnabled =true;可视化的话需要启动该开关才可以接收事件
        /**
         * 参数一：事件标识
         * 参数二：此处的事件监听者为girl.getDate, 这个function, 因为其函数参数就是一个DateEvent
         * 参数三：之所以传入girl, 是作为监听器function的上下文应用, 或者说指定监听器里面的this为何
         */
        boy.addEventListener(DateEvent.DATE, girl.getDate, girl);
        boy.order();
        if (boy.hasEventListener(DateEvent.DATE)) {
            boy.removeEventListener(DateEvent.DATE, girl.getDate, girl);
        }
    }
    var d = __define,c=BSimpleDate,p=c.prototype;
    return BSimpleDate;
}(egret.DisplayObjectContainer));
egret.registerClass(BSimpleDate,'BSimpleDate');
