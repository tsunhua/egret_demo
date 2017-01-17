var CLoadText = (function (_super) {
    __extends(CLoadText, _super);
    function CLoadText() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=CLoadText,p=c.prototype;
    p.onAddToStage = function (e) {
        var _this = this;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.once(egret.Event.COMPLETE, function (evt) {
            var request = evt.currentTarget;
            console.log("response: " + request.response);
            var txtField = new egret.TextField();
            txtField.text = request.response;
            txtField.size = 24;
            _this.addChild(txtField);
        }, this);
        request.once(egret.IOErrorEvent.IO_ERROR, function (evt) {
            console.log("error: " + evt.eventPhase + "---" + evt.data);
        }, this);
        request.once(egret.ProgressEvent.PROGRESS, function (evt) {
            console.log("progress: " + Math.floor(100 * evt.bytesLoaded / evt.bytesTotal) + "%");
        }, this);
        request.open("resource/config/description.json", egret.HttpMethod.GET);
        request.send();
    };
    return CLoadText;
}(egret.DisplayObjectContainer));
egret.registerClass(CLoadText,'CLoadText');
//# sourceMappingURL=CLoadText.js.map