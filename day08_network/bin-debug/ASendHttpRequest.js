var ASendHttpRequest = (function (_super) {
    __extends(ASendHttpRequest, _super);
    function ASendHttpRequest() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=ASendHttpRequest,p=c.prototype;
    p.onAddToStage = function (e) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // var params = "?p1=getP1&p2=getP2";
        // request.open("http://httpbin.org/get"+params, egret.HttpMethod.GET);
        // request.send();
        request.open("http://httpbin.org/post", egret.HttpMethod.POST);
        var params = "p1=postP1&p2=postP2";
        request.send(params);
        request.addEventListener(egret.Event.COMPLETE, this.onRequestComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onRequestError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onRequestProgress, this);
    };
    p.onRequestError = function (event) {
        console.log("error: " + event.eventPhase + "---" + event.data);
    };
    p.onRequestProgress = function (event) {
        console.log("progress: " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    p.onRequestComplete = function (event) {
        var request = event.currentTarget;
        console.log("response: " + request.response);
    };
    return ASendHttpRequest;
}(egret.DisplayObjectContainer));
egret.registerClass(ASendHttpRequest,'ASendHttpRequest');
//# sourceMappingURL=ASendHttpRequest.js.map