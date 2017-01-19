var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        _super.call(this);
        this._label = "";
    }
    var d = __define,c=Button,p=c.prototype;
    d(p, "label"
        ,function () {
            return this._label;
        }
        ,function (value) {
            this._label = value;
            if (this.labelDisplay) {
                this.labelDisplay.text = value;
            }
        }
    );
    p.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.labelDisplay) {
            this.labelDisplay.text = this._label;
        }
    };
    return Button;
}(eui.Component));
egret.registerClass(Button,'Button');
//# sourceMappingURL=Button.js.map