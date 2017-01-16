var HyperlinkClick = (function (_super) {
    __extends(HyperlinkClick, _super);
    function HyperlinkClick() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=HyperlinkClick,p=c.prototype;
    p.onAddToStage = function (e) {
        var tx = new egret.TextField();
        this.addChild(tx);
        tx.textFlow = new Array(
        // { text: "这段文字有链接", style: { "href": "event:text event triggered" } },
        { text: "这段文字有链接", style: { "href": "http://www.egret.com/" } }, { text: "\n这段文字没有链接", style: {} });
        tx.touchEnabled = true;
        tx.addEventListener(egret.TextEvent.LINK, function (evt) {
            console.log(evt.text);
        }, this);
        tx.x = 10;
        tx.y = 90;
    };
    return HyperlinkClick;
}(egret.DisplayObjectContainer));
egret.registerClass(HyperlinkClick,'HyperlinkClick');
//# sourceMappingURL=GHyperlinkClick.js.map