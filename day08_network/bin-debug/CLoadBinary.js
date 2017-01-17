var CLoadBinary = (function (_super) {
    __extends(CLoadBinary, _super);
    function CLoadBinary() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=CLoadBinary,p=c.prototype;
    p.onAddToStage = function (e) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.ARRAY_BUFFER;
        request.once(egret.Event.COMPLETE, function (evt) {
            var request = evt.currentTarget;
            var buff = request.response;
            console.log("response: " + buff.byteLength);
            // var dataView: DataView = new DataView(buff);
            // var str: string ="";
            // for (var i: number = 0; i < dataView.byteOffset; i++) {
            // 	str += dataView.getInt8(i)+'';
            // }
            // console.log("response: " + str);
        }, this);
        request.open("resource/assets/bg.jpg");
        request.send();
    };
    return CLoadBinary;
}(egret.DisplayObjectContainer));
egret.registerClass(CLoadBinary,'CLoadBinary');
//# sourceMappingURL=CLoadBinary.js.map